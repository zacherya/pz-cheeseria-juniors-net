﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Pz.Cheeseria.Api.Data;
using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchasesController : Controller
    {
        private readonly PzCheeseriaContext _context;

        public PurchasesController(PzCheeseriaContext context)
        {
            _context = context;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<Purchase>), 200)]
        public async Task<IActionResult> Index()
        {
            return Ok(await _context.GetPurchases());
        }

        [HttpGet]
        [ProducesResponseType(typeof(Purchase), 200)]
        [Route("get/{id}")]
        public async Task<IActionResult> Get(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var purchase = await _context.GetPurchase(id);
            if (purchase == null)
            {
                return NotFound();
            }

            return Ok(purchase);
        }

        [HttpPost]
        [ProducesResponseType(typeof(Purchase), 200)]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index([Bind("Id,Paid,PurchasedOn")] Purchase purchase)
        {
            if (ModelState.IsValid)
            {
                _context.Add(purchase);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return Ok(purchase);
        }
    }
}