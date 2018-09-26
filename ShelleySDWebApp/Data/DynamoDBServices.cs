using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;
using Amazon.Runtime;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using ShelleySDWebApp.Core;
using ShelleySDWebApp.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShelleySDWebApp.Data
{
  public class DynamoDBServices : ITech
  {
    IAmazonDynamoDB dynamoDBClient { get; set; }

    public DynamoDBServices(IOptions<MyDynamoDB> configuration)
    {
      try
      {
        var credentials = new BasicAWSCredentials(configuration.Value.AccessKey, configuration.Value.SecretKey);
        dynamoDBClient = new AmazonDynamoDBClient(credentials, RegionEndpoint.APSoutheast2);
      }
      catch (Exception)
      {

        throw;
      }
    }

    public async Task<IEnumerable<TechModel>> GetTechAsync()
    {
      try
      {
        IEnumerable<TechModel> model = new List<TechModel>();
        //Table table = Table.LoadTable(dynamoDBClient, "ssd-technology");

        var tableResponse = await dynamoDBClient.ListTablesAsync();
        if (tableResponse.TableNames.Contains("ssd-technology"))
        {
          var context = new DynamoDBContext(dynamoDBClient);
          List<ScanCondition> conditions = new List<ScanCondition>();
          var allDocs = await context.ScanAsync<TechModel>(conditions).GetRemainingAsync();
          //var savedState = allDocs.ToArray();
          model = allDocs;
        }
        return model.OrderBy(x => x.Id);
      }
      catch (Exception)
      {

        throw;
      }

    }

  }
}
