using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerceStarterCode.Models
{
    public class Reviews
    {
        public int ReviewsId { get; set; }
        public string Description { get; set; }

        [ForeignKey("Product")]

        public int ProductId { get; set; }
        public Product Procuct { get; set; }
    }
}
