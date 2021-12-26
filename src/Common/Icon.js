const IconSet = {
  heart: {
    path: 'M 18 1 l -6 4 l -6 -4 l -6 5 v 7 l 12 10 l 12 -10 v -7 Z',
  },
  trend: {
    path: 'M 16 6 l 2.29 2.29 l -4.88 4.88 l -4 -4 L 2 16.59 L 3.41 18 l 6 -6 l 4 4 l 6.3 -6.29 L 22 12 V 6 Z',
  },
  recent: {
    path: 'M 11.99 2 C 6.47 2 2 6.48 2 12 s 4.47 10 9.99 10 C 17.52 22 22 17.52 22 12 S 17.52 2 11.99 2 Z M 12 20 c -4.42 0 -8 -3.58 -8 -8 s 3.58 -8 8 -8 s 8 3.58 8 8 s -3.58 8 -8 8 Z m 0.5 -13 H 11 v 6 l 5.25 3.15 l 0.75 -1.23 l -4.5 -2.67 Z',
  },
  exitArrow: {
    path: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
  },
  search: {
    path: 'M 13.66 7.36 a 6.3 6.3 0 1 1 -12.598 0 a 6.3 6.3 0 0 1 12.598 0 Z m -1.73 5.772 a 7.36 7.36 0 1 1 1.201 -1.201 l 3.636 3.635 c 0.31 0.31 0.31 0.815 0 1.126 l -0.075 0.075 a 0.796 0.796 0 0 1 -1.126 0 l -3.636 -3.635 Z',
  },
  mail: {
    path: 'M 16 16.871 L 1.019 5 H 30.98 L 16 16.871 Z m 0 3.146 L 1 8.131 V 27 h 30 V 8.131 L 16 20.017 Z',
  },
};

export default function Icon(props) {
  const { icon, width, height, viewBox, fill, color } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
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
