export const baseDecks = [
  {
    id: 1,
    type: 'deck',
    title: 'Coding',
    meta: 'Last studied 2d ago',
    sets: [
      {
        id: 101,
        title: 'React',
        cardCount: 8,
        meta: '3 due today',
        cards: [
          {
            id: 1,
            question: 'What will happen?',
            code: '{isValid && <p>my cat</p>}',
            answer:
              'If isValid is true, React renders the paragraph. If false, React renders nothing.',
          },
          {
            id: 2,
            question: 'Why should we use keys in lists?',
            code: 'items.map((item) => <li key={item.id}>{item.name}</li>)',
            answer:
              'Keys help React identify which items changed, were added, or removed during rerenders.',
          },
          {
            id: 3,
            question: 'What is props in React?',
            code: '<Profile name="Sophie" />',
            answer:
              'Props are values passed from a parent component to a child component.',
          },
          {
            id: 4,
            question: 'What does useState return?',
            code: 'const [count, setCount] = useState(0)',
            answer:
              'useState returns the current state value and a function to update it.',
          },
          {
            id: 5,
            question: 'What happens when state changes?',
            code: 'setCount(count + 1)',
            answer:
              'React rerenders the component with the updated state value.',
          },
          {
            id: 6,
            question: 'What is conditional rendering?',
            code: '{isLoggedIn ? <Dashboard /> : <Login />}',
            answer:
              'Conditional rendering shows different UI depending on a condition.',
          },
          {
            id: 7,
            question: 'Why do we use components?',
            code: '<Button />',
            answer:
              'Components help split the UI into reusable and manageable pieces.',
          },
          {
            id: 8,
            question: 'What is the virtual DOM?',
            code: '',
            answer:
              'The virtual DOM is a lightweight JavaScript representation of the real DOM.',
          },
        ],
      },
      {
        id: 102,
        title: 'JavaScript',
        cardCount: 4,
        meta: 'Last studied 1d ago',
        cards: [
          {
            id: 1,
            question: 'What is the difference between let and const?',
            code: '',
            image: '',
            answer:
              'let is used for values that can change. const is used for values that should not be reassigned.',
          },
          {
            id: 2,
            question: 'What will this return?',
            code: '[1, 2, 3].map((number) => number * 2)',
            image: '',
            answer:
              'It returns a new array: [2, 4, 6]. map transforms each item.',
          },
          {
            id: 3,
            question: 'What does filter do?',
            code: '[1, 2, 3, 4].filter((number) => number > 2)',
            image: '',
            answer:
              'filter returns a new array with only the items that match the condition: [3, 4].',
          },
          {
            id: 4,
            question: 'What does reduce do?',
            code: '[1, 2, 3].reduce((sum, number) => sum + number, 0)',
            image: '',
            answer:
              'reduce combines array values into one final value. Here it returns 6.',
          },
        ],
      },
      {
        id: 103,
        title: 'CSS',
        cards: [
          {
            id: 1,
            question: 'What does display: flex do?',
            code: 'display: flex;',
            image: '',
            answer:
              'It turns an element into a flex container and allows easier alignment and layout of child elements.',
          },
          {
            id: 2,
            question: 'How do you center items horizontally in flexbox?',
            code: `
                display: flex;
                justify-content: center;
                 `,
            image: '',
            answer:
              'justify-content controls alignment along the main axis. center places items in the middle horizontally.',
          },
          {
            id: 3,
            question: 'What property creates space between flex items?',
            code: 'gap: 16px;',
            image: '',
            answer:
              'gap adds consistent spacing between flex or grid children without using margins.',
          },
          {
            id: 4,
            question: 'What does width: 100% mean?',
            code: 'width: 100%;',
            image: '',
            answer:
              'The element takes up 100% of the width of its parent container.',
          },
        ],
        cardCount: 4,
        meta: 'New',
      },
    ],
  },
  {
    id: 2,
    type: 'deck',
    title: 'Nature',
    meta: 'New',
    sets: [
      {
        id: 201,
        title: 'Plants',
        cards: [
          {
            id: 1,
            question: 'What plant is this?',
            image:
              'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            answer:
              'This is a Monstera deliciosa, a tropical plant known for its large split leaves.',
          },
          {
            id: 2,
            question: 'What plant is this?',
            image:
              'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
            answer:
              'This is a sunflower, a tall flowering plant that turns toward the sun while growing.',
          },
        ],
        cardCount: 2,
        meta: 'New',
      },
      {
        id: 202,
        title: 'Flowers',
        cards: [
          {
            id: 1,
            question: 'What flower is shown in the image?',
            code: '',
            image: '/images/foxglove.jpeg',
            answer: 'Foxglove',
          },
          {
            id: 2,
            question: 'What flower is shown in the image?',
            code: '',
            image: '/images/BleedingHeart.jpeg',
            answer: 'Bleeding Heart',
          },
          {
            id: 3,
            question: 'What flower is shown in the image?',
            code: '',
            image: '/images/PacificDogwood.jpeg',

            answer: 'Pacific Dogwood',
          },
          {
            id: 4,
            question: 'What flower is shown in the image?',
            code: '',
            image: '/images/Lupine.jpeg',
            answer: 'Lupine',
          },
          {
            id: 5,
            question: 'What flower is shown in the image?',
            code: '',
            image: '/images/Camellia.jpeg',
            answer: 'Camellia',
          },
        ],
        cardCount: 5,
        meta: 'New',
      },
    ],
  },
  {
    id: 3,
    type: 'deck',
    title: 'Art',
    meta: '5 due today',
    sets: [
      {
        id: 301,
        title: 'Paintings',
        cards: [
          {
            id: 1,
            question: 'Who is the artist? Can you name the painting?',
            code: '',
            image: '/images/Moon_and_Stars_series.jpg',
            answer: 'Alphonse Mucha. The Moon and the Stars',
          },
          {
            id: 2,
            question: 'Who is the artist? Can you name the painting?',
            code: '',
            image: '/images/Woman with a Parasol.jpeg',
            answer: 'Claude Monet. Woman with a Parasol',
          },
          {
            id: 3,
            question: 'Who is the artist? Can you name the painting?',
            code: '',
            image: '/images/Golden Autumn.jpeg',
            answer: 'Isaac Levitan. Golden Autumn',
          },
        ],
        cardCount: 3,
        meta: 'New',
      },
      {
        id: 302,
        title: 'Writers',
        cards: [
          {
            id: 1,
            question: 'Who is the writer?',
            code: 'Kafka on the Shore, Norwegian Wood',
            image: '',
            answer: 'Haruki Murakami',
          },
          {
            id: 2,
            question: 'Who is the writer?',
            code: 'Mrs Dalloway, To the Lighthouse',
            image: '',
            answer: 'Virginia Woolf',
          },
          {
            id: 1,
            question: 'Who is the writer?',
            code: 'The Picture of Dorian Gray',
            image: '',
            answer: 'Oscar Wilde',
          },
        ],
        cardCount: 3,
        meta: 'New',
      },
    ],
  },
  {
    id: 4,
    type: 'deck',
    title: 'General Knowledge',
    meta: '3 overdue',
    sets: [
      {
        id: 401,
        title: 'Geography',
        cards: [
          {
            id: 1,
            question: 'What is the capital of Norway?',
            code: '',
            image: '',
            answer: 'Oslo',
          },
          {
            id: 2,
            question: 'What is the capital of Argentina?',
            code: '',
            image: '',
            answer: 'Buenos Aires',
          },
          {
            id: 3,
            question: 'What is the capital of New Zealand?',
            code: '',
            image: '',
            answer: 'Wellington',
          },
          {
            id: 4,
            question: 'What is the capital of Morocco?',
            code: '',
            image: '',
            answer: 'Rabat',
          },
        ],
        cardCount: 4,
        meta: 'New',
      },
      {
        id: 402,
        title: 'History',
        cards: [
          {
            id: 1,
            question: 'In what year did the Berlin Wall fall?',
            code: '',
            image: '',
            answer: '1989',
          },
          {
            id: 2,
            question: 'Who was the first emperor of Rome?',
            code: '',
            image: '',
            answer: 'Augustus',
          },

          {
            id: 4,
            question: 'What ancient civilization built Machu Picchu?',
            code: '',
            image: '',
            answer: 'The Inca civilization',
          },
          {
            id: 5,
            question:
              'Who was the British queen during most of the 19th century?',
            code: '',
            image: '',
            answer: 'Queen Victoria',
          },
        ],
        cardCount: 4,
        meta: 'New',
      },
      {
        id: 403,
        title: 'Music',
        cards: [
          {
            id: 1,
            question: 'Which instrument has 88 keys?',
            code: '',
            image: '',
            answer: 'Piano',
          },
          {
            id: 2,
            question: 'Which band released the album “Abbey Road”?',
            code: '',
            image: '',
            answer: 'The Beatles',
          },
          {
            id: 3,
            question: 'Who composed “The Four Seasons”?',
            code: '',
            image: '',
            answer: 'Antonio Vivaldi',
          },
          {
            id: 4,
            question: 'What is the highest female singing voice?',
            code: '',
            image: '',
            answer: 'Soprano',
          },
          {
            id: 5,
            question:
              'Which music genre originated in Jamaica in the late 1960s?',
            code: '',
            image: '',
            answer: 'Reggae',
          },
        ],
        cardCount: 5,
        meta: 'New',
      },
    ],
  },
];
