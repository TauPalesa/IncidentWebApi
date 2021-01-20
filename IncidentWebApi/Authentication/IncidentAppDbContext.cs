using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace IncidentWebApi.Authentication
{
    public class IncidentAppDbContext:IdentityDbContext<User_Account>
    {
        public IncidentAppDbContext(DbContextOptions<IncidentAppDbContext>options):base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
