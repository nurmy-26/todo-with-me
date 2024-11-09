type SortIconProps = {
  className?: string;
  fill?: string;
  onClick?: () => void;
  type?: 'asc' | 'desc' | 'arrow-asc' | 'arrow-desc' | 'abc' | 'check' | 'calendar';
}

export const SortIcon = ({ className, fill = 'var(--color-text-primary)', onClick, type = 'asc' }: SortIconProps) => {
  // от меньшего к большему (по возрастанию)
  const asc = {
    path: <>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fillRule="evenodd" clipRule="evenodd" d="M3 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM3 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"></path>
      </g>
    </>,
    viewBox: "0 0 24 24"
  };

  // от большего к меньшему (по убыванию)
  const desc = {
    path: <>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fillRule="evenodd" clipRule="evenodd" d="M3 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM3 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"></path>
      </g>
    </>,
    viewBox: "0 0 24 24"
  };

  // от меньшего к большему (по возрастанию)
  const arrowAsc = {
    path: <path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-301.7 32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />,
    viewBox: "0 0 576 512"
  };

  // от большего к меньшему (по убыванию)
  const arrowDesc = {
    path: <path d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z" />,
    viewBox: "0 0 576 512"
  };

  // для текста
  const abc = {
    path: <>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M25,12H20v2h5a1.0008,1.0008,0,0,1,1,1v2H22a3.0033,3.0033,0,0,0-3,3v1a3.0033,3.0033,0,0,0,3,3h6V15A3.0033,3.0033,0,0,0,25,12ZM22,22a1.0008,1.0008,0,0,1-1-1V20a1.0008,1.0008,0,0,1,1-1h4v3Z"></path>
        <path d="M16,24h2L12,7H10L4,24H6l1.6936-5h6.6135ZM8.3711,17l2.4966-7.3711.2668.0005L13.63,17Z"></path>
      </g>
    </>,
    viewBox: "0 0 32 32"
  }

  // для пунктов списка
  const check = {
    path: <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />,
    viewBox: "0 0 448 512"
  }

  // для дат
  const calendar = {
    path: <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />,
    viewBox: "0 0 448 512"
  }

  const sortType = {
    'asc': asc,
    'desc': desc,
    'arrow-asc': arrowAsc,
    'arrow-desc': arrowDesc,
    'abc': abc,
    'check': check,
    'calendar': calendar
  }


  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      transform={type === 'asc' ? "matrix(1, 0, 0, -1, 0, 0)" : ""}
      viewBox={sortType[type].viewBox}
      width="1.5rem"
      height="1.5rem"
      fill={fill}
    >
      {sortType[type].path}
    </svg>
  )
}

