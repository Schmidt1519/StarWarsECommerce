using eCommerceStarterCode.Data;
using eCommerceStarterCode.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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

        // GET all Shopping Carts
        [HttpGet("carts")]

        public IActionResult GetAllCarts()
        {
            // Retrieve all carts from database
            var carts = _context.ShoppingCarts.ToList();
            return Ok(carts);
        }

        //GET a Shopping Cart
        [HttpGet("{id:int}")]
        public IActionResult GetShoppingCart(int id)
        {
            var shoppingCart = _context.ShoppingCarts.Find(id);
            return Ok(shoppingCart);
        }

        [HttpDelete("remove/{id:int}")]
        public IActionResult DeleteFromCart(int id)
        {
            var cart = _context.ShoppingCarts.Find(id);
            _context.ShoppingCarts.Remove(cart);
            _context.SaveChanges();

            return Ok();
        }

        [HttpPost]
        public IActionResult PostProduct([FromBody] Models.ShoppingCart value)
        {
            _context.ShoppingCarts.Add(value);
            _context.SaveChanges();
            return StatusCode(201, value);
        }

        [HttpPut("update/{shoppingCartId}")]
        public IActionResult EditShoppingCart(int shoppingCartId, [FromBody] ShoppingCart value)
        {
            var userId = User.FindFirst("id");
            var cart = _context.ShoppingCarts.Find(shoppingCartId);
            if (cart == null)
            {
                return NotFound();
            }
            cart.ShoppingCartId = cart.ShoppingCartId;
            cart.ProductsId = value.ProductsId;
            cart.UserId = value.UserId;
            cart.Quantity = cart.Quantity += value.Quantity;
            _context.SaveChanges();
            return Ok(cart);
        }
    }
}
