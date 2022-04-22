using Microsoft.AspNetCore.Mvc;
using Pz.Cheeseria.Api.Data;
using Pz.Cheeseria.Api.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Pz.Cheeseria.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheesesController : ControllerBase
    {
        private readonly PzCheeseriaContext _context;

        public CheesesController(PzCheeseriaContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Cheese>), 200)]
        public async Task<IActionResult> GetCheeses()
        {
            return Ok(await _context.GetCheeses());
        }

    }
}