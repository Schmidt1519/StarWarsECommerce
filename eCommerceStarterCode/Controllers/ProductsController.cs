using eCommerceStarterCode.Data;
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
    public class ProductsController : ControllerBase
    {
        private ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
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
    }
}
