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
            images: [],
            answer:
              'let is used for values that can change. const is used for values that should not be reassigned.',
          },
          {
            id: 2,
            question: 'What will this return?',
            code: '[1, 2, 3].map((number) => number * 2)',
            images: [],
            answer:
              'It returns a new array: [2, 4, 6]. map transforms each item.',
          },
          {
            id: 3,
            question: 'What does filter do?',
            code: '[1, 2, 3, 4].filter((number) => number > 2)',
            images: [],
            answer:
              'filter returns a new array with only the items that match the condition: [3, 4].',
          },
          {
            id: 4,
            question: 'What does reduce do?',
            code: '[1, 2, 3].reduce((sum, number) => sum + number, 0)',
            images: [],
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
            images: [],
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
            images: [],
            answer:
              'justify-content controls alignment along the main axis. center places items in the middle horizontally.',
          },
          {
            id: 3,
            question: 'What property creates space between flex items?',
            code: 'gap: 16px;',
            images: [],
            answer:
              'gap adds consistent spacing between flex or grid children without using margins.',
          },
          {
            id: 4,
            question: 'What does width: 100% mean?',
            code: 'width: 100%;',
            images: [],
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
            images: [
              'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
            ],
            answer:
              'This is a Monstera deliciosa, a tropical plant known for its large split leaves.',
          },
          {
            id: 2,
            question: 'What plant is this?',
            images: [
              'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
            ],
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
            images: ['/images/foxglove.jpeg'],
            answer: 'Foxglove',
          },
          {
            id: 2,
            question: 'What flower is shown in the image?',
            code: '',
            images: ['/images/BleedingHeart.jpeg'],
            answer: 'Bleeding Heart',
          },
          {
            id: 3,
            question: 'What flower is shown in the image?',
            code: '',
            images: ['/images/PacificDogwood.jpeg'],
            answer: 'Pacific Dogwood',
          },
          {
            id: 4,
            question: 'What flower is shown in the image?',
            code: '',
            images: ['/images/Lupine.jpeg'],
            answer: 'Lupine',
          },
          {
            id: 5,
            question: 'What flower is shown in the image?',
            code: '',
            images: ['/images/Camellia.jpeg'],
            answer: 'Camellia',
          },
          {
            id: 6,
            question: 'What flower is shown in the image?',
            code: '',
            images: ['/images/Califirnia_lilac.jpeg'],
            answer:
              'Califirnia lilac. Despite the name, it’s not actually related to true lilacs at all. Bees love them',
          },
          {
            id: 7,
            question: 'What flower is shown in the image?',
            code: '',
            images: ['/images/Cotoneaster.jpeg'],
            answer:
              'Cotoneaster. The red berries are a huge bird snack in fall and winter.The branches often grow in a fishbone/herringbone pattern, which gardeners like because it looks decorative even in winter.',
          },
        ],
        cardCount: 7,
        meta: 'New',
      },

      {
        id: 203,
        title: 'Birds',
        cards: [
          {
            id: 1,
            question: 'Can you name this bird?',
            code: '',
            images: ['/images/Black-capped Chickadee.jpeg'],
            answer: 'Black-capped Chickadee',
            facts: [
              'ˈCHikəˌdē, синица',
              'They remember thousands of hiding spots for seeds.',
              'They can lower their body temperature during cold nights.',
              'Their call sounds like “chick-a-dee-dee-dee”.',
            ],
          },
          {
            id: 2,
            question: 'Can you name this bird?',
            code: '',
            images: ['/images/Dark-eyed Junco.jpeg'],
            answer: 'Dark-eyed Junco',
            facts: [
              'Темноглазые юнко — это аккуратные, даже яркие маленькие воробьи',
              'Их легко узнать по четкой (хотя и крайне изменчивой) окраске и ярким белым хвостовым перьям, которые они обычно сверкают в полете.',
              'Little gray birds that hop around parks and sidewalks.',
              'Often called “snowbirds” because they’re associated with winter.',
              'Their tiny squeaky calls are everywhere once you notice them.',
            ],
          },
          {
            id: 3,
            question: 'Can you name this bird?',
            code: '',
            images: [
              '/images/European_Starling_1.jpeg',
              '/images/European_Starling_1.jpeg',
              '/images/European_Starling_1.jpeg',
            ],
            answer: 'EuropeanStarling (скворец)',
            facts: [
              'Their feathers look black from far away, but up close they shimmer purple, green, and blue like oil on water 🌈',
              'They’re amazing mimics. They can copy car alarms, other birds, human sounds, and even bits of speech.',
              'Huge swirling flocks are called murmurations. Those dramatic cloud-like bird dances are usually starlings.',
              'They are not native to North America. A group was released in New York in the 1890s and spread across almost the entire continent 😭',
              'In winter, they get those cute white speckles all over their bodies.',
              'They walk confidently instead of hopping like many small birds do. Once you notice this, you can’t unsee it.',
            ],
          },
        ],
        cardCount: 3,
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
            images: ['/images/Moon_and_Stars_series.jpg'],
            answer: 'Alphonse Mucha. The Moon and the Stars',
          },
          {
            id: 2,
            question: 'Who is the artist? Can you name the painting?',
            code: '',
            images: ['/images/Woman with a Parasol.jpeg'],
            answer: 'Claude Monet. Woman with a Parasol',
          },
          {
            id: 3,
            question: 'Who is the artist? Can you name the painting?',
            code: '',
            images: ['/images/Golden Autumn.jpeg'],
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
            images: [],
            answer: 'Haruki Murakami',
          },
          {
            id: 2,
            question: 'Who is the writer?',
            code: 'Mrs Dalloway, To the Lighthouse',
            images: [],
            answer: 'Virginia Woolf',
          },
          {
            id: 1,
            question: 'Who is the writer?',
            code: 'The Picture of Dorian Gray',
            images: [],
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
            images: [],
            answer: 'Oslo',
          },
          {
            id: 2,
            question: 'What is the capital of Argentina?',
            code: '',
            images: [],
            answer: 'Buenos Aires',
          },
          {
            id: 3,
            question: 'What is the capital of New Zealand?',
            code: '',
            images: [],
            answer: 'Wellington',
          },
          {
            id: 4,
            question: 'What is the capital of Morocco?',
            code: '',
            images: [],
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
            images: [],
            answer: '1989',
          },
          {
            id: 2,
            question: 'Who was the first emperor of Rome?',
            code: '',
            images: [],
            answer: 'Augustus',
          },

          {
            id: 4,
            question: 'What ancient civilization built Machu Picchu?',
            code: '',
            images: [],
            answer: 'The Inca civilization',
          },
          {
            id: 5,
            question:
              'Who was the British queen during most of the 19th century?',
            code: '',
            images: [],
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
            images: [],
            answer: 'Piano',
          },
          {
            id: 2,
            question: 'Which band released the album “Abbey Road”?',
            code: '',
            images: [],
            answer: 'The Beatles',
          },
          {
            id: 3,
            question: 'Who composed “The Four Seasons”?',
            code: '',
            images: [],
            answer: 'Antonio Vivaldi',
          },
          {
            id: 4,
            question: 'What is the highest female singing voice?',
            code: '',
            images: [],
            answer: 'Soprano',
          },
          {
            id: 5,
            question:
              'Which music genre originated in Jamaica in the late 1960s?',
            code: '',
            images: [],
            answer: 'Reggae',
          },
        ],
        cardCount: 5,
        meta: 'New',
      },
    ],
  },
];
