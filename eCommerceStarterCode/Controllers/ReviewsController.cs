using eCommerceStarterCode.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerceStarterCode.Controllers
{
    [Route("api/reviews")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private ApplicationDbContext _context;

        public ReviewsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("{id:int}")]

        public IActionResult GetReviews(int id)
        {
            // Retrieve reviews from database
            var review = _context.Reviews.Find(id);
            if (review == null)
            {
                return NotFound();
            }
            return Ok(review);
        }
    }
}