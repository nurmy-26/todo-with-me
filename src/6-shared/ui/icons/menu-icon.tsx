type MenuIconProps = {
  className?: string;
  fill?: string;
  onClick?: () => void;
  type?: 'ellipsis-vertical' | 'ellipsis' | 'bars' | 'circle-chevron-down' | 'square-caret-down' |
  'caret-up' | 'caret-down' | 'caret-left' | 'caret-right';
}

export const MenuIcon = ({ className, fill = 'var(--color-text-dark)', onClick, type = 'ellipsis-vertical' }: MenuIconProps) => {
  const ellipsisVertical = {
    path: <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />,
    viewBox: "0 0 128 512",
  };

  const ellipsis = {
    path: <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />,
    viewBox: "0 0 448 512",
  };

  const bars = {
    path: <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />,
    viewBox: "0 0 448 512",
  };

  const circleChevronDown = {
    path: <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z" />,
    viewBox: "0 0 512 512",
  };

  const circleCaretDown = {
    path: <path d="M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z" />,
    viewBox: "0 0 448 512",
  };

  const caretUp = {
    path: <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />,
    viewBox: "0 0 320 512",
  };

  const caretDown = {
    path: <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />,
    viewBox: "0 0 320 512",
  };

  const caretLeft = {
    path: <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />,
    viewBox: "0 0 256 512",
  };

  const caretRight = {
    path: <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />,
    viewBox: "0 0 256 512",
  };

  const menuType = {
    'ellipsis-vertical': ellipsisVertical,
    'ellipsis': ellipsis,
    'bars': bars,
    'circle-chevron-down': circleChevronDown,
    'square-caret-down': circleCaretDown,
    'caret-up': caretUp,
    'caret-down': caretDown,
    'caret-left': caretLeft,
    'caret-right': caretRight,
  }

  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={menuType[type].viewBox}
      width="20"
      height="16"
      fill={fill}
    >
      {menuType[type].path}
    </svg>
  )
}