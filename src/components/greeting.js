/*
React has a built-in feature to help you make your components dynamic: 
properties (or props, for short).

The code snippets below show an example of how to pass a prop into a component
 when it’s rendered and how to use the value of that prop within the component definition:
When you define your component, it should take in a single argument: an object called props. 
The props object will have whatever properties you passed into your component when you rendered it.

Syntax Hint: In JSX, you can embed any JavaScript expression by wrapping it with {}. 
That’s how you can access the value of the name prop from the props object.
*/
// Defining the <Greeting> component

import * as React from 'react'

const Greeting = (props) => {
  return (
    <p>Hi {props.name}!</p>
  )
}