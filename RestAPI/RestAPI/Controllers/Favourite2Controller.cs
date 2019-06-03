using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RestAPI.Models;

namespace RestAPI.Controllers
{
    [Route("api/v1/favourites")]
    public class Favourite2Controller : Controller
    {
        private readonly FavouriteContext context;
        public Favourite2Controller(FavouriteContext context)
        {
            this.context = context;
        }

        [Authorize]
        [HttpGet]
        public List<Favourite> GetAllFavourites(string tag, int? page, int length = 6)
        {
            IQueryable<Favourite> query = context.Favourite;

            if (!string.IsNullOrWhiteSpace(tag))
            {
                query = query.Where(d => d.Tag == tag);
                return query.ToList();
            }
            if (page.HasValue)
                query = query.Skip(page.Value * length);

            return query.Take(length).ToList();

        }

        [Authorize]
        [Route("{id}")]
        [HttpGet]
        public IActionResult GetFavourite(int id)
        {
            var favourite = context.Favourite.Find(id);
                if (favourite == null)
                    return NotFound();
             
                return Ok(favourite);
        }

        [Authorize]
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteFavourite(int id)
        {
            var favourite = context.Favourite.Find(id);
            if (favourite == null)
                return NotFound();
            context.Favourite.Remove(favourite);
            context.SaveChanges();
            return NoContent();
        }

        [Authorize]
        [HttpPost]
        public IActionResult CreateFavourite([FromBody] Favourite newFavourite)
        {
            //Add to DB, ID will be added
            context.Favourite.Add(newFavourite);
            context.SaveChanges();
            return Created("", newFavourite);
        }

        [Authorize]
        [HttpPut]
        [Route("{id}")]
        public IActionResult UpdateFavourite([FromBody] Favourite updateFavourite)
        {
            var origFavourite = context.Favourite.Find(updateFavourite.Id);

            if (origFavourite == null)
                return NotFound();
            origFavourite.Name = updateFavourite.Name;

            context.SaveChanges();
            return Ok(origFavourite);
        }
    }
}