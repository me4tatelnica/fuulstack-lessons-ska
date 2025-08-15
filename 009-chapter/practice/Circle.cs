namespace GeometryLibrary
{
    /// <summary>
    /// Класс круга
    /// </summary>
    public class Circle : IShape
    {
        public double Radius { get; }

        /// <summary>
        /// Создает новый экземпляр круга
        /// </summary>
        public Circle(double radius)
        {
            if (radius <= 0)
                throw new ArgumentException("Радиус должен быть положительным числом", nameof(radius));

            Radius = radius;
        }

        /// <summary>
        /// Вычисляет площадь круга
        /// </summary>
        public double CalculateArea()
        {
            return Math.PI * Math.Pow(Radius, 2);
        }
    }
}