import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Layout, Menu, Icon, Typography } from 'antd'

const LandingLayout = ({ children }) => {
  const [collapsed, toggle] = useState(true)
  return (
    <div className='landing-layout'>
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme='light'
        >
          <div className='h-20 m-2 flex items-center justify-around'>
            <Typography.Title
              level={4}
              className={classNames('text-primary-color', {
                hidden: collapsed,
              })}
            >
              {process.env.APP_NAME}
            </Typography.Title>
          </div>
          <Menu
            theme='light'
            mode='inline'
            defaultSelectedKeys={['1']}
            className='border-0'
          >
            <Menu.Item key='1'>
              <Icon type='user' />
              <span>Account</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <Icon type='bank' />
              <span>Make a Payment</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Icon type='bulb' />
              <span>Settings</span>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className='leading-normal ml-4 text-base'
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => toggle(!collapsed)}
            />
          </Layout.Header>
          <Layout.Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <div style={{ minHeight: '100vh' }}>{children}</div>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(LandingLayout)
