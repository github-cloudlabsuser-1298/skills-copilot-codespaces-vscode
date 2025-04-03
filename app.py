def calculator():
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.
    The calculator provides the following options:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage calculation
    The function prompts the user to select an operation and input the required numbers.
    It performs the selected operation and displays the result. The function also includes
    error handling for invalid inputs and division by zero.
    Usage:
    - Run the function and follow the prompts to perform calculations.
    - Enter a number between 1 and 5 to select an operation.
    - Provide numeric inputs for the calculations.
    Raises:
    - ValueError: If the user enters non-numeric values for the inputs.
    """
    print("Simple Calculator")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")
    
    while True:
        try:
            # Get input from user
            choice = int(input("Enter choice (1-5): "))
            if choice < 1 or choice > 5:
                print("Invalid choice. Please select a number between 1 and 5.")
                continue
            
            num1 = float(input("Enter first number: "))
            
            if choice == 5:
                # Percentage calculation
                result = num1 / 100
                print(f"{num1}% = {result}")
            else:
                num2 = float(input("Enter second number: "))
                
                # Perform calculation based on choice
                if choice == 1:
                    result = num1 + num2
                    print(f"{num1} + {num2} = {result}")
                elif choice == 2:
                    result = num1 - num2
                    print(f"{num1} - {num2} = {result}")
                elif choice == 3:
                    result = num1 * num2
                    print(f"{num1} * {num2} = {result}")
                elif choice == 4:
                    if num2 != 0:
                        result = num1 / num2
                        print(f"{num1} / {num2} = {result}")
                    else:
                        print("Error: Cannot divide by zero")
            
            break  # Exit loop after successful calculation
            
        except ValueError:
            print("Invalid input. Please enter numeric values.")

# Run the calculator
if __name__ == "__main__":
    calculator()