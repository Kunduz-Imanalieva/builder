import Layout from "./components/Layout/Layout";
import "./App.css";
import SaladBuilder from "./components/SaladBuilder/SaladBuilder";
import Checkout from "./components/Checkout/Checkout";
import { Redirect, Route, Switch } from "react-router";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { restore } from "./store/actions/auth";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => restore(dispatch), [dispatch]);

  let routesOutput = (
    <Switch>
      <Route path="/" exact component={SaladBuilder} />
      <Route path="/auth" component={Auth} />
      <Redirect to="/" />
    </Switch>
  );
  if (isAuthenticated) {
    routesOutput = (
      <Switch>
        <Route path="/" exact component={SaladBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Layout>
      {routesOutput}
      </Layout>
    </div>
  );
}

export default App;
