using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPI.Models
{
    public class Favourite
    {
        public int Id { get; set; }

        public string FsId { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Image { get; set; }

        public string City { get; set; }

        public string Tag { get; set; }
    }
}
