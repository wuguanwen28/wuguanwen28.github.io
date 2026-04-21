import React from 'react'
import './index.scss'

interface RainbowButtonProps {
  className?: string
  as?: React.ElementType
  speed?: number
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const RainbowButton: React.FC<
  RainbowButtonProps & React.HTMLAttributes<HTMLElement>
> = ({
  className,
  as: Component = 'button',
  speed = 2,
  children,
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  return (
    <Component
      className={`rainbow-button ${className || ''}`}
      style={{ '--speed': `${speed}s` } as React.CSSProperties}
      onClick={onClick}
      disabled={disabled}
      type={Component === 'button' ? type : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}
