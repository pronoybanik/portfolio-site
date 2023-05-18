import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './LayOut/Main/Main';
import Home from './Pages/Home/Home';
import MyDetails from './Pages/MyDetails/MyDetails';
import From from './Pages/From/From';


function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/myDetails',
          element: <MyDetails></MyDetails>
        },
        {
          path: '/from',
          element: <From></From>
        },
       
      ]
    }
  ])


  return (
    <div className="max-w-[1440px] mx-auto bg-slate-800">
      <RouterProvider router={routers}></RouterProvider>

    </div>
  );
}

export default App;
