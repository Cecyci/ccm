import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { routes as staticRoutes } from "./router";
import  {_ScrollToTop}  from './utils/scrollTop';
import MyErrorBoundary from "./utils/myErrorBoundary";
import Home from "./pages/home";
import Login from "./pages/login";
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
    <MyErrorBoundary>
    <Router basename="/dashboard">
    <ScrollToTop>
      <div>
      <Switch>
     <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/home">
          <Home/>
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
