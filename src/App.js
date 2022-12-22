import About from "./About";
import Body from "./All";
import Contact from "./Contact us";
import { BrowserRouter , Routes, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
       <Routes>
            <Route>
                 <Route path='/' element={<Body/>}/>
                 <Route index path='/about' element={<About/>}/>
                 <Route index path='/contact' element={<Contact/>}/>
            </Route>
        </Routes>
 </BrowserRouter>
  );
}

export default App;
