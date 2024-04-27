import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Latest from './components/Latest';
import Starred from './components/Starred';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';


const router = createBrowserRouter([{
  path: "/",
  element: <Latest />
}, {
  path: "/starred",
  element: <Starred />
}])


function App() {

  const isDarkMode = useSelector((state: RootState) => { return state.darkMode });
  return (
    <div className={isDarkMode ? 'app dark' : 'app light'}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

