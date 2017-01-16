import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import { Menu, Breadcrumb, Icon } from 'antd'
import BodyLayout from './BodyLayout'
import SideMenu from './SideMenu'
const SubMenu = Menu.SubMenu

const MainLayout = ({ children, menuCollapse, onCollapseChange }) => {
  return (
    <div className={menuCollapse ? 'layout-aside layout-aside-collapse' : 'layout-aside'}>
      <SideMenu menuCollapse={menuCollapse} onCollapseChange={onCollapseChange} />
      <BodyLayout children={children} />
    </div>
  )
}

MainLayout.propTypes = {
  menuCollapse: PropTypes.bool.isRequired,
  onCollapseChange: PropTypes.func.isRequired
}

export default MainLayout
