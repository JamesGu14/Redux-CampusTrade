import React from 'react'
import { Breadcrumb, Icon } from 'antd'

export default () => {
  return (
    <div className="layout-container">
      <Breadcrumb>
        <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>应用列表</Breadcrumb.Item>
        <Breadcrumb.Item>某应用</Breadcrumb.Item>
      </Breadcrumb>
      <div className="layout-content">
        <div style={{ height: 220 }}>
          内容区域
          </div>
      </div>
    </div>
  )
}



