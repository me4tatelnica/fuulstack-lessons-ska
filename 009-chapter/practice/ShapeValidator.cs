namespace GeometryLibrary
{
    /// <summary>
    /// Статический класс для проверки фигур
    /// </summary>
    public static class ShapeValidator
    {
        /// <summary>
        /// Проверяет, могут ли три числа быть сторонами треугольника
        /// </summary>
        public static bool IsValidTriangle(double a, double b, double c)
        {
            return a > 0 && b > 0 && c > 0 &&
                a + b > c &&
                a + c > b &&
                b + c > a;
        }
    }
}