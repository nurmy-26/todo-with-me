type CheckIconProps = {
  className?: string;
  fill?: string;
  onClick?: () => void;
  type?: 'white-circle' | 'black-circle' | 'white-rectangle' | 'black-rectangle' | 'empty-white' | 'empty-black';
}

export const CheckIcon = ({ className, fill = 'var(--color-text-dark)', onClick, type = 'empty-white' }: CheckIconProps) => {
  const whiteCircle = {
    path: <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />,
    viewBox: "0 0 512 512",
  };

  const blackCircle = {
    path: <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />,
    viewBox: "0 0 512 512",
  };

  const whiteRectangle = {
    path: <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />,
    viewBox: "0 0 448 512"
  };

  const blackRectangle = {
    path: <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />,
    viewBox: "0 0 448 512"
  };

  const emptyWhite = {
    path: <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />,
    viewBox: "0 0 448 512"
  };

  const emptyBlack = {
    path: <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />,
    viewBox: "0 0 448 512"
  };

  const xmarkType = {
    'white-circle': whiteCircle,
    'black-circle': blackCircle,
    'white-rectangle': whiteRectangle,
    'black-rectangle': blackRectangle,
    'empty-white': emptyWhite,
    'empty-black': emptyBlack,
  }

  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={xmarkType[type].viewBox}
      width="20"
      height="20"
      fill={fill}
    >
      {xmarkType[type].path}
    </svg>
  )
}