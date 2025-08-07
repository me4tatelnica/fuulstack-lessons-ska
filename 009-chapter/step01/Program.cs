Person person1 = new("Ваня К.", 23);
Person person2 = new("Оксана", 73);

Repository repository = new Repository(10);
repository.Append(person1);
repository.Append(person2);

repository.Print();

