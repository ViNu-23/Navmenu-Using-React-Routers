import { useState, useEffect } from "react"; //importing use state and use effect from react
//use state is a function return array with 2 value undefined and function
// import { data } from "./data";
//type rfc short hand method
// function App() {
// let title = "Name";

// console.log(useState('test'));
// const value =useState(99)[0];
// const value =useState(99)[1];
// console.log(value);

// const [beforeClick,afterClick]=useState('Name Before')
// function clickHandler(){
//   if(beforeClick ==='Name Before'){
//   afterClick('Name After');
//   }else{
//   afterClick('Name Before');

//   }
// }
//   return (
//     <>
//       <h2>{beforeClick}</h2>
//       <button type="button" onClick={clickHandler}>Change Title</button>
//     </>
//   );
// }

//-----------------------for data.js--------------------------

//using use state hook here------------------------------------------------------
// function App() {
//   const [teams, setName] = useState(data);
//   // console.log(teams);
//   function clearName() {
//     setName([]);
//   }
//   return (
//     <>
//       {teams.map((i) => {
//         return (
//           <div key={i.id}>
//             <h1>
//               {i.id}. {i.name}
//             </h1>
//           </div>
//         );
//       })}
//       <button type="button" onClick={clearName}>
//         Clear Data
//       </button>
//     </>
//   );
// }
// export default App;

//using use effect hook here---------------------------------------------
// run when it components run and re rendering
//cleanup function
// second parameter

// function App() {

//  useEffect(()=>{
//   console.log('use effect running ?');
//  },[]);//for initial rendering it will run now [] in this give specific initial value it define when he run dependency array

//  useEffect(()=>{
//   console.log('use effect running ?');
//  });  //run every rerender

// const [count,setCount]=useState(0);

// function increaseValue(){
// setCount(count+1)
// }

//   return (
//     <>
//      <button onClick={increaseValue} type="button">{count}</button>
//     </>
//   );
// }
// export default App;

//https://courses.microdegree.work/courses/take/react/lessons/22493407-useeffect-dependency-list   -->26a

//--------------------------fetching data from use effect------------------
//assigning url link to url constant
// const url = "https://jsonplaceholder.typicode.com/users";

// function App() {
//   //assigning a null array  to user
//   const [user, setUser] = useState([]);

//   //fetching the data using Async await
//   async function getData() {
//   const response = await fetch(url);
//   const userData = await response.json();
//   setUser(userData);
//   console.log(userData);
// };
//   //rendering getData() function only one time while page reloading
//   useEffect(() => {
//     getData();
//   }, []);

//   //returning components
//   return (
//     <>
//     {/* using map function loop through all values that are stored in user that assigned from url json */}
//       {user.map((i)=>{
//         return (
//      <div className="user-data">
//         <h2 key={i.id}>Name: {i.name}</h2>
//         <p> User Name: {i.username}</p>
//         <p>Email: {i.email}</p>
//         <p>Website: {i.website}</p>

//      </div>
//         )
//       })}
//     </>
//   );
// }

// import React from "react";
// //conditional rendering

// function App() {
//   const [start, setStart] = useState(1);
//   if (start) {
//     return <h1>'Beginning loading'</h1>;
//   }
//   return <h1>Loaded</h1>;
// }

// export default App;

// import React from 'react'
// //short circuit evaluation

// export default function App() {
//   const[text,setText]=useState(false);
//   const firstValue = text||'hello world';//logical or  prints when text false
//   const secondValue=text&&'hello'//and  prints when text true
//   return (
//     <div>
//       <h1>{firstValue}</h1>
//       {secondValue}
//     </div>
//   )
// }

// import React from 'react'

// export default function App() {
//   // ternary operator
//   const[text,setText]=useState(0);
//   const[show,setShow]=useState(false);

// function handleClick(){
// setText(!text)
// setShow(!show)
// }
//   return (
//     <>
//     {/* true and false will display */}
//     {text? <h1>True part</h1> : <h1>False part</h1>}
//     <button type="button" onClick={handleClick}>Click me</button>
//     {/* display only true */}
//     {show&&<h1>Model shown</h1>}

//     </>
//   )
// }



// import React from "react";

// export default function App() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(name, age);
//   }

//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");

//   function handleChangeName(e) {
//     setName(e.target.value);
//   }
//   function handleChangeAge(e) {
//     setAge(e.target.value);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name </label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={name}
//         onChange={handleChangeName}
//       />

//       <label htmlFor="age">Age </label>
//       <input
//         type="number"
//         id="age"
//         name="age"
//         value={age}
//         onChange={handleChangeAge}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   ) ;
// }


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import More from './Pages/More';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  );
}