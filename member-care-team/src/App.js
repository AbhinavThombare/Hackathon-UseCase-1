import './App.css';
import Header from './components/Header/header';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Details from './components/Details/details';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    id:'root'
  },
  {
    path:'/details',
    element: <Details/>
  }

]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
