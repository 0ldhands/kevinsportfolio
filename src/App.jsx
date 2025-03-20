// import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Homelayout from "./layout/Homelayout";
import Aboutlayout from "./layout/Aboutlayout";
import Contactlayout from "./layout/Contactlayout";
import Rootlayout from "./layout/Rootlayout";
import Detail from "./components/Detail";
import Educations from "./components/Educations";
import Skills from "./components/Skills";
import Content from "./components/Content";
import Projects from './components/Projects'
import Certificate from './components/Certificate'
import Hobbies from './components/Hobbies'
import Internship from './components/Internship'
import Achievements from './components/Achievements'
import Experience from './components/Experience'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route path="/" element={<Homelayout />}>
          <Route path="/" element={<Content />}>
            <Route path="" element={<Detail />} />
            <Route path="Educations" element={<Educations />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Certificate" element={<Certificate />} />
            <Route path="Hobbies" element={<Hobbies />} />
            <Route path="Internship" element={<Internship />} />
            <Route path="Achievements" element={<Achievements />} />
            <Route path="Experience" element={<Experience />} />
          </Route>
        </Route>
        <Route path="About" element={<Aboutlayout />} />
        <Route path="Contact" element={<Contactlayout />} />
      </Route>
    )
  );
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Homelayout/>}/>
          <Route path="/About" element={<Aboutlayout/>}/>
          <Route path="/Contact" element={<Contactlayout/>}/>
        </Routes>
      </Router> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
