using Pz.Cheeseria.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Pz.Cheeseria.Api.Data
{
    public static class PzCheeseriaContextLibrary
    {
        public async static Task<List<Cheese>> GetCheeses(this PzCheeseriaContext ctx)
        {
            List<Cheese> cheeses = await ctx.Cheeses.AsNoTracking().ToListAsync();
            return cheeses;
        }

        public async static Task<List<Purchase>> GetPurchases(this PzCheeseriaContext ctx)
        {
            List<Purchase> purchases = await ctx.Purchases.AsNoTracking().Include(p => p.Items).ToListAsync();
            return purchases;
        }

        public async static Task<Purchase> GetPurchase(this PzCheeseriaContext ctx, int? id)
        {
            Purchase purchase = await ctx.Purchases.Where(p => p.Id == id).AsNoTracking().Include(p => p.Items).FirstOrDefaultAsync();
            return purchase;
        }
    }
}
