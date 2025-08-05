// Quiz data with 5 questions per topic
function getQuizData() {
    return [
        {
            id: 1,
            title: 'General Knowledge 🧠',
            description: 'Test your knowledge about the world',
            difficulty: 'Easy',
            icon: 'fa-globe',
            questions: [
                {
                    id: 1,
                    text: 'What is the capital of France?',
                    options: [
                        { id: 1, text: 'Berlin' },
                        { id: 2, text: 'Madrid' },
                        { id: 3, text: 'Paris' },
                        { id: 4, text: 'Rome' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 20,
                    explanation: 'Paris has been the capital of France since the 5th century.'
                },
                {
                    id: 2,
                    text: 'Which planet is known as the Red Planet?',
                    options: [
                        { id: 1, text: 'Venus' },
                        { id: 2, text: 'Mars' },
                        { id: 3, text: 'Jupiter' },
                        { id: 4, text: 'Saturn' }
                    ],
                    correctAnswer: 2,
                    timeLimit: 15,
                    explanation: 'Mars appears red due to iron oxide (rust) on its surface.'
                },
                {
                    id: 3,
                    text: 'Who painted the Mona Lisa?',
                    options: [
                        { id: 1, text: 'Vincent van Gogh' },
                        { id: 2, text: 'Pablo Picasso' },
                        { id: 3, text: 'Leonardo da Vinci' },
                        { id: 4, text: 'Michelangelo' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 20,
                    explanation: 'Leonardo da Vinci painted the Mona Lisa in the early 16th century.'
                },
                {
                    id: 4,
                    text: 'Which is the largest ocean on Earth?',
                    options: [
                        { id: 1, text: 'Atlantic Ocean' },
                        { id: 2, text: 'Indian Ocean' },
                        { id: 3, text: 'Arctic Ocean' },
                        { id: 4, text: 'Pacific Ocean' }
                    ],
                    correctAnswer: 4,
                    timeLimit: 15,
                    explanation: 'The Pacific Ocean covers about 63 million square miles.'
                },
                {
                    id: 5,
                    text: 'What is the chemical symbol for gold?',
                    options: [
                        { id: 1, text: 'Go' },
                        { id: 2, text: 'Gd' },
                        { id: 3, text: 'Au' },
                        { id: 4, text: 'Ag' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 15,
                    explanation: 'Au comes from the Latin word for gold, "aurum".'
                }
            ]
        },
        {
            id: 2,
            title: 'Math 🧮',
            description: 'Test your mathematical skills',
            difficulty: 'Medium',
            icon: 'fa-calculator',
            questions: [
                {
                    id: 1,
                    text: 'What is the value of π (pi) rounded to two decimal places?',
                    options: [
                        { id: 1, text: '3.14' },
                        { id: 2, text: '3.16' },
                        { id: 3, text: '3.18' },
                        { id: 4, text: '3.12' }
                    ],
                    correctAnswer: 1,
                    timeLimit: 20,
                    explanation: 'π is approximately 3.14159, so rounded to two decimal places it\'s 3.14.'
                },
                {
                    id: 2,
                    text: 'What is the square root of 144?',
                    options: [
                        { id: 1, text: '10' },
                        { id: 2, text: '11' },
                        { id: 3, text: '12' },
                        { id: 4, text: '13' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 15,
                    explanation: '12 × 12 = 144, so the square root of 144 is 12.'
                },
                {
                    id: 3,
                    text: 'Solve for x: 2x + 5 = 15',
                    options: [
                        { id: 1, text: '5' },
                        { id: 2, text: '6' },
                        { id: 3, text: '7' },
                        { id: 4, text: '8' }
                    ],
                    correctAnswer: 1,
                    timeLimit: 25,
                    explanation: 'Subtract 5 from both sides: 2x = 10, then divide by 2: x = 5.'
                },
                {
                    id: 4,
                    text: 'What is the area of a rectangle with length 8 and width 5?',
                    options: [
                        { id: 1, text: '13' },
                        { id: 2, text: '26' },
                        { id: 3, text: '40' },
                        { id: 4, text: '35' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 15,
                    explanation: 'Area of rectangle = length × width = 8 × 5 = 40.'
                },
                {
                    id: 5,
                    text: 'What is 3 to the power of 4?',
                    options: [
                        { id: 1, text: '12' },
                        { id: 2, text: '27' },
                        { id: 3, text: '64' },
                        { id: 4, text: '81' }
                    ],
                    correctAnswer: 4,
                    timeLimit: 20,
                    explanation: '3^4 = 3 × 3 × 3 × 3 = 81.'
                }
            ]
        },
        {
            id: 3,
            title: 'HTML 🌐',
            description: 'Test your HTML knowledge',
            difficulty: 'Easy',
            icon: 'fa-html5',
            questions: [
                {
                    id: 1,
                    text: 'Which tag is used to create a hyperlink?',
                    options: [
                        { id: 1, text: '<link>' },
                        { id: 2, text: '<a>' },
                        { id: 3, text: '<href>' },
                        { id: 4, text: '<hyperlink>' }
                    ],
                    correctAnswer: 2,
                    timeLimit: 15,
                    explanation: 'The <a> tag (anchor tag) is used with the href attribute to create hyperlinks.'
                },
                {
                    id: 2,
                    text: 'Which tag is used to define an unordered list?',
                    options: [
                        { id: 1, text: '<ol>' },
                        { id: 2, text: '<ul>' },
                        { id: 3, text: '<li>' },
                        { id: 4, text: '<list>' }
                    ],
                    correctAnswer: 2,
                    timeLimit: 15,
                    explanation: '<ul> defines an unordered (bulleted) list, while <ol> defines an ordered list.'
                },
                {
                    id: 3,
                    text: 'Which attribute is used to provide additional information about an element?',
                    options: [
                        { id: 1, text: 'src' },
                        { id: 2, text: 'alt' },
                        { id: 3, text: 'title' },
                        { id: 4, text: 'href' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 20,
                    explanation: 'The title attribute provides additional "tooltip" information about an element.'
                },
                {
                    id: 4,
                    text: 'Which tag is used to define a table row?',
                    options: [
                        { id: 1, text: '<td>' },
                        { id: 2, text: '<tr>' },
                        { id: 3, text: '<th>' },
                        { id: 4, text: '<table>' }
                    ],
                    correctAnswer: 2,
                    timeLimit: 15,
                    explanation: '<tr> defines a table row, <td> defines a table cell, and <th> defines a header cell.'
                },
                {
                    id: 5,
                    text: 'Which character is used to indicate an end tag?',
                    options: [
                        { id: 1, text: '*' },
                        { id: 2, text: '^' },
                        { id: 3, text: '/' },
                        { id: 4, text: '\\' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 15,
                    explanation: 'End tags begin with </ followed by the tag name, like </html>.'
                }
            ]
        },
        {
            id: 4,
            title: 'CSS 🎨',
            description: 'Test your CSS knowledge',
            difficulty: 'Medium',
            icon: 'fa-css3',
            questions: [
                {
                    id: 1,
                    text: 'Which property is used to change the text color?',
                    options: [
                        { id: 1, text: 'text-color' },
                        { id: 2, text: 'font-color' },
                        { id: 3, text: 'color' },
                        { id: 4, text: 'text-style' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 15,
                    explanation: 'The "color" property is used to set the color of text.'
                },
                {
                    id: 2,
                    text: 'How do you select an element with id "header"?',
                    options: [
                        { id: 1, text: '.header' },
                        { id: 2, text: '*header' },
                        { id: 3, text: '#header' },
                        { id: 4, text: 'header' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 15,
                    explanation: 'The # symbol is used to select elements by their id.'
                },
                {
                    id: 3,
                    text: 'Which property is used to change the font of an element?',
                    options: [
                        { id: 1, text: 'font-family' },
                        { id: 2, text: 'font-style' },
                        { id: 3, text: 'text-font' },
                        { id: 4, text: 'font' }
                    ],
                    correctAnswer: 1,
                    timeLimit: 15,
                    explanation: 'The font-family property specifies the font for an element.'
                },
                {
                    id: 4,
                    text: 'How do you make a list display horizontally?',
                    options: [
                        { id: 1, text: 'list-style: horizontal' },
                        { id: 2, text: 'list-type: inline' },
                        { id: 3, text: 'display: inline' },
                        { id: 4, text: 'display: flex' }
                    ],
                    correctAnswer: 4,
                    timeLimit: 25,
                    explanation: 'Using display: flex on the parent container will display list items horizontally by default.'
                },
                {
                    id: 5,
                    text: 'Which value will make an element completely transparent?',
                    options: [
                        { id: 1, text: 'opacity: 0' },
                        { id: 2, text: 'visibility: hidden' },
                        { id: 3, text: 'display: none' },
                        { id: 4, text: 'transparent: true' }
                    ],
                    correctAnswer: 1,
                    timeLimit: 15,
                    explanation: 'Opacity ranges from 0 (transparent) to 1 (opaque).'
                }
            ]
        },
        {
            id: 5,
            title: 'JavaScript',
            description: 'Test your JavaScript knowledge',
            difficulty: 'Medium',
            icon: 'fa-js',
            questions: [
                {
                    id: 1,
                    text: 'Which keyword is used to declare a variable in modern JavaScript?',
                    options: [
                        { id: 1, text: 'var' },
                        { id: 2, text: 'let' },
                        { id: 3, text: 'const' },
                        { id: 4, text: 'Both let and const' }
                    ],
                    correctAnswer: 4,
                    timeLimit: 20,
                    explanation: 'Modern JavaScript uses both let (mutable) and const (immutable) for variable declaration.'
                },
                {
                    id: 2,
                    text: 'What will typeof null return?',
                    options: [
                        { id: 1, text: '"null"' },
                        { id: 2, text: '"undefined"' },
                        { id: 3, text: '"object"' },
                        { id: 4, text: '"number"' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 20,
                    explanation: 'This is a known quirk in JavaScript - typeof null returns "object".'
                },
                {
                    id: 3,
                    text: 'Which method adds one or more elements to the end of an array?',
                    options: [
                        { id: 1, text: 'push()' },
                        { id: 2, text: 'pop()' },
                        { id: 3, text: 'shift()' },
                        { id: 4, text: 'unshift()' }
                    ],
                    correctAnswer: 1,
                    timeLimit: 15,
                    explanation: 'push() adds elements to the end, while unshift() adds to the beginning.'
                },
                {
                    id: 4,
                    text: 'What does the === operator check?',
                    options: [
                        { id: 1, text: 'Value only' },
                        { id: 2, text: 'Value and type' },
                        { id: 3, text: 'Type only' },
                        { id: 4, text: 'Reference' }
                    ],
                    correctAnswer: 2,
                    timeLimit: 15,
                    explanation: 'The strict equality operator === checks both value and type.'
                },
                {
                    id: 5,
                    text: 'Which function executes after a specified time interval?',
                    options: [
                        { id: 1, text: 'setInterval()' },
                        { id: 2, text: 'setTimeout()' },
                        { id: 3, text: 'setTimer()' },
                        { id: 4, text: 'wait()' }
                    ],
                    correctAnswer: 2,
                    timeLimit: 20,
                    explanation: 'setTimeout() executes a function once after a delay, while setInterval() repeats execution.'
                }
            ]
        },
        {
            id: 6,
            title: 'Sports ⚽',
            description: 'Test your sports knowledge',
            difficulty: 'Easy',
            icon: 'fa-trophy',
            questions: [
                {
                    id: 1,
                    text: 'Which country won the FIFA World Cup in 2018?',
                    options: [
                        { id: 1, text: 'Germany' },
                        { id: 2, text: 'Brazil' },
                        { id: 3, text: 'France' },
                        { id: 4, text: 'Argentina' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 15,
                    explanation: 'France defeated Croatia 4-2 in the 2018 World Cup final.'
                },
                {
                    id: 2,
                    text: 'In tennis, what is a zero score called?',
                    options: [
                        { id: 1, text: 'Nil' },
                        { id: 2, text: 'Zero' },
                        { id: 3, text: 'Love' },
                        { id: 4, text: 'Null' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 15,
                    explanation: 'In tennis, "love" means zero, possibly derived from the French word "l\'oeuf" (egg).'
                },
                {
                    id: 3,
                    text: 'Which NBA player has won the most championships?',
                    options: [
                        { id: 1, text: 'Michael Jordan' },
                        { id: 2, text: 'LeBron James' },
                        { id: 3, text: 'Bill Russell' },
                        { id: 4, text: 'Kobe Bryant' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 20,
                    explanation: 'Bill Russell won 11 NBA championships with the Boston Celtics.'
                },
                {
                    id: 4,
                    text: 'How many players are on a baseball team\'s lineup?',
                    options: [
                        { id: 1, text: '7' },
                        { id: 2, text: '8' },
                        { id: 3, text: '9' },
                        { id: 4, text: '10' }
                    ],
                    correctAnswer: 3,
                    timeLimit: 15,
                    explanation: 'A standard baseball lineup has 9 players (pitcher, catcher, 4 infielders, 3 outfielders).'
                },
                {
                    id: 5,
                    text: 'Which country hosted the 2016 Summer Olympics?',
                    options: [
                        { id: 1, text: 'China' },
                        { id: 2, text: 'Brazil' },
                        { id: 3, text: 'Russia' },
                        { id: 4, text: 'Japan' }
                    ],
                    correctAnswer: 2,
                    timeLimit: 15,
                    explanation: 'The 2016 Summer Olympics were held in Rio de Janeiro, Brazil.'
                }
            ]
        }
    ];
}

// Get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}