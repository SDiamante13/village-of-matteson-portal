import React, { useEffect, useState } from 'react'
import { Typography } from 'antd'
import getUserInfoById from '../../api/getUserInfoById'
import Address from '../address'

const UserInfoContainer = () => {
  const containerStyle = {
    marginTop: '50px',
  }

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
    },
  })

  useEffect(() => {
    getUserInfoById('277957026136457747').then(r => setUserInfo(r.data))
  }, [])

  return (
    <div style={containerStyle}>
      <Typography.Title level={4} className='text-black-600'>
        Full Name
      </Typography.Title>
      {userInfo.firstName} {userInfo.lastName}
      <Typography.Title level={4} className='text-black-600'>
        Service Address
      </Typography.Title>
      <Address
        streetAddress={userInfo.address.street}
        city={userInfo.address.city}
        state={userInfo.address.state}
        zipCode={userInfo.address.zipCode}
      />
    </div>
  )
}

export default UserInfoContainer
