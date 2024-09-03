using Microsoft.AspNetCore.Mvc;
using ReactAspCrud.Models;

namespace ReactAspCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly string filePath = Path.Combine(Directory.GetCurrentDirectory(), "C:\\Users\\z004v59b\\source\\repos\\NameForm\\React-WebApp\\Name File.txt"); // Path to your text file




        [HttpPost]
        [Route("GetName")]
        public async Task<IActionResult> Post([FromBody] NameModels nameModel)
        {
            if (nameModel == null || string.IsNullOrEmpty(nameModel.FirstName) || string.IsNullOrEmpty(nameModel.LastName))
            {
                return BadRequest("Invalid data.");
            }

            var concatenatedName = $"{nameModel.FirstName} {nameModel.LastName}";
            await System.IO.File.AppendAllTextAsync(filePath, concatenatedName + System.Environment.NewLine);

            return Ok("Name concatenated and saved.");
        }

    }
}



