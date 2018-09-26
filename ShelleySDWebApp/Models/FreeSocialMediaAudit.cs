using System.ComponentModel.DataAnnotations;

namespace ShelleySDWebApp.Models
{
    public class FreeSocialMediaAuditModel
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
        public string Nature { get; set; }
        [Required]
        public string Platform { get; set; }
        [Required]
        public string Spend { get; set; }
        [Required]
        public bool Agree { get; set; }
    }
}
