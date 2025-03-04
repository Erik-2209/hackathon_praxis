import { User, Quiz, QuizResult } from './types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    registrationDate: '2023-01-15'
  }
];

export const mockQuizzes: Quiz[] = [
  {
    id: '1',
    title: 'Basic JavaScript',
    description: 'Test your knowledge of JavaScript fundamentals',
    questions: [
      {
        id: '1-1',
        text: 'What is JavaScript?',
        options: [
          'A programming language',
          'A markup language',
          'A database system',
          'An operating system'
        ],
        correctAnswer: 0
      },
      {
        id: '1-2',
        text: 'Which of the following is not a JavaScript data type?',
        options: [
          'String',
          'Boolean',
          'Float',
          'Object'
        ],
        correctAnswer: 2
      },
      {
        id: '1-3',
        text: 'What does DOM stand for?',
        options: [
          'Document Object Model',
          'Data Object Model',
          'Document Oriented Model',
          'Digital Ordinance Model'
        ],
        correctAnswer: 0
      }
    ]
  },
  {
    id: '2',
    title: 'HTML Basics',
    description: 'Test your knowledge of HTML fundamentals',
    questions: [
      {
        id: '2-1',
        text: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyper Transfer Markup Language',
          'Home Tool Markup Language'
        ],
        correctAnswer: 0
      },
      {
        id: '2-2',
        text: 'Which tag is used to create a hyperlink?',
        options: [
          '<link>',
          '<a>',
          '<href>',
          '<url>'
        ],
        correctAnswer: 1
      },
      {
        id: '2-3',
        text: 'Which HTML element is used to define an unordered list?',
        options: [
          '<ol>',
          '<list>',
          '<ul>',
          '<unordered>'
        ],
        correctAnswer: 2
      }
    ]
  },
  {
    id: '3',
    title: 'CSS Fundamentals',
    description: 'Test your knowledge of CSS basics',
    questions: [
      {
        id: '3-1',
        text: 'What does CSS stand for?',
        options: [
          'Creative Style Sheets',
          'Computer Style Sheets',
          'Cascading Style Sheets',
          'Colorful Style Sheets'
        ],
        correctAnswer: 2
      },
      {
        id: '3-2',
        text: 'Which property is used to change the background color?',
        options: [
          'color',
          'bgcolor',
          'background-color',
          'background'
        ],
        correctAnswer: 2
      },
      {
        id: '3-3',
        text: 'Which CSS property controls the text size?',
        options: [
          'text-size',
          'font-size',
          'text-style',
          'font-style'
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: '4',
    title: 'React Fundamentals',
    description: 'Test your knowledge of React basics',
    questions: [
      {
        id: '4-1',
        text: 'What is React?',
        options: [
          'A JavaScript library for building user interfaces',
          'A programming language',
          'A database system',
          'A server-side framework'
        ],
        correctAnswer: 0
      },
      {
        id: '4-2',
        text: 'What is JSX?',
        options: [
          'A database query language',
          'A syntax extension for JavaScript',
          'A new programming language',
          'A React native component'
        ],
        correctAnswer: 1
      },
      {
        id: '4-3',
        text: 'What is the virtual DOM?',
        options: [
          'A DOM inside a shadow DOM',
          'A lightweight copy of the actual DOM',
          'A DOM that only exists on the server',
          'A DOM that renders only visible elements'
        ],
        correctAnswer: 1
      }
    ]
  }
];

export const mockQuizResults: QuizResult[] = [
  {
    id: '1',
    userId: '1',
    quizId: '1',
    score: 3,
    percentage: 100,
    completedAt: '2023-05-10T14:30:00Z'
  },
  {
    id: '2',
    userId: '1',
    quizId: '2',
    score: 2,
    percentage: 75,
    completedAt: '2023-05-12T10:15:00Z'
  },
  {
    id: '3',
    userId: '1',
    quizId: '3',
    score: 3,
    percentage: 100,
    completedAt: '2023-05-15T16:45:00Z'
  },
  {
    id: '4',
    userId: '1',
    quizId: '4',
    score: 2,
    percentage: 80,
    completedAt: '2023-05-18T09:20:00Z'
  }
];