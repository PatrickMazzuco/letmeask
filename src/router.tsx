import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { NewRoom } from "./pages/NewRoom/NewRoom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/new" component={NewRoom} />
      </Switch>
    </BrowserRouter>
  );
};
