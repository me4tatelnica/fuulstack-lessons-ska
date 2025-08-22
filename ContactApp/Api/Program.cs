using Microsoft.OpenApi.Models;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();

// app.MapGet("/test", () => "Hello, World!");
// app.MapGet("/hello/{name}", (string name) => $"Привет, {name}!");
app.MapControllers();
app.Run();


