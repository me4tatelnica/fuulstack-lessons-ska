namespace GeometryLibrary
{
    /// <summary>
    /// Класс для работы с площадями фигур
    /// </summary>
    public static class AreaCalculator
    {
        /// <summary>
        /// Вычисляет площадь фигуры без знания конкретного типа на этапе компиляции
        /// </summary>
        public static double CalculateArea(IShape shape)
        {
            if (shape == null)
                throw new ArgumentNullException(nameof(shape));

            return shape.CalculateArea();
        }
    }
}