import './App.css';
import Header from './components/Header/header';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Details from './components/Details/details';
import MedicineDetials from './components/medicineDetials/medicineDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Header/>,
    id:'root'
  },
  {
    path:'detials',
    element: <Details/>
  },
  {
    path:'medicine',
    element: <MedicineDetials/>
  }

]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
