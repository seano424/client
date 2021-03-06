import "./App.css";
import { Route, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";


function App() {
  return (
    <div className="App ui container">
      <Header />
      <Switch>
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/delete/:id" component={StreamDelete} />
        <Route path="/streams/:id" component={StreamShow} />
        <Route path="/" component={StreamList} />
      </Switch>
    </div>
  );
}

export default App;
