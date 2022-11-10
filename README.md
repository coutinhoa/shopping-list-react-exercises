# Shopping List React Exercises

React project that aims to help less experienced developers quickly get hands-on experience in React. The goal is to add functionality and styling issues should be overlooked!

Feel free to make suggetions/improvements and even tag me if you want a code review to your solution :)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Exercises](#exercises)

## Installation

1. Clone this project to your computer with:

```sh
git clone https://github.com/coutinhoa/shopping-list-react-exercises.git
```

2. Move to the project root directory and install packages:

```sh
cd shopping-list-react-exercises
yarn install
```

3. Install json-server

```sh
yarn add -g json-server
```

## Usage

1. Run the web application in the terminal:

```sh
yarn run dev
```

2. Run the json-server API in a new terminal window:

```sh
cd server
json-server .\expenses.json --port 3002
```

3. Access the application through the browser at http://localhost:3000 and you should see the following:

![Screenshot 2022-07-03 at 12 52 21](https://user-images.githubusercontent.com/55699538/177037100-9b10ca47-00a4-472a-a5d4-3f37d39fb2fb.png)

## Exercises

1. Format the **Price** colum so all prices are shown with 2 decimal cases (ex: 2.50€).

2. Add the correct **Total amount** at the bottom of the shopping list. It currently shows 1.00€ but we want it to show the sum of all our items, while taking into account their quantities.

   _For example: **2 Avocados** (0.75€ each) + **1 Milk** (1.30€ each) should show a **Total Amount** of 2.80€_

3. The list has repeated items. Figure out a way to show the repeated items as part of the same item.

   _For example **4 Strawberries** + **2 Strawberries** should show in the list as a single **Strawberry** line with quantity 6._

4. Changing the item quantity in the dropdown does not influence the **Total Amount**. Find a way to modify the quantity of a single item and have that reflect on the **Total Amount**.

5. Clicking on the **Delete** column of a single item should remove it from the **Shopping List** and the **Total Amount** should reflect its removal.

That's it! I hope you have fun solving these exercises and that you also find them challenging :D
