import './App.css';
import Home from './components/home/Home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Details from './components/Details/details';
import MedicineDetials from './components/medicineDetials/medicineDetails';
import FollowUp from './components/FollowUp/followUp';
import Notification from './components/Notification/notification';
import Coupon from './components/coupon/coupon';
import Landing from './components/Landing/Landing';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    id:'root'
  },
  {
    path:'detials',
    element: <Details/>
  },
  {
    path:'medicine',
    element: <MedicineDetials/>
  },
  {
    path:'followup',
    element: <FollowUp/>
  },
  {
    path:'notification',
    element: <Notification/>
  },
  {
    path:'coupon',
    element: <Coupon/>
  }
  ,
  {
    path:'landing',
    element: <Landing/>
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
