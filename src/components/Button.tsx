import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: ReactNode
  to?: string
  variant?: 'primary' | 'ghost'
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}
export function Button({
  children,
  to,
  variant = 'primary',
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  const cls = `btn btn--${variant} ${className}`.trim()

  if (to) {
    return (
      <Link className={cls} to={to} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
