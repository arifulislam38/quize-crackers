import logo from './logo.svg';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import routes from './Routes';
const router = routes;
function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
