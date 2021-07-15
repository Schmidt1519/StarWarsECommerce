using Microsoft.EntityFrameworkCore.Migrations;

namespace eCommerceStarterCode.Migrations
{
    public partial class FixedReview : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9bfe66e2-395c-4285-8d3f-8f8c7002f994");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ec6d94bd-01ea-4a6e-b5b4-dba0e26d84b6");

            migrationBuilder.RenameColumn(
                name: "ReviewsId",
                table: "Reviews",
                newName: "ReviewId");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "1fcf7346-b1ce-4d1b-a482-f3b53611ceed", "fd480e2a-0bb9-4954-bdcc-912e1ec376fc", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c7d98015-4c42-4323-a1cb-20507bbcb592", "531db0d8-3712-4471-8497-743492e6f0da", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1fcf7346-b1ce-4d1b-a482-f3b53611ceed");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c7d98015-4c42-4323-a1cb-20507bbcb592");

            migrationBuilder.RenameColumn(
                name: "ReviewId",
                table: "Reviews",
                newName: "ReviewsId");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ec6d94bd-01ea-4a6e-b5b4-dba0e26d84b6", "6c6f7ad4-de9f-4a91-8d89-92ab4ba056dc", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9bfe66e2-395c-4285-8d3f-8f8c7002f994", "84e5d857-76f1-42cd-bf78-17b21e05a1d7", "Admin", "ADMIN" });
        }
    }
}
