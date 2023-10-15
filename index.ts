import inquirer from 'inquirer';

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

const operators = ['Add', 'Subtract', 'Multiply', 'Divide'];

inquirer
    .prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number:',
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Choose an operation:',
            choices: operators,
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the second number:',
        },
    ])
    .then((answers: any) => {
        const { num1, num2, operator } = answers;
        let result: number | undefined;

        switch (operator) {
            case 'Add':
                result = add(num1, num2);
                break;
            case 'Subtract':
                result = subtract(num1, num2);
                break;
            case 'Multiply':
                result = multiply(num1, num2);
                break;
            case 'Divide':
                try {
                    result = divide(num1, num2);
                } catch (error: any) {
                    console.log(error.message);
                    return;
                }
                break;
        }

        if (typeof result !== 'undefined') {
            console.log(`Result: ${result}`);
        }
    })
    .catch((error: any) => {
        console.error(error);
    });
