using Microsoft.AspNetCore.Mvc;
using Pz.Cheeseria.Api.Data;
using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheesesController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(typeof(Cheese[]), 200)]
        public IActionResult GetCheeses()
        {
            return Ok(CheesesRepository.Cheeses);
        }
    }
}