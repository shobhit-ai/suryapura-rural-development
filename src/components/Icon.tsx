type IconName = 'education' | 'farmers' | 'roads' | 'panchayat'

type IconProps = {
  name: IconName
  size?: number
}

export function Icon({ name, size = 24 }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  switch (name) {
    case 'education':
      return (
        <svg {...common}>
          <path d="M2 9l10-5 10 5-10 5L2 9z" />
          <path d="M6 11.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-4.5" />
          <path d="M22 9v6" />
        </svg>
      )
    case 'farmers':
      return (
        <svg {...common}>
          <path d="M12 3v6" />
          <path d="M8 7c2 2 4 2 8 0" />
          <path d="M7 21c1-4 3-7 5-7s4 3 5 7" />
          <path d="M4 21h16" />
        </svg>
      )
    case 'roads':
      return (
        <svg {...common}>
          <path d="M9 3l-4 18" />
          <path d="M15 3l4 18" />
          <path d="M12 7v2" />
          <path d="M12 13v2" />
          <path d="M12 19v1" />
        </svg>
      )
    case 'panchayat':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="15" cy="8" r="2.5" />
          <circle cx="12" cy="14" r="2.5" />
          <path d="M4 20c1-3 3-4.5 5-4.5" />
          <path d="M20 20c-1-3-3-4.5-5-4.5" />
          <path d="M8.5 20c1-2 2.5-3 3.5-3s2.5 1 3.5 3" />
        </svg>
      )
  }
}
