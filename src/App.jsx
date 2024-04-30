import { useState } from 'react'
import './App.css'

function App() {

  /* this is hook method useState() this method use when the multiple
   place using the same keyword and not reacted in the browser so we are 
   using the hook any method */

   /* in this useState() method we are create the array beacuse first index of 
   array id variable and second is method this method is access thar variable */

   /* here counter is variable and setCounter is function that access is variable */

  let [counter , setCounter] = useState(15) // this is default value you can pass any value 
//  let counter = 15

 const increaseValue = () =>{
  // console.log("Change value" + parseInt(Math.random()*10))
  // counter = counter + 1;
  if(counter >=20)
  {
  
    alert("The Value Does Not Increse Because the Maximimum Value is 20 ")
  }
  // console.log(counter + " Changed Value After the Increase ")
  else
  {
    setCounter(counter + 1);
  }
 }

 const decreseValue = () =>{
  // counter = counter - 1;
  if(counter <= 0)
  {
    alert("The Minimum Value is 0 Not Decrese The Value ")
  }
  else
  {
    setCounter(counter - 1) ;
  }
  // console.log(counter + " Change Value After the Decrese ")
 }
  return (
    <>
      <h1> Counter Project in React Basic Using the Hook Method </h1>
      <h2> Counter Value : {counter} </h2>
      <button onClick={increaseValue}> Increase Value : {counter} </button> &nbsp;
      <button onClick={decreseValue}> Decrease Value  : {counter} </button>
      <p> <strong> This is The Basic REact Counter Projects : {counter} </strong> </p>
    </>
  )
}

/* Here We are using the multiple place counter variable because we are checked
that hook method is continue or not  */
export default App
