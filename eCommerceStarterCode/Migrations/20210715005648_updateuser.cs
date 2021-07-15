using Microsoft.EntityFrameworkCore.Migrations;

namespace eCommerceStarterCode.Migrations
{
    public partial class updateuser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9412d25a-01de-4890-ade0-fbca8d02f67b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f08a86ff-9abd-463e-8c45-11bce014d264");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ec6d94bd-01ea-4a6e-b5b4-dba0e26d84b6", "6c6f7ad4-de9f-4a91-8d89-92ab4ba056dc", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9bfe66e2-395c-4285-8d3f-8f8c7002f994", "84e5d857-76f1-42cd-bf78-17b21e05a1d7", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9bfe66e2-395c-4285-8d3f-8f8c7002f994");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ec6d94bd-01ea-4a6e-b5b4-dba0e26d84b6");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9412d25a-01de-4890-ade0-fbca8d02f67b", "64ef09a4-aecf-4b29-8235-0edfe90819d7", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "f08a86ff-9abd-463e-8c45-11bce014d264", "d0226ad2-59ac-4e14-8159-49fc954cccf2", "Admin", "ADMIN" });
        }
    }
}
