using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace IncidentWebApi.Authentication
{
    public class LoginModel
    {
        [EmailAddress]
        [Required(ErrorMessage ="User Name is required")]
        public string Email { get; set; }
        [Required(ErrorMessage ="Password is Required")]
        public string Password { get; set; }
    }
}
