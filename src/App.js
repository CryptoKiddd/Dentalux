
import './App.css';
import {HeroPage,AboutPage,DentistsPage,ContactPage} from './Pages';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/dentists",
    element: <DentistsPage />,
  },
  {
    path: "/contacts",
    element: <ContactPage />,
  },
]);


function App() {
  return (
    <div className="App">
<RouterProvider router={router} />    
    </div>
  );
}

export default App;
