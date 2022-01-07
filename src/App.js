import Login from './pages/login'
import Home from './pages/home'
import Value from './pages/value';
import routes from './routes'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { routes as staticRoutes } from "./router";
import { _ScrollToTop } from './utils/scrollTop';
import MyErrorBoundary from "./utils/myErrorBoundary";

// ErrorBoundary在组件树及其子树的渲染 生命周期 constructors捕捉错误
const lazy = (componentPath, props) => {
  const AsyncPage = staticRoutes.find(ele => ele.path === componentPath)?.component;

  if (AsyncPage) {
    return () => (
      <MyErrorBoundary >
        <AsyncPage {...props} />
      </MyErrorBoundary>
    );
  } else {
    // 404提示页
    return () => (
      <MyErrorBoundary>
        {/* <NotFoundPage /> */}
      </MyErrorBoundary>
    );
  }
};

function App() {

  const ScrollToTop = withRouter(_ScrollToTop);
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

    // <BrowserRouter>
    //   <Routes>
    //     {routes.map(({ path, name, component }) =>
    //       <Route path={path} key={name} element={component} />
    //     )}
    //   </Routes>
    // </BrowserRouter>

    <MyErrorBoundary>
      <Router basename="/dashboard">
        <ScrollToTop>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              {/* {staticRoutes.map(item => {
              return (
                <Route
                  key={item.path}
                  exact
                  path={item.path}
                  // component={item.component}
                  component={lazy(item.path)}
                />
              );
            })} */}
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    </MyErrorBoundary>
  );
}

export default App;
