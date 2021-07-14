using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerceStarterCode.Models
{
    public class ShoppingCart
    {
        [Key]
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }

    }
}
