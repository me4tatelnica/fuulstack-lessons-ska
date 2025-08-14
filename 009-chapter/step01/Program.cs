Teacher person1 = new Teacher("Ваня К.", 23, "История");
Employee person2 = new Employee("Оксана", 73, 50000);
Student person3 = new Student("Гена И.", 5, "Школа №5");

Student student = new Student("Студент 1", 7, "Школа № 47");
Console.WriteLine(student.ToString());

Employee employee = new Employee("Уборщик Петров", 42, 80000);
Console.WriteLine(employee.ToString());

Teacher teacher = new Teacher("Федор Васечкин", 51, "Литература");
Console.WriteLine(teacher.ToString());

// Repository repository = new Repository(10);
// repository.Append(person1, person2, person3);
// repository.Append(student, employee, teacher);

// Printer printer = new Printer();
// printer.Print(repository);

NewRepo newRepo = new NewRepo();
newRepo.Append(person1, person2, person3);
newRepo.Append(student, employee, teacher);

for (int i = 0; i < 1000; i++)
{
  newRepo.Append(new Employee(
      $"Сотрудник {i}",
      Random.Shared.Next(20, 70),
      Random.Shared.Next(20, 70) * 1500
      ));
}
Printer printer = new Printer();
printer.Print(newRepo);

Person person = new Teacher("", 0, "");
person = new Student("", 0, "");
person = new Employee("", 0, 0);
person = new NullPerson();

