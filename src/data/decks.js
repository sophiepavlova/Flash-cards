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
        meta: '3 due today',
        cards: [
          {
            id: 1,
            question: 'What will happen?',
            code: '{isValid && <p>my cat</p>}',
            images: [],
            answer:
              'If isValid is true, React renders the paragraph. If false, React renders nothing.',
          },
          {
            id: 2,
            question: 'Why should we use keys in lists?',
            code: 'items.map((item) => <li key={item.id}>{item.name}</li>)',
            images: [],
            answer:
              'Keys help React identify which items changed, were added, or removed during rerenders.',
          },
          {
            id: 3,
            question: 'What is props in React?',
            code: '<Profile name="Sophie" />',
            images: [],
            answer:
              'Props are values passed from a parent component to a child component.',
          },
          {
            id: 4,
            question: 'What does useState return?',
            code: 'const [count, setCount] = useState(0)',
            images: [],
            answer:
              'useState returns the current state value and a function to update it.',
          },
          {
            id: 5,
            question: 'What happens when state changes?',
            code: 'setCount(count + 1)',
            images: [],
            answer:
              'React rerenders the component with the updated state value.',
          },
          {
            id: 6,
            question: 'What is conditional rendering?',
            code: '{isLoggedIn ? <Dashboard /> : <Login />}',
            images: [],
            answer:
              'Conditional rendering shows different UI depending on a condition.',
          },
          {
            id: 7,
            question: 'Why do we use components?',
            code: '<Button />',
            images: [],
            answer:
              'Components help split the UI into reusable and manageable pieces.',
          },
          {
            id: 8,
            question: 'What is the virtual DOM?',
            code: '',
            images: [],
            answer:
              'The virtual DOM is a lightweight JavaScript representation of the real DOM.',
          },
          {
            id: 9,
            question: 'What is prop drilling in React?',
            code: '',
            images: [],
            answer:
              'Prop drilling is passing data or functions through several levels of components as props, even though some of those components do not use them. For example: App → DeckScreen → MenuList → MenuItem. If only MenuItem needs the data, the other components are just forwarding props, which can make the code harder to manage.',
          },
          {
            id: 10,
            question: 'What is component composition in React?',
            images: [],
            answer:
              'Component composition: combining different components using the children prop(or explicitly defined props).',
            answerCode: `function Modal({ children }) {
                          return <div>{children}</div>;
                        }`,
            details: [
              'Components become more flexible and reusable.',
              'The parent decides what content is rendered.',
              'A component does not need to know its children in advance.',
            ],
          },
          {
            id: 11,
            question: 'When should you use component composition?',
            images: [],
            answer:
              'Use component composition when you want a reusable component to display different content without changing its internal code.',
            answerCode: `<Modal>
                            <Error />
                          </Modal>`,

            details: [
              'Common for layouts, modals, cards, and dialogs.',
              'Helps reduce prop drilling.',
              'Makes components easier to reuse across the application.',
              'Often implemented with the children prop.',
            ],
          },
          {
            id: 12,
            question: 'What problem does component composition fix?',
            images: [],
            answer:
              'It creates highly reusable and flexible components. And it fixes props drilling(great for layouts)',

            details: ['Source: Jonas, 111: component composition'],
          },
          {
            id: 13,
            question: 'What are the three main component categories in React?',
            images: [],
            answer:
              'Most React components fall into one of three categories: stateless (presentational), stateful, and structural components.',

            details: [
              'Stateless (presentational) components have no state. They receive props and simply display data or content. They are usually small and reusable.',
              'Stateful components have state and manage behavior or interactions. They can still be reusable.',
              'Structural components represent pages, layouts, or screens. They are often the result of composition and can be large and non-reusable.',
            ],
          },
          {
            id: 14,
            question: 'What are the three main component categories in React?',
            images: [],
            answer:
              'Most React components fall into one of three categories: stateless (presentational), stateful, and structural components.',

            details: [
              'Stateless (presentational) components have no state. They receive props and simply display data or content. They are usually small and reusable.',
              'Stateful components have state and manage behavior or interactions. They can still be reusable.',
              'Structural components represent pages, layouts, or screens. They are often the result of composition and can be large and non-reusable.',
            ],
          },
          {
            id: 15,
            question:
              'What is the difference between stateless, stateful, and structural components?',
            images: [],
            answer:
              'The difference is whether a component manages state, only displays data, or organizes the structure of the application.',

            details: [
              'Stateless: displays data received through props.',
              'Stateful: stores and updates state.',
              'Structural: combines many components into pages, layouts, or screens.',
            ],
          },
          {
            id: 16,
            question:
              'How do you quickly jump to a component definition in VS Code?',
            images: [],
            answer:
              'Hover over the component name and Cmd+Click it to jump directly to where the component is defined.',

            details: [
              'This feature is called "Go to Definition".',
              'It works for components, functions, variables, and many other symbols.',
              'To return, use the Back navigation shortcut or the back arrow in VS Code.',
              'Useful when exploring unfamiliar React codebases.',
            ],
          },
          {
            id: 17,
            question: 'How do you set default props in a React component?',
            images: [],
            answer:
              'Use default values when destructuring props in the component parameters.',

            answerCode: `function Button({ text = 'Click me' }) {
                            return <button>{text}</button>;
                          }`,

            details: [
              'The default value is used when the prop is not provided.',
              'If text is passed to the component, the passed value overrides the default.',
              'Default values are commonly used for labels, placeholders, and optional settings.',
            ],
          },
          {
            id: 18,
            question: 'When are default prop values used?',
            images: [],
            answer:
              'Default values are used when a prop is undefined or not passed to the component.',

            answerCode: `<Button />
                        <Button text="Save" />`,

            details: [
              'The first Button uses the default value.',
              'The second Button uses the provided value.',
              'Default values help make components easier to reuse.',
            ],
          },
          {
            id: 19,
            question: 'How does the && operator work in JavaScript and React?',
            images: [],
            answer:
              'The && operator renders the value on the right only if the value on the left is truthy.',

            answerCode: `{isLoggedIn && <Profile />}`,

            details: [
              'If isLoggedIn is true, the Profile component is rendered.',
              'If isLoggedIn is false, nothing is rendered.',
              'This pattern is commonly used for conditional rendering.',
            ],
          },
          {
            id: 20,
            question: 'How does the || operator work in JavaScript and React?',
            images: [],
            answer:
              'The || operator returns the first truthy value. It is often used to provide a fallback value.',

            answerCode: `const username = userName || 'Guest';`,

            details: [
              'If userName has a value, it is used.',
              'If userName is falsy, "Guest" is used instead.',
              'Common use cases include default text, images, and settings.',
            ],
          },
          {
            id: 21,
            question:
              'What is React state, why do we use useState, and what does it return?',
            images: [],
            answer:
              'State is data that can change over time and affects what is displayed in the UI. React stores state between re-renders, so values are not reset when a component renders again.',

            details: [
              'useState(initialValue) returns an array with:',
              'The current state value.',
              'A setter function used to update that value.',
              'When the setter function is called, React updates the state and re-renders the component.',
            ],
          },
          {
            id: 22,
            question: 'What is the mental model for React state?',
            images: [],
            answer:
              'State is data that changes over time and affects the UI. React stores it between re-renders. useState gives us the current value and a setter function. Calling the setter updates the state and triggers a re-render.',

            details: [],
          },
          {
            id: 22,
            question:
              'Jonas: Tell what a component is and the component instance as well',
            images: [],
            answer:
              '🧩 A component (example: function Question() {}) is like a blueprint for a piece of UI that will eventually exist on the screen.',

            details: [
              'When we “use” a component (like this: <Question />), React creates a 🚩component instance, which is like an actual physical manifestation of a component, containing props, state, and more. A component instance, when rendered, will return a 🚩React element.',
            ],
          },
          {
            id: 23,
            question: 'Jonas: What does “Rendering” really mean in React?',
            images: [],
            answer:
              '☎️ 🚩“Rendering” only means calling component functions and calculating what DOM elements need to be inserted, deleted, or updated. It has nothing to do with writing to the DOM. Therefore, each time a component instance is rendered and re-rendered, the function is called again.',

            details: [],
          },
          {
            id: 24,
            question: 'Jonas: What causes the render?',
            images: [],
            answer:
              '🔄 Only the 🚩initial app render and 🚩state updates can cause a render, which happens for the 🚩entire application, not just one single component.',

            details: [],
          },
          {
            id: 25,
            question:
              'Jonas: how does rerender effect the children of the component?',
            images: [],
            answer:
              '👨‍👩‍👧 When a component instance gets re-rendered, 🚩all its children will get re-rendered as well. This doesn’t mean that all children will get updated in the DOM, thanks to 🚩reconciliation, which checks which elements have actually changed between two renders. But all this re-rendering can still have an impact on performance (more on that later in the course 👉).',

            details: [],
          },
          {
            id: 25,
            question: 'Jonas: What is diffing?',
            images: [],
            answer:
              "🧬 Diffing is how React decides which DOM elements need to be added or modified. If, between renders, a certain React element 🚩stays at the same position in the element tree🔺, the corresponding DOM element and component state will stay the same. If the element 🚩changed to a different position, or if it's a 🚩different element type, the DOM element and state will be destroyed.",

            details: [],
          },
          {
            id: 26,
            question: 'Jonas: What is the role of a key prop?',
            images: [],
            answer:
              '🔑 🚩Giving elements a key prop allows React to distinguish between multiple component instances. When a key stays the same across renders🔺, the element is kept in the DOM. This is why we need to use keys in lists. 🚩When we change the key between renders🔺, the DOM element will be destroyed and rebuilt. We use this as a 🚩trick to reset state.',

            details: [],
          },
          {
            id: 27,
            question:
              'Jonas: Why should you never declare a new component inside another component?',
            images: [],
            answer:
              '🪆 🚩Never declare a new component inside another component!🔺 Doing so will re-create the nested component every time the parent component re-renders. React will always see the nested component as 🚩new, and therefore 🚩reset its state each time the parent state is updated.',

            details: [],
          },
          {
            id: 28,
            question:
              'Jonas: Where the side effects are allowed and where they are not allowed?',
            images: [],
            answer:
              '🔮 The logic that produces JSX output for a component instance 🚩("render logic") is 🚩not allowed to produce any side effects🔺: no API calls, no timers, no object or variable mutations, no state updates. 🚩Side effects are allowed in event handlers and useEffect (next section 👉).',

            details: [],
          },
          {
            id: 29,
            question: 'Jonas: What librarie updates the DOM?',
            images: [],
            answer:
              '📱 🚩The DOM is updated in the commit phase, but not by React, but by a “renderer” called ReactDOM.🔺 That is why we always need to include both libraries in a React web app project. We can use other renderers to use React on different platforms, for example to build mobile or native apps.',

            details: [],
          },
          {
            id: 31,
            question:
              'Jonas: 🤷‍♂️Tell me about synthetic event object and bubbling?',
            images: [],
            answer:
              '🌐 When using events in event handlers, we get access to a synthetic event object, not the browser_s native object, so that events work the same way across all browsers. The difference is that most synthetic events bubble, including focus, blur, and change, which do not bubble as native browser events. Only the scroll event does not bubble.',

            details: [],
          },
          {
            id: 32,
            question: 'Jonas: Is React a framework?',
            images: [],
            answer:
              '🛠️ React is a library, not a framework. This means that you can assemble your application using your favorite third-party libraries. The downside is that you need to find and learn all these additional libraries. No problem, as you will learn about the most commonly used libraries in this course.',

            details: [],
          },
          {
            id: 33,
            question:
              'Jonas: Name 3 stages of a component (instance) life cycle?',
            images: [],
            answer:
              'Mount/Initial render -> Re-render (not always happens) -> Unmount',

            details: [
              'on mount:component instace is rendered for the first time; fresh state and props are created',
              'And during the unmount the component instance is destroyed and removed; and state and props are destroyed',
            ],
          },
          {
            id: 34,
            question:
              'Jonas: When does re-render of a component instance happen?',
            images: [],
            answer:
              '👉🏻 State changes; 👉🏻 Props change; 👉🏻 Parent re-renders; 👉🏻 Context changes',

            details: [],
          },
          {
            id: 35,
            question: 'What is the idea behind the useEffect hook?',
            images: [],
            answer:
              'useEffect gives us a place to safely run side effects, such as fetching data from an API, setting up subscriptions, or interacting with the DOM.',

            details: [
              "useEffect does not return anything, so we don't store it in a variable",
              'We pass a function inside, which contains a code we want to run for the desired side effects',
              "The function is called 'effect'",
              'Example: useEffect(function(){fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=harry potter`).then((res) => res.json()).then((data) => setMovies(data.Search));},[])',
              'and this function will be executed at a certain point in time',
              'The second part of the function is the 🚩dependency array',
              '🚩[] this dependecy array is empty, which means that the function will only run on mount',
            ],
          },
          {
            id: 36,
            question: 'What is a side effect in React?',
            images: [],
            answer:
              'A side effect is basically any "interaction between a React component and the world outside the component. We can also think of a side effect as "code that actually does something". Examples:',

            details: [
              'Data fetching',
              'Setting up subscriptions',
              "Setting up timers'",
              'Manually accessing the DOM)',
            ],
          },
          {
            id: 37,
            question:
              'Side effects can be produced in event handlers or in effects (useEffect), but never during rendering. Where can side effects be produced?',
            images: [],
            answer:
              'We can do it using either event handlers or effects (useEffect)',

            details: [
              'With the event handler the effect is triggered by some event',
              'With the useEffect the effect is triggered at some stated moment, defined in the dependency array',
              'If possible, use the event handler',
            ],
          },
          {
            id: 38,
            question: 'When can stale state occur?',
            images: [],
            answer:
              'When asynchronous code, event handlers, or multiple state updates rely on a captured state value instead of the latest state. Use the updater function form of setState to avoid it.',

            details: [],
          },
          {
            id: 39,
            question:
              'Jonas: How can ypu think about useEffect in a way of its similarity to event listener?',
            images: [],
            answer:
              'It is listening for one dependency to change. Whenever the dependency changes, it will execute the effect again',

            details: [],
          },
          {
            id: 40,
            question:
              'Jonas: How is useEffect truly a synchronization mechanism?',
            images: [],
            answer:
              'It is a mechanism to synchronize effects with the state of the application',

            details: [],
          },
          {
            id: 41,
            question: 'What happens when a useEffect dependency changes?',
            images: [],
            answer:
              'When a dependency (state or props) changes, React re-renders the component and re-executes any effects that depend on that value.',

            details: [
              'Dependencies are values listed in the dependency array.',
              'A dependency change causes a component re-render.',
              'Effects and the component lifecycle are closely connected.',
              'The dependency array controls when an effect runs again.',
            ],
          },
          {
            id: 42,
            question:
              'What is the difference between useEffect(fn, [x, y, z]), useEffect(fn, []), and useEffect(fn)?',
            images: [],
            answer:
              'The dependency array determines when an effect is executed.',

            details: [
              'useEffect(fn, [x, y, z]) synchronizes with x, y, and z. It runs on mount and whenever one of those dependencies changes.',
              'useEffect(fn, []) synchronizes with no state or props. It runs only once when the component mounts.',
              'useEffect(fn) synchronizes with everything. It runs after every render and is usually not what you want.',
            ],
          },
          {
            id: 43,
            question:
              'What does this code do?\n\nconst isWatched = watched.map((mov) => mov.imdbID).includes(selectedId);',
            images: [],
            answer:
              'It checks whether the movie with the selected ID exists in the watched array.',
            details: [
              'map() creates a new array containing only the imdbIDs of all watched movies.',
              'includes(selectedId) checks whether the selected ID is in that array.',
              'The result is a boolean: true if the movie was watched, false otherwise.',
            ],
          },
          {
            id: 44,
            question: 'What is a controlled element in React?',
            images: [],
            answer:
              'A controlled element is a form element whose value is controlled by React state.',
            details: [
              'The displayed value comes from a state variable.',
              'The state is updated through an event handler, usually onChange.',
              'React becomes the single source of truth for the element value.',
              'Common examples are inputs, textareas, and select elements.',
            ],
          },
          {
            id: 45,
            question: 'How do you create a controlled input in React?',
            images: [],
            answer:
              'Bind the input value to state and update that state in an onChange handler.',
            details: [
              'value={query} makes React control the input value.',
              'onChange={(e) => setQuery(e.target.value)} updates the state.',
              'The input always displays the current state value.',
            ],
          },
          {
            id: 46,
            question: 'How do you use await inside useEffect?',
            images: [],
            answer:
              'Create an async function inside the effect and call it, because the effect callback itself cannot be async.',
            details: [],
          },
        ],

        cardCount: 46,
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
          {
            id: 8,
            question: 'What flower is shown in the image?',
            code: '',
            images: [
              '/images/Rhododendron1.jpeg',
              '/images/Rhododendron2.jpeg',
              '/images/Rhododendron3.jpeg',
              '/images/Rhododendron4.jpeg',
            ],
            answer: 'Rhododendron',

            facts: [
              'Rhododendrons can live for a very long time. Some become almost tree-sized,',
              'They’re part of the blueberry family 🫐',
              'Vancouver and Victoria are kind of rhododendron heaven because of the climate.',
              'Some species are mildly toxic to humans and pets. Even the nectar can be toxic in large amounts.',
              'There’s a thing called “mad honey” made from rhododendron nectar that historically caused hallucinations and poisoning in some regions 😭',
            ],
          },
          {
            id: 9,
            question: 'What flower is shown in the image?',
            code: '',
            images: [
              '/images/JapaneseSpirea_1.jpeg',
              '/images/JapaneseSpirea_2.jpeg',
              '/images/JapaneseSpirea_3.jpeg',
            ],
            answer: 'Japanese Spirea',

            facts: [
              '🦋 Butterflies love spirea.',
              '🌸 Each fluffy pink cluster is actually made up of dozens or hundreds of tiny flowers.',
              '✂️ Landscapers love it because it is very forgiving. You can prune it hard and it usually bounces back.',
              "🍃 The yellow-green leaves suggest it may be a cultivar like 'Goldflame' or 'Goldmound', which are especially popular in BC.",
            ],
          },
          {
            id: 10,
            question: 'What flower is shown in the image?',
            code: '',
            images: [
              '/images/WoodSage_1.jpeg',
              '/images/WoodSage_2.jpeg',
              '/images/WoodSage_3.jpeg',
            ],
            answer: 'Wood Sage (Salvia)',

            facts: [
              'Salvia: name comes from the Latin salvare, meaning "to heal" or "to save.',
              'It is related to kitchen sage, but usually grown for flowers rather than cooking.',
              'Bumblebees especially love salvias because the flowers are rich in nectar.',
              'These plants evolved in hot, sunny, relatively dry environments',
              'If gardeners cut the spent flower spikes back after the first bloom, many varieties will flower again later in the season.',
            ],
          },
          {
            id: 11,
            question: 'What flower is shown in the image?',
            code: '',
            images: [
              '/images/French Marigold_1.jpeg',
              '/images/French Marigold_2.jpeg',
              '/images/French Marigold_3.jpeg',
              '/images/French Marigold_4.jpeg',
            ],
            answer: 'French Marigold',

            facts: [
              'Despite the name "French marigold," they are form Mexico originally',
              'People plant them to repel pests.',
              'That vivid orange comes from pigments called carotenoids, the same family of compounds that make carrots orange.',
              'Bees and butterflies will use them, though they are not quite the bee magnets',
              'Unlike the salvia and spirea, these are usually planted fresh each year',
            ],
          },
          {
            id: 12,
            question: 'What flower is shown in the image?',
            code: '',
            images: [
              '/images/Rose_Campion_1.jpeg',
              '/images/Rose_Campion_2.jpeg',
              '/images/Rose_Campion_3.jpeg',
              '/images/Rose_Campion_4.jpeg',
            ],
            answer: 'Rose Campion (Silene coronaria)',

            facts: [
              'Горицвет корончатый or Лихнис корончатый',
              'The leaves are covered in tiny hairs, giving the whole plant a silvery, almost velvety look.',
              'It loves poor, dry soil. In fact, it often performs worse in rich, heavily watered garden beds.',
              '🦋 Butterflies and bees visit it frequently.',
              "It self-seeds enthusiastically. Gardeners often joke that once you have rose campion, you'll keep finding baby rose campions in new places.",
              'The genus name Silene comes from a character in Greek mythology named Silenus.',
            ],
          },
          {
            id: 13,
            question: 'What flower is shown in the image?',
            code: '',
            images: [
              '/images/Red_Tip_Photinia_1.jpeg',
              '/images/Red_Tip_Photinia_2.jpeg',
              '/images/Red_Tip_Photinia_3.jpeg',
              '/images/Red_Tip_Photinia_4.jpeg',
              '/images/Red_Tip_Photinia_5.jpeg',
              '/images/Red_Tip_Photinia_6.jpeg',
            ],
            answer: 'Red Tip Photinia (Photinia × fraseri)',

            facts: [
              'Russian: Фотиния Фрейзера (Photinia fraseri)',
              'Commonly trimmed into hedges and large shrubs',
              'Older leaves turn dark green while new leaves emerge brilliant red.',
              "The cultivar 'Red Robin' is one of the most popular hedge plants in the world.",
              '🌸 In spring it usually produces clusters of small white flowers, though many landscapers trim it before flowering because they grow it mainly for the foliage.',
              '🐦 Later it can produce small red berries that birds enjoy.',
              '✂️ If pruned regularly, it keeps producing fresh red leaves, which is why hedges of photinia often stay colorful all season.',
            ],
          },
          {
            id: 14,
            question: 'What flower is shown in the image?',
            code: '',
            images: [
              '/images/Japanese_Boxwood_1.jpeg',
              '/images/Japanese_Boxwood_2.jpeg',
              '/images/Japanese_Boxwood_3.jpeg',
              '/images/Japanese_Boxwood_4.jpeg',
              '/images/Japanese_Boxwood_5.jpeg',
            ],
            answer: 'Boxwood',

            facts: [
              'Russian: Самшит мелколистный (Japanese Boxwood)',
              'Type: Evergreen shrub 🌳',
              'tiny glossy evergreen leaves, Dense branching structure',
              '🏰 Boxwood has been used in formal gardens for centuries. Think English manor houses, French palace gardens, and maze hedges.',
              '✂️ It tolerates pruning exceptionally well, which is why landscapers love shaping it into neat geometric forms.',
              '🐢 It grows fairly slowly, which helps it keep its shape.',
              '🌱 The wood is extremely dense. Historically it was used for carving, chess pieces, rulers, and musical instruments.',
            ],
          },
        ],
        cardCount: 13,
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
            audio: '/audio/chickadee-song.mp3',
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
            images: [
              '/images/Dark-eyed Junco.jpeg',
              '/images/Dark-eyed Junco1.jpeg',
            ],
            audio: '/audio/Dark-eyed-Junco.mp3',
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
        title: 'Characters',
        cards: [
          {
            id: 1,
            question: 'Who is this?',
            code: '',
            images: ['/images/lucy.avif'],
            answer: 'Lucy',
            facts: [
              'FIRST APPEARANCE: March 3, 1952',
              'Though she’s often dismissed as simply bossy or crabby, there’s more to Lucy than strong opinions. She dispenses sound advice for just five cents and looks out for her brothers, Linus and Rerun.',
              'She’s confident, strong, and positive she’ll make a great president or queen one day.',
              'Her biggest weakness is her unrequited love for Schroeder… *sigh*. Never fall in love with a musician.',
            ],
          },
          {
            id: 2,
            question: 'Who is this?',
            code: '',
            images: ['/images/linus.avif'],
            answer: 'Linus',
            facts: [
              'FIRST APPEARANCE: September 19, 1952',
              ' Thoughtful and respectful, Linus is often the voice of reason among his peers. He is a deep thinker and a student of philosophy.',
              'Despite his run-ins with cantankerous Lucy, and the fact no one understands why he carries a security blanket, Linus remains delightfully hopeful. He’s certain that this year, the Great Pumpkin will appear…he just knows it… ',
              'DID YOU KNOW: Linus wore glasses for a short time. Snoopy constantly stole them to torment him.',
              '"Linus, my serious side, is the house intellectual, bright, well-informed which, I suppose may contribute to his feelings of insecurity." —Charles M. Schulz',
            ],
          },
          {
            id: 3,
            question: 'Who is this?',
            code: '',
            images: ['/images/Sally.avif'],
            answer: 'Sally',
            facts: [
              'FIRST APPEARANCE: August 23, 1959',
              ' Sally is inquisitive and demands answers for everything. Why do kids have to go to school? Why not dessert first? When faced with a question she can’t answer, she tackles the problem with a classic philosophy: “Who cares?!” Her heart skips a beat when she sees her “Sweet Babboo,” Linus. And she knows that even though she may not understand him, she can always turn to her big brother, Charlie Brown, for help and encouragement.',

              'DID YOU KNOW: For 6 months, Sally experienced amblyopia ("lazy eye") and wore an eye patch.',

              '"Sally is the complete pragmatist. There is a certain charm when she fractures the language: ‘By golly, if any centimeters come in this room, I’ll step on them!"  —Charles M. Schulz',
            ],
          },
          {
            id: 4,
            question: 'Who is this?',
            code: '',
            images: ['/images/Shroeder2.avif', '/images/schroeder.jpg'],
            answer: 'Schroeder',
            facts: [
              'FIRST APPEARANCE: May 30, 1951',
              'A moody musical genius, Schroeder has been playing the piano since before he could walk. He also enjoys baseball and being with friends, but he’s never happier than when playing a Beethoven piece—even if the black keys of his piano are just painted on. If only he could get Lucy to leave him alone long enough to make it through the first movement of the sonata!',

              "DID YOU KNOW: Schulz chose Beethoven as Schroeder's muse because he believed words beginning with 'B' sounded funny...like blockhead and beagle.",

              '"I kind of like Schroeder. He’s fairly down to earth, but he has his problems too. He has to play on the painted black piano keys, and he thinks Beethoven was the first President of the United States." —Charles M. Schulz',
            ],
          },
        ],
        cardCount: 4,
        meta: 'New',
      },
      {
        id: 402,
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
        id: 403,
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
        id: 404,
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
