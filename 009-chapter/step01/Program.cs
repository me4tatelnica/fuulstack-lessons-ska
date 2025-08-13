Teacher person1 = new Teacher("Ваня К.", 23, "История");
Employee person2 = new Employee("Оксана", 73, 50000);
Student person3 = new Student("Гена И.", 5, "Школа №5");

Student student = new Student("Студент 1", 7, "Школа № 47");
Console.WriteLine(student.ToString());

Employee employee = new Employee("Уборщик Петров", 42, 80000);
Console.WriteLine(employee.ToString());

Teacher teacher = new Teacher("Федор Васечкин", 51, "Литература");
Console.WriteLine(teacher.ToString());

Repository repository = new Repository(10);
repository.Append(person1, person2, person3);
repository.Append(student, employee, teacher);

Printer printer = new Printer();
printer.Print(repository);

// var res = repository.GetPersonById(2);
// Console.WriteLine(res.Name);

