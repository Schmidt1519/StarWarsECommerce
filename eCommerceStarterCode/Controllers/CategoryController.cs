using eCommerceStarterCode.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace eCommerceStarterCode.Controllers
{
    [Route("api/category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ApplicationDbContext _context;
        public CategoryController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET Categories
        [HttpGet("{id:int}")]
        public IActionResult GetCategory(int id)
        {
            var category = _context.Categories.Find(id);
            return Ok(category);
        }

        [HttpGet("categories")]

        public IActionResult GetAllCategorys()
        {
            var categories = _context.Categories.ToList();
            if (categories == null)
            {
                return NotFound();
            }
            return Ok(categories);
        }

        [HttpPost("create")]
        public IActionResult PostUserCategory([FromBody] Models.Category value)
        {
            _context.Categories.Add(value);
            _context.SaveChanges();
            return StatusCode(201, value);
        }
    }
}
