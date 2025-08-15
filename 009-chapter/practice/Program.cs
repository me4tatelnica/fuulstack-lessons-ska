using GeometryLibrary;
using System;

class Program
{
  static void Main()
  {
    try
    {
      // Создание фигур
      IShape circle = new Circle(5);
      IShape triangle = new Triangle(3, 4, 5);

      // Вычисление площадей без знания конкретного типа на этапе компиляции
      Console.WriteLine($"Площадь круга: {AreaCalculator.CalculateArea(circle)}");
      Console.WriteLine($"Площадь треугольника: {AreaCalculator.CalculateArea(triangle)}");

      // Проверка сторон треугольника
      Console.WriteLine($"Могут ли 1, 2, 3 быть сторонами треугольника: " +
          $"{ShapeValidator.IsValidTriangle(1, 2, 3)}");
      Console.WriteLine($"Могут ли 3, 4, 5 быть сторонами треугольника: " +
          $"{ShapeValidator.IsValidTriangle(3, 4, 5)}");

      // Проверка на прямоугольность треугольника
      if (triangle is Triangle rightTriangle)
      {
        Console.WriteLine($"Треугольник прямоугольный: {rightTriangle.IsRightAngled()}");
      }
    }
    catch (Exception ex)
    {
      Console.WriteLine($"Ошибка: {ex.Message}");
    }
  }
}
