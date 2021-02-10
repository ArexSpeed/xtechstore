import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop";
import Product from "./pages/product";
import Admin from "./pages/admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:id" component={Product} />
          <Route path="/admin" component={Admin} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;