using System.ComponentModel.DataAnnotations;

namespace ShelleySDWebApp.Models
{
    public class FreeSEOModel
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Number { get; set; }
        [Required]
        public string BusinessName { get; set; }
        [Required]
        public string WebsiteURL { get; set; }
    }
}
