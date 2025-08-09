Person person1 = new("Ваня К.", 23);
Person person2 = new("Оксана", 73);
Person person3 = new("Гена И.", 5);

Repository repository = new Repository(10);
repository.Append(person1);
repository.Append(person2);
repository.Append(person3);

Printer printer = new Printer();
printer.Print(repository);

// var res = repository.GetPersonById(2);
// Console.WriteLine(res.Name);

