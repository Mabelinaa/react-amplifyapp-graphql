import React from "react";
import { withAuthenticator, ToggleButton } from "@aws-amplify/ui-react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav";

const App = ({ signOut }) => {

  return (
    <div className="wrapper">
      <Header/>
      <Home/>
      <SideNav/>
      <Footer/>
      <ToggleButton onClick={signOut}>Cerrar Sesión</ToggleButton>
    </div>
  );
};

export default withAuthenticator(App);
