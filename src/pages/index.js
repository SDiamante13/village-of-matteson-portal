import React from 'react'
import { Typography } from 'antd'
import LandingLayout from '@layouts/LandingLayout'
import Checkout from '../components/containers/checkout'
import UserInfoContainer from '../components/containers/UserInfoContainer'

export default () => (
  <LandingLayout>
    <div className='flex flex-col items-center'>
      <Typography.Title className='text-primary-color'>
        Village Of Matteson
      </Typography.Title>
      <Typography.Title level={4} className='text-gray-600'>
        Water Billing
      </Typography.Title>
      <img src='/matteson.png' alt='logo' className='mt-10' />
      <Checkout />
      <UserInfoContainer />
    </div>
  </LandingLayout>
)
