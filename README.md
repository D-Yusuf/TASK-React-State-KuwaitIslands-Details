### Steps

Fork and clone [this repo](https://github.com/JoinCODED/TASK-React-KuwaitIslands-Details) into your `Development` folder

## Description

In this website, whenever a user presses on an island, it will appear on the right side, with 'Boubyan' being the default island when you first open the app.

For the bonus 🎁, a user can book a trip to the island they choose by typing their information, and confirming their booking.

## 🍋 Part 1: Change the island 

1. In `App.js` we are rendring the `IslandList` and `IslandForm`. Island form is taking the value `island` that you have to make a state.
2. Change the variable island to a state called `island` that holds the island to be shown with an intial value of boubyan island object.
3. In `App.js` pass our state to the `IslandForm`.
4. Pass this `setIsland` to `IslandList`.
5. From `IslandList` let's pass it again to `Island`.
6. In `Island` add an `onClick` function to the whole `div` that calls our `setIsland` and give it the current island.

##### DONE EZ

## 🤼 Part 2: Form

1. Change the type of the [phone number input to be phone](https://www.w3schools.com/tags/att_input_type_tel.asp)
2. When clicking (book now) button in `IslandForm`, show a [confirm message](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) to confirm if the user really wants to book the trip with the following message: "Are you sure you want to book to `{ISLAND_NAME}` with the Name: `{NAME}`, phone: `{PHONE_NUMBER}`"

## 🌶 Part 3: Visitors counter

1. If confirmed (clicking on OK button), you should increment the counter of visitor inside the island selected.
