import React from "react";
import FullComponent from './components/full/full.component';
import ListComponent from './components/list/list.component';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

export default function Routing() {
  return (
    <BrowserRouter>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/" children={<ListComponent />} />
          <Route path="/:id" children={<FullComponent />} />
        </Switch>
    </BrowserRouter>
  );
}
