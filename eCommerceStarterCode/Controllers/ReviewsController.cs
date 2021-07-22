using eCommerceStarterCode.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        var review = _context.Reviews.Find(id);
        if (review == null)
        {
            return NotFound();
        }
        return Ok(review);
        }

        [HttpPost("create")]
        public IActionResult PostUserrEVIEW([FromBody] Models.Review value)
        {
            _context.Reviews.Add(value);
            _context.SaveChanges();
            return StatusCode(201, value);
        }

        // GET all reviews
        [HttpGet("reviews")]
        public IActionResult GetAllReviews()
        {
            // Retrieve all reviews from database
            var reviews = _context.Reviews.ToList();
            return Ok(reviews);
        }
    }
}