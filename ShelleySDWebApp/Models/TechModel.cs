using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon.DynamoDBv2.DataModel;

namespace ShelleySDWebApp.Models
{
  [DynamoDBTable("ssd-technology")]
  public class TechModel
  {
    [DynamoDBHashKey]
    public int Id { get; set; }
    public string Tittle { get; set; }
    public string Description { get; set; }
    public string ImgSrc { get; set; }
    public string Alt { get; set; }
    public string Link { get; set; }
    public int Type { get; set; }
  }
}
