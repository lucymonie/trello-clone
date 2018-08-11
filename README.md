## Trello clone

This is a trello clone built using [Create React App](https://github.com/facebook/create-react-app) and [JSON Server](https://github.com/typicode/json-server), which provides a small API for data persistence.

### Instructions
- Clone the repo and cd into the folder
- Run `yarn` or `npm install` depending on which package manager you use
- Run `yarn db` or `npm run db` to run the database
- Run `yarn start` or `npm start` to run the front end
- Run `yarn test` or `npm test` to run the test suite

If you'd like to look at the data you can call the database directly at localhost:4000, for example
- Lists: localhost:4000/lists
- Tasks: localhost:4000/tasks

### Testing
Tests are written in Jest with Enzyme and Snapshots.

### Specification
#### Lists and Cards.
- [x] A list has a required name and a collection of cards.
- [x] A card has a required title.
- [ ] A card has a required description.
- [x] A card has an optional due date.
#### A user of the application should:
- [x] Be able to create a new list.
- [x] Be able to create a new card in a list.
- [ ] Be able to move cards between lists.
#### The application should:
- [ ] Star cards that have a due date in the next 3 days.
- [x] Highlight cards in red that are overdue.
- [x] Persist lists and cards (however you like, but local storage is fine)

### Next steps
- Add the due date functionality as this will make it possible to check off three more items on the specs
- Add a description field to task cards
- Use [React DnD](https://github.com/react-dnd/react-dnd) for drag and drop functionality
- Consider adding [Context API](https://reactjs.org/docs/context.html) to pass props through the app as things are getting a little complicated
- More tests...
