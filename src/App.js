import { Route, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Redirect to="/search/" />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/search/:result">
        <SearchResult />
      </Route>
    </div>
  );
}

export default App;
