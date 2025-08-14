class Printer
{
  public void Print(IRepository repository)
  {
    int max = repository.Index;

    for (int i = 0; i < max; i++)
    {
      Person temp = repository.GetById(i);
      Console.WriteLine(temp.ToString());
    }
  }
}