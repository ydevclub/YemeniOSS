import React from 'react'

export default function SmallBox({ children, active, style, ...props }) {
  return (
    <div {...props} style={{ border: '1px solid #e8b718', backgroundColor: active && "#e8b718", marginInlineEnd: 5, marginBlockEnd: 5, padding: '0 5px', ...style }}>
      {children}
    </div>
  )
}
