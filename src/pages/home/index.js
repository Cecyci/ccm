import React from 'react'
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import  "../../common/style/global.less"
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { routes as staticRoutes } from "../../router";
import  {_ScrollToTop}  from '../../utils/scrollTop';
import MyErrorBoundary from "../../utils/myErrorBoundary";
import SiderBar from "../../components/SiderBar"

import { sidebarData, groupKey } from '../../router/staticRoutes';

const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
class Home extends React.Component{
  switchMenu = (url) => {
    window.history.push(url)
  };
  render() {
    return (

  <Layout>
  <Header className="header">
    <div className="logo" />
    <Menu theme="dark"  mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </Header>
  <Layout>
    <SiderBar/>
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
            <MyErrorBoundary>
        <Router basename="/dashboard">
       
          <div>
          <Switch>
            {staticRoutes.map(item => {
                  return (
                    <Route
                      key={item.path}
                      exact
                      path={item.path}
                      // component={item.component}
                      component={item.component}
                    />
                  );
                })}
            </Switch>
            </div>
          </Router>
          </MyErrorBoundary>
      </Content>
    </Layout>
  </Layout>
</Layout>
    )
  }
}
  


export default Home

