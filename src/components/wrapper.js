import React from 'react'

export default function Wrapper({ children }) {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1060,
      }}
    >
      {children}
    </div>
  )
}
