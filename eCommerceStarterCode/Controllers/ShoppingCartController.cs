using eCommerceStarterCode.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace eCommerceStarterCode.Controllers
{
    [Route("api/cart")]
    [ApiController]
    public class ShoppingCartController : ControllerBase
    {
        private ApplicationDbContext _context;
        public ShoppingCartController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET Shopping Cart
        [HttpGet("{id:int}")]
        public IActionResult GetShoppingCart(int id)
        {
            var shoppingCart = _context.ShoppingCarts.Find(id);
            return Ok(shoppingCart);
        }
    }
}
