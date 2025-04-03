const { calculator } = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator Function', () => {
    let promptMock;
    let consoleLogMock;

    beforeEach(() => {
        // Mock prompt and console.log
        promptMock = jest.spyOn(global, 'prompt').mockImplementation();
        consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        // Restore original implementations
        jest.restoreAllMocks();
    });

    test('should display welcome message and options', () => {
        promptMock.mockReturnValueOnce('5'); // Exit immediately
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Welcome to the Calculator!');
        expect(consoleLogMock).toHaveBeenCalledWith('Options:');
        expect(consoleLogMock).toHaveBeenCalledWith('1. Add');
        expect(consoleLogMock).toHaveBeenCalledWith('2. Subtract');
        expect(consoleLogMock).toHaveBeenCalledWith('3. Multiply');
        expect(consoleLogMock).toHaveBeenCalledWith('4. Divide');
        expect(consoleLogMock).toHaveBeenCalledWith('5. Exit');
    });

    test('should exit when choice is 5', () => {
        promptMock.mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Exiting the calculator. Goodbye!');
    });

    test('should handle invalid choice', () => {
        promptMock.mockReturnValueOnce('6').mockReturnValueOnce('5'); // Invalid, then exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Invalid choice. Please select a number between 1 and 5.');
    });

    test('should handle invalid number inputs', () => {
        promptMock
            .mockReturnValueOnce('1') // Add
            .mockReturnValueOnce('abc') // Invalid num1
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Invalid input. Please enter valid numbers.');
    });

    test('should perform addition', () => {
        promptMock
            .mockReturnValueOnce('1') // Add
            .mockReturnValueOnce('10') // num1
            .mockReturnValueOnce('20') // num2
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('10 + 20 = 30');
    });

    test('should perform subtraction', () => {
        promptMock
            .mockReturnValueOnce('2') // Subtract
            .mockReturnValueOnce('30') // num1
            .mockReturnValueOnce('10') // num2
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('30 - 10 = 20');
    });

    test('should perform multiplication', () => {
        promptMock
            .mockReturnValueOnce('3') // Multiply
            .mockReturnValueOnce('5') // num1
            .mockReturnValueOnce('4') // num2
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('5 * 4 = 20');
    });

    test('should perform division', () => {
        promptMock
            .mockReturnValueOnce('4') // Divide
            .mockReturnValueOnce('20') // num1
            .mockReturnValueOnce('4') // num2
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('20 / 4 = 5');
    });

    test('should handle division by zero', () => {
        promptMock
            .mockReturnValueOnce('4') // Divide
            .mockReturnValueOnce('10') // num1
            .mockReturnValueOnce('0') // num2
            .mockReturnValueOnce('5'); // Exit
        calculator();
        expect(consoleLogMock).toHaveBeenCalledWith('Error: Division by zero is not allowed.');
    });
});