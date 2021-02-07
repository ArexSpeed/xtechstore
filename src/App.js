import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop";
import Product from "./pages/product";
import Admin from "./pages/admin";
import EditItem from './components/AdminMain/EditItem'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:id" component={Product} />
          <Route path="/admin" component={Admin} exact />
          <Route path="/admin/:id" component={EditItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
