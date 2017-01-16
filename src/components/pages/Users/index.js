import React from 'react'
import { Breadcrumb, Icon } from 'antd'

export default ({ currentPage }) => {
  return (
    <div className="layout-container">
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>应用列表</Breadcrumb.Item>
        <Breadcrumb.Item>{currentPage}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="layout-content">
        <div style={{ height: 220 }}>
          {currentPage}
          </div>
      </div>
    </div>
  )
}
