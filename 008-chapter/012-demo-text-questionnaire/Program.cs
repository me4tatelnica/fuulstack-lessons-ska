int score = 0;

string question = "Переведи слово 'table'? [стол, табло]";
Console.WriteLine(question);
string answer = Console.ReadLine();
if (answer == "стол")
{
    score += 10;
    Console.WriteLine("Молодец!");
}
else
{
    Console.WriteLine("Открой словарь!");
}

question = "Переведи слово 'true'? [истинный, ложный]";
Console.WriteLine(question);
answer = Console.ReadLine();
if (answer == "истинный")
{
    score += 10;
    Console.WriteLine("Молодец!");
}
else
{
    Console.WriteLine("Открой словарь!");
}

Console.WriteLine($"Счёт: {score}");
