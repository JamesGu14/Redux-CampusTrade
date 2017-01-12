import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import { Menu, Breadcrumb, Icon } from 'antd'
const SubMenu = Menu.SubMenu

const SideMenu = ({ username, menuCollapse, onCollapseChange }) => {
  return (
    <div className={menuCollapse ? 'layout-aside layout-aside-collapse' : 'layout-aside'}>
        <aside className="layout-sider">
          <div className="layout-logo"></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
            <Menu.Item key="user">
              <Icon type="user" />
              {!menuCollapse && <span className="nav-text">导航一</span>}
            </Menu.Item>
            <Menu.Item key="setting">
              <Icon type="setting" />
              {!menuCollapse && <span className="nav-text">导航二</span>}
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
        <div className="layout-main">
          <div className="layout-header"></div>
          <div className="layout-container">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>
            </Breadcrumb>
            <div className="layout-content">
              <div style={{ height: 220 }}>
                内容区域 {username}
              </div>
            </div>
          </div>
          <div className="layout-footer">
          Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
  )
}

SideMenu.propTypes = {
  menuCollapse: PropTypes.bool.isRequired,
  onCollapseChange: PropTypes.func.isRequired
}

export default SideMenu
