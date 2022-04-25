using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Pz.Cheeseria.Api.Models
{
    public class PurchaseItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int PurchaseId { get; set; }

        public int CheeseId { get; set; }

        public int Quantity { get; set; }
    }
}
