type SunIconProps = {
  className?: string;
  isDark?: boolean;
  fill?: string;
  onClick?: () => void;
}

export const SunIcon = ({ className, isDark, fill, onClick }: SunIconProps) => {

  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill={fill || (isDark ? 'var(--color-text-dark)' : 'var(--color-light)')}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <circle cx="12" cy="12" r="5" stroke="#323232" strokeWidth="1.5"></circle>
        <path d="M12 2V4" stroke="#323232" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M12 20V22" stroke="#323232" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M4 12L2 12" stroke="#323232" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M22 12L20 12" stroke="#323232" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#323232" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#323232" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#323232" strokeWidth="1.5" strokeLinecap="round"></path>
        <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#323232" strokeWidth="1.5" strokeLinecap="round"></path>
      </g>
    </svg>
  )
};