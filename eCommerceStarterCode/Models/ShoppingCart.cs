using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace eCommerceStarterCode.Models
{
    public class ShoppingCart
    {
        public int ShoppingCartId { get; set; }

        [ForeignKey("Product")]
        public int ProductsId { get; set; }
        public Product Product { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }
        public User User { get; set; }

        public int Quantity { get; set; }
    }
}
