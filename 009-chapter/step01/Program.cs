Person person1 = new("Ваня К.", 23);
Person person2 = new("Оксана", 73);
Person person3 = new("Гена И.", 5);

Repository repository = new Repository(10);
// repository.Append(person1);
// repository.Append(person2);
// repository.Append(person3);
repository.Append(person1, person2, person3);

Printer printer = new Printer();
printer.Print(repository);

// var res = repository.GetPersonById(2);
// Console.WriteLine(res.Name);

Student s = new Student("Студент 1", 7, "Школа № 47");
Console.WriteLine(s.ToString());

Employee sl = new Employee("Уборщик Петров", 42, 80000);
Console.WriteLine(sl.ToString());

Teacher sb = new Teacher ("Федор Васечкин", 51, "Литература");
Console.WriteLine(sb.ToString());