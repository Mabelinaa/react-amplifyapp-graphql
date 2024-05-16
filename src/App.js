import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import {Routes, Route, BrowserRouter } from "react-router-dom";


import Dashboard from './pages/Dashboard';
import List from './pages/List';
import Settings from './pages/Settings';


const App = ({ signOut }) => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" signOut={signOut} element={<Dashboard />}></Route>
          <Route path="/list" signOut={signOut} element={<List />}></Route>
          <Route path="/settings" signOut={signOut} element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default withAuthenticator(App);
