
import './App.css';

import { RouterProvider } from 'react-router-dom';
import routes from './Routes';
// import { createContext, useEffect, useState } from 'react';
const router = routes;
// export const allContext = createContext('all context');


function App() {

  // const [allTopics, setallTopics] = useState([]);

  // useEffect(() => {
  //   fetch('https://openapi.programming-hero.com/api/quiz')
  //   .then(res => res.json())
  //   .then(data => setallTopics(data));
  // },[]);


  return (
    <div className="App">
     {/* <allContext.Provider value={allTopics}>
       
     </allContext.Provider> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
