type LogoProps = {
  size?: number
  className?: string
}

export function Logo({ size = 44, className }: LogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" fill="#1B4D3E" />
      <circle cx="32" cy="32" r="26" fill="#12352B" />
      <circle cx="32" cy="22" r="8" fill="#E8B84A" />
      <path
        d="M18 40c4-8 10-12 14-12s10 4 14 12"
        stroke="#7CB518"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M24 44c3-5 6-7 8-7s5 2 8 7"
        stroke="#A8D08D"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M28 36c1.5 4 2.5 7 4 10"
        stroke="#7CB518"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
