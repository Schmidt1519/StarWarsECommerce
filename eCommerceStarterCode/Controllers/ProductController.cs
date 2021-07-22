using eCommerceStarterCode.Data;
using eCommerceStarterCode.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerceStarterCode.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private ApplicationDbContext _context;

        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET all products
        [HttpGet("products")]

        public IActionResult GetAllProducts()
        {
            // Retrieve all product from database
            var products = _context.Products.ToList();
            return Ok(products);
        }


        [HttpGet("{id:int}")]
        
        public IActionResult GetProductById(int id)
        {
            // Retrieve product by ID from database
            var productById = _context.Products.Find(id);
            return Ok(productById);
        }

        [HttpPost]
        public IActionResult PostProduct([FromBody] Models.Product value)
        {
            _context.Products.Add(value);
            _context.SaveChanges();
            return StatusCode(201, value);
        }

        [HttpPut("rating/{productId}")]

        public IActionResult EditRating(int productId, [FromBody] Product value)
        {
            var rating = _context.Products.Find(productId);
            if (rating == null)
            {
                return NotFound();
            }
            rating.ProductId = rating.ProductId;
            rating.Name = rating.Name;
            rating.Description = rating.Description;
            rating.Price = rating.Price;
            rating.AverageRating = value.AverageRating;
            rating.Category = rating.Category;
            _context.SaveChanges();
            return Ok(rating);
        }
    }
}
