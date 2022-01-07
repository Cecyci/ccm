import React from 'react'
import { Layout, Menu } from "antd";
import  "../common/style/global.less"
import { Link } from 'react-router-dom';
import  {_ScrollToTop}  from '../utils/scrollTop';
import MyErrorBoundary from "../utils/myErrorBoundary";

import { sidebarData, groupKey } from '../router/staticRoutes';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu,Item } = Menu;
const {  Sider,Icon } = Layout;




class SiderBar extends React.Component{
  render() {
    // const SiderTree = ()=> {
    //     return (
    //         <>
    //     <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
    //     <Menu.Item key="1">option1</Menu.Item>
    //     <Menu.Item key="2">option2</Menu.Item>
    //     <Menu.Item key="3">option3</Menu.Item>
    //     <Menu.Item key="4">option4</Menu.Item>
    //   </SubMenu>
    //   <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
    //     <Menu.Item key="5">option5</Menu.Item>
    //     <Menu.Item key="6">option6</Menu.Item>
    //     <Menu.Item key="7">option7</Menu.Item>
    //     <Menu.Item key="8">option8</Menu.Item>
    //   </SubMenu>
    //   <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
    //     <Menu.Item key="9">option9</Menu.Item>
    //     <Menu.Item key="10">option10</Menu.Item>
    //     <Menu.Item key="11">option11</Menu.Item>
    //     <Menu.Item key="12">option12</Menu.Item>
    //   </SubMenu>
    //   </>
    //   )
    // }

    const SiderTree = () => {
    return (
        <>
    {sidebarData.map(item => (
    <SubMenu
        key={item.key}
        title={
            <span>
                {/* <Icon type={item.title.icon} /> */}
                <span>{item.title.text}</span>
            </span>
        }>
        {item.children &&
            item.children.map(menuItem => (
                <Item
                key={menuItem.key}
                    onClick={() => {
                         // 设置高亮的item
                        // this.setState({ selectedKeys: [menuItem.key] });
                        // 设置文档标题
                        document.title = menuItem.text;
                    }}>
                    <Link to={menuItem.path}>{menuItem.text}</Link>
                </Item>
            ))}
    </SubMenu>
        ))}
        </>
    )};
    
    return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
          <><SiderTree /></>
          
      </Menu>
    </Sider>
    )
  }
}
  


export default SiderBar

