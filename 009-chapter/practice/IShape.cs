namespace GeometryLibrary
{
    /// <summary>
    /// Базовый интерфейс для геометрических фигур
    /// </summary>
    public interface IShape
    {
        /// <summary>
        /// Вычисляет площадь фигуры
        /// </summary>
        double CalculateArea();
    }
}