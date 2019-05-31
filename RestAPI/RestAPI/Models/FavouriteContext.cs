using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPI.Models
{
    public class FavouriteContext : DbContext
    {
        public FavouriteContext(DbContextOptions<FavouriteContext> options): base(options)
        {
        }
        public DbSet<Favourite> Favourite { get; set; }
    }
}
