import React from 'react'

// eslint-disable-next-line react/prop-types
const Address = ({ streetAddress, city, state, zipCode }) => {
  return (
    <div>
      {streetAddress} {city} {state} {zipCode}
    </div>
  )
}

export default Address
