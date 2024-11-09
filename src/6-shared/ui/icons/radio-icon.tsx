type RadioIconProps = {
  className?: string;
  fill?: string;
  onClick?: () => void;
  type?: 'empty' | 'fullfilled';
}

export const RadioIcon = ({ className, fill = 'var(--color-text-primary)', onClick, type = 'empty' }: RadioIconProps) => {
  const empty = <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />;

  const fullfilled = <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />;

  const radioType = {
    'empty': empty,
    'fullfilled': fullfilled,
  }

  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 512 512"}
      width="20"
      height="20"
      fill={fill}
    >
      {radioType[type]}
    </svg>
  )
}