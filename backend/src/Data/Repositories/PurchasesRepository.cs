using System;
using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Data
{
    public class PurchasesRepository
    {
        public static readonly Purchase[] Purchases =
        {
            new Purchase
            {
                PurchasedOn = DateTime.Now.AddDays(-6)
            },
            new Purchase
            {
                PurchasedOn = DateTime.Now.AddDays(-14)
            }
        };
    }
}
