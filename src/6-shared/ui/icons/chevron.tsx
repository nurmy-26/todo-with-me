type ChevronIconProps = {
  className?: string;
  fill?: string;
  onClick?: () => void;
  type: 'up' | 'down' | 'left' | 'right';
}

export const ChevronIcon = ({ className, fill = 'var(--color-text-dark)', onClick, type }: ChevronIconProps) => {
  const up = {
    path: <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />,
    viewBox: "0 0 512 512",
  };

  const down = {
    path: <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />,
    viewBox: "0 0 512 512",
  };

  const left = {
    path: <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />,
    viewBox: "0 0 320 512",
  };

  const right = {
    path: <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />,
    viewBox: "0 0 320 512",
  };

  const chevronType = {
    'up': up,
    'down': down,
    'left': left,
    'right': right
  }

  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={chevronType[type].viewBox}
      width="20"
      height="20"
      fill={fill}
    >
      {chevronType[type].path}
    </svg>
  )
}