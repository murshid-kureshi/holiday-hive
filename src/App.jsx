import React, { useState } from "react";

import Login from "./Login";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Properties from "./Properties";
import Contact from "./Contact";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Navbar />

          <main className="main-content">
            <section id="home">
              <Hero />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="properties">
              <Properties />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </main>

          <Footer />
        </>
      )}
    </>
  );
};

export default App;

