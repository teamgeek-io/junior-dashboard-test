## TailAdmin React - Installation

You'll need to install Node.js >=v14.16+ (Recommended Version) (NPM comes along with it) and TailAdmin uses **Vite** for frontend tooling, to peform installation and building production version, please follow these steps from below:

- Use terminal and navigate to the project (tailadmin-react) root.

- Then run : <code>npm install</code>

- Then run : <code>npm run dev</code>

Now, in the browser go to <code>localhost:5173</code>

**For Production Build**
Run : <code>npm run build</code>

Default build output directory: /dist

This command will generate a dist as build folder in the root of your template that you can upload to your server.

## Tons of React Tailwind Components for Dashboard
React and Tailwind are two popular technologies that have taken the web development world by storm. React is a JavaScript library for building user interfaces, while Tailwind is a utility-first CSS framework that makes it easy to style web applications. TailAdmin React Offers 200+ Essential React + Tailwind CSS UI Components that you copy-paste and use with your dashboard projects. That includes - charts, graphs, navbars, tabs, buttons, cards, tables, profile, tabs, forms, modals, app pages, calender, web apps example templates and more... for React and Styled using Tailwind CSS

## Getting started

Fork this repository into your own github account. Once you are complete, send a pull-request back into this repository.

## Your task

#### Part 1:

The client has requested a new card added to their sales dashboard. They would like to see their best performing products in each category as well as total revenue for each category.

Given the following dataset from the API:

Products
```json
[{
  "id": 1,
  "name": "Nike air force ones",
  "salesRevenue": 5000,
  "cost": 100,
  "categoryId": 1
},
{
  "id": 2,
  "name": "I love shirts print",
  "salesRevenue": 18982,
  "cost": 100,
  "categoryId": 2
},
{
  "id": 3,
  "name": "Adidas shoes",
  "salesRevenue": 123,
  "cost": 100,
  "categoryId": 1
},
{
  "id": 4,
  "name": "Batman funko-pop",
  "salesRevenue": 199,
  "cost": 100,
  "categoryId": 3
},
{
  "id": 5,
  "name": "Mona Lisa",
  "salesRevenue": 1428,
  "cost": 100,
  "categoryId": 4
},
{
  "id": 6,
  "name": "Plain white T",
  "salesRevenue": 82,
  "cost": 100,
  "categoryId": 2
},
{
  "id": 7,
  "name": "Plain green T",
  "salesRevenue": 901,
  "cost": 100,
  "categoryId": 2
},
]
```

Categories
```json
[{
  "id": 1,
  "name": "Sneakers"
}, {
  "id": 2,
  "name": "T-shirts"
}, {
  "id": 3,
  "name": "Figurines"
}, {
  "id": 4,
  "name": "Art"
}]
```

Create a card on the dashboard underneath the 4 statistics cards with the following functionality:

- A category selector
- The user should see a table with a list of the products in the currently selected category
  - The table should have the "Id, Name, Revenue, Cost" columns. The revenue and cost should be formatted as USD
- Underneath the table there should be a total revenue field which should show the total revenue for the selected category
- Additionally there should be a "total profit" field which shows the total profit (revenue - cost) for the selected category

You need to make sure the card fits the look and feel of the existing dashboard and designed with best practices in mind. Pay careful attention to the mobile experience.

#### Part 2:

The stats at the top of the dashboard are not updating. This is because the API call has not been implemented. The API is hosted at: https://j5l5hqnix6.execute-api.af-south-1.amazonaws.com/dev/docs#/.

Your task is to implement the API call to populate the cards with data from the API. Take into account the following:

- You need to show the user a loading state while the API is loading
- You need to handle any errors that may occur and show the user a helpful and informative error
- While the cards are loading, it should not block the user from using the rest of the API.
- You can use any method to call the API, however it is recommended you use a library like `SWR` or `react-query`

### Assessment criteria

- No warning or errors in the console
- The functionality works as prescribed without any glitches, bugs or crashes
- No functionality was missed
- It works on mobile and desktop
- The dark mode toggle works as expected
- Code quality best practices
