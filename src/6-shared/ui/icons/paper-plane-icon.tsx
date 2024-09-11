type PaperPlaneIconProps = {
  className?: string;
  isDark?: boolean;
  fill?: string;
  onClick?: () => void;
}

export const PaperPlaneIcon = ({ className, isDark, fill = 'var(--color-text-dark)', onClick }: PaperPlaneIconProps) => {
  return isDark ?
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="20"
      height="20"
      fill={fill}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M231.626,128a16.015,16.015,0,0,1-8.18262,13.96094L54.53027,236.55273a15.87654,15.87654,0,0,1-18.14648-1.74023,15.87132,15.87132,0,0,1-4.74024-17.60156L60.64746,136H136a8,8,0,0,0,0-16H60.64746L31.64355,38.78906A16.00042,16.00042,0,0,1,54.5293,19.44727l168.915,94.59179A16.01613,16.01613,0,0,1,231.626,128Z"></path>
      </g>
    </svg>
    :
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="20"
      height="20"
      fill='none'
      stroke={fill}
      version="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <polygon points="1.75 1.75,14.25 7.75,1.75 14.25,3.25 7.75"></polygon>
        <line x1="3.75" y1="7.75" x2="7.25" y2="7.75"></line>
      </g>
    </svg>
}
