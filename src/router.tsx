import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { NewRoom } from "./pages/NewRoom/NewRoom";
import { Room } from "./pages/Room/Room";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/new" component={NewRoom} />
        <Route exact path="/rooms/:id" component={Room} />
      </Switch>
    </BrowserRouter>
  );
};
