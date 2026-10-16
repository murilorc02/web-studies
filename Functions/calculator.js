function calculator() {
    const calcBody = document.querySelector('.calculator');
    const display = calcBody.querySelector('.display');

    return {
        start() {
            // Use arrow function so "this" points to the calculator function instead of the HTML element
            calcBody.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-digit')) {
                    const lastChar = display.value.slice(-1);
                    const fullDisplay = display.value;
                    let output = el.innerText;

                    const lastNumber = fullDisplay.split(/[+\-*/]/).pop();

                    if (output == '.' && lastNumber.includes('.')) {
                        return;
                    }

                    if ((isNaN(lastChar) || lastChar == '')
                        && output == '.' && output !== lastChar) {
                        output = '0.';
                    }

                    if (lastChar == '' && isNaN(output)) {
                        output = '0' + output;
                    }

                    if (isNaN(lastChar) && isNaN(output)) {
                        this.wipeLast();
                    }

                    this.fromButtonToDisplay(output);
                }

                if (el.classList.contains('btn-del')) {
                    this.wipeLast();
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-result')) {
                    display.value = this.calculate(display.value);
                }
            });

            document.addEventListener('keyup', (e) => {
                const keyLabels = {
                    Enter: '=',
                    Backspace: '←',
                    Delete: 'C',
                    Escape: 'C'
                };

                const label = keyLabels[e.key] ?? e.key.toUpperCase();
                const button = [...calcBody.querySelectorAll('button')].find(
                    b => b.innerHTML == label
                );
                button && button.click();
            });
        },

        fromButtonToDisplay(value) {
            display.value += value;
        },

        wipeLast() {
            display.value = display.value.slice(0, -1);
        },

        clearDisplay() {
            display.value = '';
        },

        calculate(expression) {
            if (!/^[\d+\-*/.]+$/.test(expression)) return 'Error';

            const tokens = expression.match(/\d+\.?\d*|[+\-*/]/g).map((token) => {
                return '+-*/'.includes(token) ? token : Number(token);
            });

            while (tokens.find(t => t == '*' || t == '/')) {
                for (const op of ['*', '/']) {
                    for (let i = 1; i < tokens.length; i += 2) {
                        if (tokens[i] !== op) continue;
                        const result = op === '*' ?
                            tokens[i - 1] * tokens[i + 1] :
                            tokens[i - 1] / tokens[i + 1];

                        tokens.splice(i - 1, 3, result);
                        i--;
                    }
                }
            }

            let final = tokens[0];
            for (const op of ['-', '+']) {
                for (let i = 1; i < tokens.length; i += 2) {
                    if (tokens[i] !== op) continue;
                    final = op === '+' ?
                        final + tokens[i + 1] :
                        final - tokens[i + 1];
                }
            }
            return final;
        }
    }
}

const calc = calculator();
calc.start();