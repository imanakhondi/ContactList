import "./App.css";
import Layout from "./Layout/Layout";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <div className="App">
        <Routes>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
