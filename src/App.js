import Login from './pages/login'
import Home from './pages/home'
import { HashRouter, Routes, Route, Link, BrowserRouter, NavLink, Router } from 'react-router-dom'
import Value from './pages/value';
import routes from './routes'
function App() {
  return (
    // <Fragment>
    //   <HashRouter>
    //     <Routes>
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route exact path="/" element={<Home />} />
    //     </Routes>
    //   </HashRouter>
    // </Fragment>

    // <BrowserRouter>
    /* <h1>Nav</h1>
    <nav>
      <NavLink to="/login" style={({ isActive }) => {
        return {
          display: "block",
          margin: "1rem 0",
          color: isActive ? "red" : ""
        };
      }}>login</NavLink>
      <NavLink to="/home" style={({ isActive }) => {
        return {
          display: "block",
          margin: "1rem 0",
          color: isActive ? "red" : ""
        };
      }}>home</NavLink>
    </nav> */

    /* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} >
        <Route path=":value" element={<Value />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route
        path="*"
        element={
          <p>nothing!!!</p>
        }>
      </Route>
    </Routes>
  </BrowserRouter > */

    <BrowserRouter>
      <Routes>
        {routes.map(({ path, name, component }) =>
          <Route path={path} key={name} element={component} />
        )}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
