using Microsoft.EntityFrameworkCore.Migrations;

namespace eCommerceStarterCode.Migrations
{
    public partial class review : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9adda80a-e831-4445-901f-5f47f7b6b962");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ff0fc6bc-6d72-4b78-bb1a-a4342c7798cf");

            migrationBuilder.RenameColumn(
                name: "ReviewsId",
                table: "Reviews",
                newName: "ReviewId");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "21a92f08-a1c5-4a56-a064-8b6d7c63e04b", "500c03f2-eba4-46ed-94dc-01756d122c2a", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "401c9478-24e3-4fad-840a-ba425e01ea6d", "319675a5-6b9c-4ebf-ac34-de32a1dfc150", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "21a92f08-a1c5-4a56-a064-8b6d7c63e04b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "401c9478-24e3-4fad-840a-ba425e01ea6d");

            migrationBuilder.RenameColumn(
                name: "ReviewId",
                table: "Reviews",
                newName: "ReviewsId");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "9adda80a-e831-4445-901f-5f47f7b6b962", "668117e7-bacb-4094-a04c-9bee040de96a", "User", "USER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ff0fc6bc-6d72-4b78-bb1a-a4342c7798cf", "51869080-4a5c-4f3c-93d6-579611940cad", "Admin", "ADMIN" });
        }
    }
}
