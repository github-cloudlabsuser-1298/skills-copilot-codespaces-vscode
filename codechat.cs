using System;

class Program
{
    const int MaxElements = 100;

    static int CalculateSum(int[] numbers)
    {
        int sum = 0;
        foreach (int number in numbers)
        {
            sum += number;
        }
        return sum;
    }

    static int[] GetNumbersFromUser(int count)
    {
        int[] numbers = new int[count];
        Console.WriteLine($"Enter {count} integers:");

        for (int i = 0; i < count; i++)
        {
            while (true)
            {
                Console.Write($"Enter integer {i + 1}: ");
                if (int.TryParse(Console.ReadLine(), out numbers[i]))
                {
                    break;
                }
                Console.WriteLine("Invalid input. Please enter a valid integer.");
            }
        }

        return numbers;
    }

    static int GetNumberOfElements()
    {
        while (true)
        {
            Console.Write($"Enter the number of elements (1-{MaxElements}): ");
            if (int.TryParse(Console.ReadLine(), out int count) && count >= 1 && count <= MaxElements)
            {
                return count;
            }
            Console.WriteLine($"Invalid input. Please provide a number between 1 and {MaxElements}.");
        }
    }

    static void Main()
    {
        int numberOfElements = GetNumberOfElements();
        int[] numbers = GetNumbersFromUser(numberOfElements);
        int total = CalculateSum(numbers);

        Console.WriteLine($"Sum of the numbers: {total}");
    }
}