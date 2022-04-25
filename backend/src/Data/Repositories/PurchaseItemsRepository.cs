using System;
using Pz.Cheeseria.Api.Models;
namespace Pz.Cheeseria.Api.Data
{
    public class PurchaseItemsRepository
    {
        public static readonly PurchaseItem[] PurchaseItems =
        {
            new PurchaseItem
                    {
                        PurchaseId = 1,
                        CheeseId = 1,
                        Quantity = 2
                    },
                    new PurchaseItem
                    {
                        PurchaseId = 1,
                        CheeseId = 2,
                        Quantity = 2
                    },
                    new PurchaseItem
                    {
                        PurchaseId = 1,
                        CheeseId = 3,
                        Quantity = 2
                    },new PurchaseItem
                    {
                        PurchaseId = 2,
                        CheeseId = 2,
                        Quantity = 1
                    },
                    new PurchaseItem
                    {
                        PurchaseId = 2,
                        CheeseId = 1,
                        Quantity = 3
                    },
                    new PurchaseItem
                    {
                        PurchaseId = 2,
                        CheeseId = 5,
                        Quantity = 4
                    }
        };
    }
}
