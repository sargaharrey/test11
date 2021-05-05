import Dashboard from './pages/Dashboard/Dashboard.js';
import {
  BrowserRouter,
   
  Route,

} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>

          
          <Route exact path="/" component={Dashboard} />
     
     </BrowserRouter> 
    
    </>
  );
}

export default App;
