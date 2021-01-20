using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;


namespace IncidentWebApi.Authentication
{
    public class User_Account:IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
