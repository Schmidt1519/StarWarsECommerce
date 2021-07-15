using Microsoft.EntityFrameworkCore.Migrations;

namespace eCommerceStarterCode.Migrations
{
    public partial class run : Migration
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

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9adda80a-e831-4445-901f-5f47f7b6b962", "668117e7-bacb-4094-a04c-9bee040de96a", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ff0fc6bc-6d72-4b78-bb1a-a4342c7798cf", "51869080-4a5c-4f3c-93d6-579611940cad", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9adda80a-e831-4445-901f-5f47f7b6b962");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ff0fc6bc-6d72-4b78-bb1a-a4342c7798cf");

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
