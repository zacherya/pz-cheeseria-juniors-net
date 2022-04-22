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
                Paid = true,
                PurchasedOn = DateTime.Now.AddDays(-6)
            },
            new Purchase
            {
                Paid = true,
                PurchasedOn = DateTime.Now.AddDays(-14)
            }
        };
    }
}
