using eCommerceStarterCode.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace eCommerceStarterCode.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet("products")]

    public IActionResult GetAllProducts()
        {
            var products = _context.Products.ToList();
            if(products == null)
            {
                return NotFound();
            }
            return Ok(products);
        }

        [HttpGet("{id:int}")]

        public IActionResult GetUserProducts(int id)
        {
            var products = _context.Products.Find(id);
            if (products == null)
            {
                return NotFound();
            }
            return Ok(products);
        }

        [HttpPost("create")]
        public IActionResult PostUserProduct([FromBody] Models.Product value)
        {
            _context.Products.Add(value);
            _context.SaveChanges();
            return StatusCode(201, value);
        }
    }

    
}
