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

// Выдаем индекс в общий доступ
  // public int Index { get { return index; } }
  // public int Index { get => index; }
  public int Index => index;

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

}