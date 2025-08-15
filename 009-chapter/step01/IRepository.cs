interface IRepo<T>
{
  int Index { get; }
  void Append(params T[] people);
  T GetById(int id);
}
interface IRepository : IRepo<Person>
{

}