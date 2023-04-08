import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
function App() {
  const getComponent = (component) => {
    return React.createElement(component, {});
  };
  return (
    <div className="App">
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={getComponent(route.component)}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
