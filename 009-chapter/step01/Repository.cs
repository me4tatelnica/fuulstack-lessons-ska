class Repository : IRepository
{
  private Person[] storage;
  private int count;
  private int index = 0;
  public Repository(int count)
  {
    this.count = count;
    storage = new Person[count];
  }

// Выдаем индекс в общий доступ
  // public int Index { get { return index; } }
  // public int Index { get => index; }
  public int Index => index;

  // Метод, который позволяет добавлять персонажа
  public void Append(params Person[] people)
  {
    foreach (var person in people)
    {
      if (index >= count) return;
      storage[index] = person;
      index++;
    }
  }

  // Метод получения данных
  public Person GetById(int id)
  {
    if (id < 0 || id >= index)
    {
      return new NullPerson();
    }
    return storage[id];
  }

}