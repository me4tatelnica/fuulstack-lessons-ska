namespace GeometryLibrary
{
    /// <summary>
    /// Класс треугольника
    /// </summary>
    public class Triangle : IShape
    {
        public double SideA { get; }
        public double SideB { get; }
        public double SideC { get; }

        /// <summary>
        /// Создает новый экземпляр треугольника
        /// </summary>
        public Triangle(double a, double b, double c)
        {
            if (!ShapeValidator.IsValidTriangle(a, b, c))
                throw new ArgumentException("Стороны не образуют треугольник");

            SideA = a;
            SideB = b;
            SideC = c;
        }

        /// <summary>
        /// Вычисляет площадь треугольника по формуле Герона
        /// </summary>
        public double CalculateArea()
        {
            double p = (SideA + SideB + SideC) / 2;
            return Math.Sqrt(p * (p - SideA) * (p - SideB) * (p - SideC));
        }

        /// <summary>
        /// Проверяет, является ли треугольник прямоугольным
        /// </summary>
        public bool IsRightAngled()
        {
            double a2 = SideA * SideA;
            double b2 = SideB * SideB;
            double c2 = SideC * SideC;

            return Math.Abs(a2 + b2 - c2) < double.Epsilon ||
                   Math.Abs(a2 + c2 - b2) < double.Epsilon ||
                   Math.Abs(b2 + c2 - a2) < double.Epsilon;
        }
    }
}