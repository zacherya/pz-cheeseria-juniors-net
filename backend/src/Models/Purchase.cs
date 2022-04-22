﻿using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pz.Cheeseria.Api.Models
{
    public class Purchase
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public bool Paid { get; set; }

        public DateTime PurchasedOn { get; set; } = DateTime.Now;

        [ForeignKey("PurchaseId")]
        public ICollection<PurchaseItem> Items { get; set; }

        public decimal GetPurchaseTotal()
        {
            decimal total = Items.Sum(item => item.Cheese.Price * item.Quantity);
            return total;
        }
    }
}
