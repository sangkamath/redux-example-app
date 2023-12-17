import logo from './logo.svg';
import './App.css';
import { Counter} from "./features/counter/Counter"


/*
to update values immutably,  must make copies of existing objects/arras,
and then modify the copies.

const obj = {
  a: {
    c:3
  },
  b: 2
}

const obj2 = {
  ...obj,
  a: {
    ...obj.a,
    c: 42
  }
}

const arr = ['a', 'b'];

const arr2 = arr.concat('c');
const arr3 = arr.slice();

arr3.push('c');

Actions
Have a type field. Describes something that happened in the app.
Can have other fields with additional info. WE can put it in a
field called payload

const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy milk"
}

Action creator is a function that creates and returns action object
const addTodo = (text) => {
  return {
    type: "todos/todoAdded",
    payload: text
  }
}

Reducer is a function that receives current state and action
and decideds to update state if necessary and returns new state
(state, action) => newState.
Reducer is like event listener which handles events based on received 
action (event) type.
only calculate new state based on state and action
make immutable updates shouldn't change state
must not to any async logic or calculate random values or side effects cause

logic inside reducer
do we care about the action if so make copy of state with new values and return it
otherwise return existing state unchanged


current redux application state lives in object called store
store is created by passing in a reducer and has a method called getstate
that returns current state value

Redux store has method called dispatch. The only way to update the state is to
call store.dispatch() and pass in an action object. The store will run its reducer function
and save new state value inside we can call getState to retrieve updated value.

dispatching actions as triggering events.
reducers act like event listeners.

call action creatorsto dispatch the right action.

selectors are functions that extract specific pieces of info from a store state value
as app grows bigger, can help avoid repeating logic if diff parts of app need to read same data

state describes condition of app at specific point in time
UI is rendered based on that state
when something happesn state is updated base on what occured
UI re renders based on new state

a slice is a collection of redux reducer logic and actions for
single feature in your app

Reducers:
1. should only calculate new state value based on state and action 
arguments
2. not allowed to modify existing state, make immutable updates, by
copying the existing state and making changes to copied values
3. must not do any async logic or other side effects

why you must not mutate state in redux
1. it causes bugs, such as UI not updating properly to show latest values
2. makes it harder to understand why and how state has been updated
3. makes it harder to write tests
4. breaks the ability to use "time travel debugging" correctly
5. it goes against intended spirti and usage patterns for redux

A thunk is a specific kind of redux function that cancontain async logic.
Thunks are written using two functions
1. an inside think function, which gets dispatch and getStateas arguments
2. the outside creature function which creates and returns thunk function

React Redux library has a set of custom hooks that allow your react
component to interact with a redux store.
useSelector lets our component extract whatever pieces of data it needs
from redux store state

selector fucntions which take state as an argument and return some 
part of the state value

what kind of data should be put into redux
1. do other parts of the app care about this data?
2. do you need to be able to create further derived data based on original data
3. is the same data being used to drive multiple components
4. is there value in being able to restore this state to given point in
time like time travel debugging
5. do you want to cache the data
6. do you want to keep data consisted while hot reloading UI
components which may lose internal state when swapped
*/

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
