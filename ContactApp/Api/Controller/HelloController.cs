using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class HelloController : ControllerBase
{
  // app.MapGet("/test", () => "Hello, World!");
  // "http://localhost:5000"/api/Test/test
  [HttpGet("test")]
  public string GetHelloWorldText()
  {
    return "Hello world!";
  }


}