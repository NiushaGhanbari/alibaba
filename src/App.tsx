import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import DetailByCodePage from "./pages/detail/code/detail-by-code";
import DetailByNamePage from "./pages/detail/name/detail-by-name";
import HomePage from "./pages/home/HomePage";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/detail/code/:code">
          <DetailByCodePage />
        </Route>
        <Route path="/detail/name/:name">
          <DetailByNamePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
