using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace ShelleySDWebApp.Models
{
    public class EmailModel
    {
      [Required]
      public string Name { get; set; }
      [Required]
      public string Email { get; set; }
      [Required]
      public string Phone { get; set; }
      [Required]
      public string Subject { get; set; }
      [Required]
      public string Message { get; set; }

      //public IFormFile File { get; set; }
  }
}
