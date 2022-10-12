import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Qustion from './components/Qustion/Qustion';
import Statistics from './components/Statistics/Statistics';
import Main from './Layout/Main';




function App() {

const router=createBrowserRouter([
  {path: '/',
  errorElement: <ErrorPage></ErrorPage>,
  element: <Main></Main>, children:[
    {path: '/', 
    loader:()=>{
      return fetch('https://openapi.programming-hero.com/api/quiz')
    },
    element: <Home></Home>},
    {path:'/:id',
    loader:({params})=>{
     return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    },
    element: <Qustion></Qustion>},
    {path:'/statistics',
     loader:()=>{
      return fetch('https://openapi.programming-hero.com/api/quiz')
     },
     element:<Statistics></Statistics>}
  ]}
])


  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
