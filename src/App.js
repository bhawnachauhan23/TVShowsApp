import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TV Shows App</h1>
      </header>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ShowList />} />
            <Route path="/summary/:id" element={<ShowSummary />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
