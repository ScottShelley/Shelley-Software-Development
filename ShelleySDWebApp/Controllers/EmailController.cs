using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ShelleySDWebApp.Models;
using SendGrid;
using SendGrid.Helpers.Mail;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShelleySDWebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class EmailController : Controller
    {
        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] EmailModel model)
        {
          if (model != null)
          {

                if (ModelState.IsValid)
                {
                    bool result = await SendEmail(model);

                    return Ok(result);
                }
                else
                {
                    return BadRequest(ModelState);
                }
          }



          return BadRequest();
            
        }

        private async Task<bool> SendEmail(EmailModel model)
        {
            try
            {
              var apiKey = System.Environment.GetEnvironmentVariable("SENDGRID_APIKEY");
              var client = new SendGridClient(apiKey);

              var msg = new SendGridMessage()
              {
                From = new EmailAddress(model.Email, model.Name),
                Subject = model.Subject,
                PlainTextContent = "Hello, Email!",
                HtmlContent = $"<p><strong>{model.Name}</strong></p><p>Email: {model.Email}</p><p>Phone Number: {model.Phone}</p><p>Message: {model.Message}</p>"
              };
              msg.AddTo(new EmailAddress("scott@shelleysoftwaredevelopment.com.au", "Scott"));
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
