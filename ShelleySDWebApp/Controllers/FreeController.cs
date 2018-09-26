using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;
using ShelleySDWebApp.Models;

namespace ShelleySDWebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/")]
    public class FreeController : Controller
    {
      [HttpPost("free-seo-assessmnet")]
      public async Task<IActionResult> PostSEO([FromBody] FreeSEOModel model)
      {
        if (model != null)
        {
          if (ModelState.IsValid)
          {
              bool result = await SendSEO(model);

              return Ok(result);
          }
          else
          {
              return BadRequest(ModelState);
          }
        }
        return BadRequest();
      }

      [HttpPost("social-media-audit")]
      public async Task<IActionResult> PostAudit([FromBody] FreeSocialMediaAuditModel model)
      {
        if (model != null)
        {
          if (ModelState.IsValid)
          {
              if (model.Agree == true)
              {
                bool result = await SendSocailAudit(model);

                return Ok(result);
              }
              else
              {
                return BadRequest("Agree is Required!");
              }
              
          }
          else
          {
              return BadRequest(ModelState);
          }
        }
        return BadRequest();
      }

      private async Task<bool> SendSEO([FromBody] FreeSEOModel model)
      {
        try
        {
          var apiKey = System.Environment.GetEnvironmentVariable("SENDGRID_APIKEY");
          var client = new SendGridClient(apiKey);

          var msg = new SendGridMessage()
          {
            From = new EmailAddress(model.Email, model.FirstName + " " + model.Surname),
            Subject = "Free SEO Assessment",
            HtmlContent = $"<p><strong>{model.FirstName} {model.Surname}</strong></p><p>Email: {model.Email}</p><p>Phone Number: {model.Number}</p><p>Business Name: {model.BusinessName}</p><p>Website URL: {model.WebsiteURL}</p>"
          };
          msg.AddTo(new EmailAddress("scott@shelleysoftdev.com.au", "Scott"));
          var response = await client.SendEmailAsync(msg);

          return true;
        }
        catch (Exception)
        {
          return false;
        }
      }

      private async Task<bool> SendSocailAudit(FreeSocialMediaAuditModel model)
      {
        try
        {
          var apiKey = System.Environment.GetEnvironmentVariable("SENDGRID_APIKEY");
          var client = new SendGridClient(apiKey);

          var msg = new SendGridMessage()
          {
            From = new EmailAddress(model.Email, model.FirstName + " " + model.Surname),
            Subject = "Free Socail Media Audit",
            HtmlContent = $"<p><strong>{model.FirstName} {model.Surname}</strong></p><p>Email: {model.Email}</p><p>Phone Number: {model.Number}</p><p>Searchable business name - Generic: {model.BusinessName}</p><p>Nature of the business?: {model.Nature}</p><p>Select the platforms you wish to have reviewed most?: {model.Platform}</p><p>Where do you spend most of your advertising money?: {model.Spend}</p>"
          };
          msg.AddTo(new EmailAddress("scott@shelleysoftdev.com.au", "Shelley Software Development"));
          msg.AddTo(new EmailAddress("info@socialbullmedia.com.au", "Socail Bull Media"));
          var response = await client.SendEmailAsync(msg);

          return true;
        }
        catch (Exception)
        {
          return false;
        }
      }
    }
}
