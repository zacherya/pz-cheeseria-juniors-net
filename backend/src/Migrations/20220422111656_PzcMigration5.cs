using Microsoft.EntityFrameworkCore.Migrations;

namespace Pz.Cheeseria.Api.Migrations
{
    public partial class PzcMigration5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PurchaseItems_Cheeses_CheeseId",
                table: "PurchaseItems");

            migrationBuilder.DropIndex(
                name: "IX_PurchaseItems_CheeseId",
                table: "PurchaseItems");

            migrationBuilder.DropColumn(
                name: "Paid",
                table: "Purchases");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Paid",
                table: "Purchases",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseItems_CheeseId",
                table: "PurchaseItems",
                column: "CheeseId");

            migrationBuilder.AddForeignKey(
                name: "FK_PurchaseItems_Cheeses_CheeseId",
                table: "PurchaseItems",
                column: "CheeseId",
                principalTable: "Cheeses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
