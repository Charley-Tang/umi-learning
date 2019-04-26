import React, { PureComponent } from "react";
import { Layout, Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Sider } = Layout;
import Link from "umi/link";

import "./style.less";

export default class AppFrame extends PureComponent {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout className="app-layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          {!this.state.collapsed ? (
            <div className="logo">umiJS learning</div>
          ) : (
            <div className="_logo" />
          )}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <SubMenu
              key="basic"
              title={
                <span>
                  <Icon type="pie-chart" />
                  <span>folder</span>
                </span>
              }
            >
              <Menu.Item key="todoList">
                <Link to={"/"}>
                  <Icon type="home" />
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="other">
                <Link to={"/todoList"}>
                  <Icon type="table" />
                  <span>TodoList</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          {this.props.children}
        </Layout>
      </Layout>
    );
  }
}
