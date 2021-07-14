using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerceStarterCode.Models
{
    public class Product
    {
        public Product()
        {
            ShoppingCarts = new HashSet<ShoppingCart>();
        }

        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Rating { get; set; }
        public string Reviews { get; set; }
        public string Category { get; set; }

        public ICollection<ShoppingCart> ShoppingCarts { get; set; }
    }

}
