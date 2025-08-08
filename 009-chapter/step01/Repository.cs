class Repository
{
  private Person[] people;
  private int count;
  private int index = 0;
  public Repository(int count)
  {
    this.count = count;
    people = new Person[count];
  }

  // Метод, который позволяет добавлять персонажа
  public void Append(Person person)
  {
    if (index >= count) return;
    people[index] = person;
    index++;
  }

  // Метод получения данных
  public Person GetPersonById(int id)
  {
    if (id < 0 || id >= index)
    {
      return new Person("empty", -1);
    }
    return people[id];
  }

  // Метод, который печатает репозиторий
  public void Print()
  {
    for (int i = 0; i < this.index; i++)
    {
      Person temp = people[i];
      Console.WriteLine($"Имя: {temp.Name} возраст: {temp.Age}");
    }
  }
}