using Microsoft.EntityFrameworkCore.Migrations;

namespace Pz.Cheeseria.Api.Migrations
{
    public partial class PzcMigration4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PurchaseItemId",
                table: "PurchaseItems",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "PurchaseItems",
                newName: "PurchaseItemId");
        }
    }
}
