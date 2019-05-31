using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPI.Models
{
    public class DBInitializer
    {
        public static void Initialize(FavouriteContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

            if (!context.Favourite.Any())
            {
                 var place = new Favourite()
                 {
                         Name = "Huis",
                         Address = "berkenlaan 6",
                         City = "Antwerpen",
                         Image = "https://ss3.4sqi.net/img/categories_v2/food/winery_64.png",
                         Tag = "Gym"
                 };
            
             //Add item to collection
             context.Favourite.Add(place);
             //Save changes
             context.SaveChanges();
            }
        }
    }
}
