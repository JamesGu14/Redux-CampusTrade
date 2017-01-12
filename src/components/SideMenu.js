import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

const SideMenu = ({ menuCollapse, onCollapseChange }) => {
  return (
    <aside className="layout-sider">
      <div className="layout-logo"></div>
      <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
        <Menu.Item key="user">
          <Link to="/">
            <Icon type="user" />
            {!menuCollapse && <span className="nav-text">Dashboard</span>}
          </Link>
        </Menu.Item>
        <Menu.Item key="setting">
          <Link to="/users">
            <Icon type="setting" />
            {!menuCollapse && <span className="nav-text">Users</span>}
          </Link>
        </Menu.Item>
        <Menu.Item key="laptop">
          <Icon type="laptop" />
          {!menuCollapse && <span className="nav-text">导航三</span>}
        </Menu.Item>
        <Menu.Item key="notification">
          <Icon type="notification" />
          {!menuCollapse && <span className="nav-text">导航四</span>}
        </Menu.Item>
        <Menu.Item key="folder">
          <Icon type="folder" />
          {!menuCollapse && <span className="nav-text">导航五</span>}
        </Menu.Item>
      </Menu>
      <div className="aside-action" onClick={onCollapseChange}>
        {menuCollapse ? <Icon type="right" /> : <Icon type="left" />}
      </div>
    </aside>
  )
}

export default SideMenu
