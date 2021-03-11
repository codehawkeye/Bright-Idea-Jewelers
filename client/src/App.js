import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer";
import Details from "./pages/Detail";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css"




// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default () => {
  return (
    
    <Router>
      <Nav/>
      <div>
       

        

        <Switch>
          {/* <Route exact path="/home/:id" component={Detail} /> */}
          <Route exact path="/home" component={Home} />
          {/* <Route path="/:id" children={<Child />} /> */}
          <Route exact path="/Details" component={Details} />
          <Route exact path="/Footer" component={Footer} />
         
        </Switch>
      
      </div>
      <Footer/>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
