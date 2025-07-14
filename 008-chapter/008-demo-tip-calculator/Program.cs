﻿// Считываем сумму счета
Console.Write("Введите сумму счёта: ");
double billAmount = double.Parse(Console.ReadLine());

// Считываем проценнт чаевых
Console.Write("Введите процент чаевых: ");
double tipPercentage = double.Parse(Console.ReadLine());

// Считываем количество человек
Console.Write("Введите количество человек: ");
int numberOfPeople = int.Parse(Console.ReadLine());

// Производим расчёты
double tipAmount = billAmount * tipPercentage / 100;
double totalAmount = billAmount + tipAmount;
double perPersonAmount = totalAmount / numberOfPeople;

// Выводим на экран
Console.WriteLine($"Общий счёт: {totalAmount}");
Console.WriteLine($"Процент чаевых: {tipPercentage}%");
Console.WriteLine($"С каждого: {perPersonAmount}");