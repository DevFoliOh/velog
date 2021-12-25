const IconSet = {
  heart: {
    path: 'M 18 1 l -6 4 l -6 -4 l -6 5 v 7 l 12 10 l 12 -10 v -7 Z',
  },
  arrow: {
    path: 'M 20 11 H 7.83 l 5.59 -5.59 L 12 4 l -8 8 l 8 8 l 1.41 -1.41 L 7.83 13 H 20 v -2 Z',
  },
  search: {
    path: 'M 13.66 7.36 a 6.3 6.3 0 1 1 -12.598 0 a 6.3 6.3 0 0 1 12.598 0 Z m -1.73 5.772 a 7.36 7.36 0 1 1 1.201 -1.201 l 3.636 3.635 c 0.31 0.31 0.31 0.815 0 1.126 l -0.075 0.075 a 0.796 0.796 0 0 1 -1.126 0 l -3.636 -3.635 Z',
  },
  mail: {
    path: 'M 16 16.871 L 1.019 5 H 30.98 L 16 16.871 Z m 0 3.146 L 1 8.131 V 27 h 30 V 8.131 L 16 20.017 Z',
  },
};

export default function Icon(props) {
  const { icon, width, height, fill, color } = props;

  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={IconSet[icon].path}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
