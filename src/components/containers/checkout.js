import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#000',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}
const buttonDisabledStyles = {
  opacity: '0.5',
  cursor: 'not-allowed',
}
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      'pk_test_51HU2SJKEotH3XLsNvnVYuOUJ6L53pDt7ohhh8RJay0QpWa8MCP0lT90pHKtBYMM9CS3MemwgIAT3q4elxY8xBpAA00v8JSxdpt',
    )
  }
  return stripePromise
}

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: 'subscription',
      lineItems: [{ price: 'price_1HVpFNKEotH3XLsNwSLuByoN', quantity: 1 }],
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `http://localhost:8000/cancel/`,
    })
    if (error) {
      console.warn('Error:', error)
      setLoading(false)
    }
  }
  return (
    <button
      type='submit'
      disabled={loading}
      style={
        loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
      }
      onClick={redirectToCheckout}
    >
      Pay for your water bill
    </button>
  )
}
export default Checkout
