using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestAPI.Models;

namespace RestAPI.Controllers
{
    [Route("api/v1/favourite")]
    public class FavouriteController : Controller
    {
        [HttpGet]
        public List<Favourite> GetAllFavourites()
        {
            var list = new List<Favourite>();
        
            list.Add (new Favourite()
            {
                Name = "Thuis",
                Address = "Lothar Wyrtki Laan",
                Image = "www.google.be",
                City = "Ranst"
            });
            list.Add(new Favourite()
            {
                Name = "Werk",
                Address = "Ellermanstraat",
                Image = "www.google.be",
                City = "Antwerpen"
            });
            return list;
        }

        [Route("{id}")]
        [HttpGet]
        public Favourite GetFavourite(int id)
        {
            return new Favourite()
            {
                Name = "Lynn",
                Id = id,
                City = "Zoersel",
                Address = "Zandstraat"
            };

        }

        [HttpDelete]
        public void DeleteFavourite()
        {

        }

        [HttpPut]
        public void UpdateBook()
        {

        }

    }
}