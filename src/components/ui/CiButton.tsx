import React from 'react'

type ButtonProps = { children: React.ReactNode; className?: string }
export const CiButton = ({ children, className }: ButtonProps) => {
  return (
    <div>
      <button className={'ci-button ' + className}>{children}</button>
    </div>
  )
}
