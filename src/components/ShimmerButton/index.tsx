import React, {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  forwardRef,
} from 'react'
import './index.scss'

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<'button'> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

export const ShimmerButton = forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#ffffff',
      shimmerSize = '0.1em',
      shimmerDuration = '3s',
      borderRadius = '100px',
      background = 'rgba(0, 0, 0, 1)',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const customStyles = {
      '--spread': '90deg',
      '--shimmer-color': shimmerColor,
      '--radius': borderRadius,
      '--speed': shimmerDuration,
      '--cut': shimmerSize,
      '--bg': background,
    } as CSSProperties

    return (
      <button
        ref={ref}
        className={`shimmer-button ${className || ''}`}
        style={customStyles}
        {...props}
      >
        {/* spark container */}
        <div className="spark-container">
          {/* spark */}
          <div className="spark">
            {/* spark before */}
            <div className="spark-before" />
          </div>
        </div>

        {children}

        {/* Highlight */}
        <div className="highlight" />

        {/* backdrop */}
        <div className="backdrop" />
      </button>
    )
  },
)

ShimmerButton.displayName = 'ShimmerButton'
