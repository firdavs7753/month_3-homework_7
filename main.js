function createScore() {
            let score = 0;

            return {
                addPoint: function() {
                    score++;
                },

                getScore: function() {
                    return score;
                },

                reset: function() {
                    score = 0;
                }
            };
        }

        let score = createScore();

        function showScore() {
            document.getElementById("score").textContent =
                score.getScore();
        }

        function sumTo(n) {
            if (n <= 0) {
                return 0;
            }

            return n + sumTo(n - 1);
        }

        function calculateSum() {
            let n = Number(document.getElementById("number").value);

            if (!Number.isInteger(n) || n < 0 || n > 10000) {
                document.getElementById("sumResult").textContent =
                    "Введите целое число от 0 до 10000";
                return;
            }

            document.getElementById("sumResult").textContent =
                "Сумма: " + sumTo(n);
        }

        function repeatText(text, n) {
            if (n <= 0) {
                return "";
            }

            return text + repeatText(text, n - 1);
        }

        function repeat() {
            let text = document.getElementById("repeatText").value;
            let n = Number(document.getElementById("repeatNumber").value);

            if (!Number.isInteger(n) || n < 0 || n > 1000) {
                document.getElementById("repeatResult").textContent =
                    "Введите количество от 0 до 1000";
                return;
            }

            document.getElementById("repeatResult").textContent =
                repeatText(text, n);
        }

        function isPalindrome(str) {
            str = str.toLowerCase().replace(/\s/g, "");

            if (str.length <= 1) {
                return true;
            }

            if (str[0] !== str[str.length - 1]) {
                return false;
            }

            return isPalindrome(str.slice(1, -1));
        }

        function checkPalindrome() {
            let word = document.getElementById("word").value;

            document.getElementById("palindromeResult").textContent =
                isPalindrome(word)
                    ? "Это палиндром!"
                    : "Это не палиндром!";
        }

        function makeCounter() {
            let count = 0;

            return function() {
                count++;
                return count;
            };
        }

        let counter = makeCounter();

        document.getElementById("counterButton")
            .addEventListener("click", function() {
                document.getElementById("counter").textContent =
                    counter();
            });

        function multiply(a) {
            return function(b) {
                return a * b;
            };
        }

        let double = multiply(2);

        document.getElementById("curryingResult").textContent =
            "multiply(2)(5) = " + double(5);