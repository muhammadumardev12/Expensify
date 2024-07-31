import * as React from 'react';
import Svg, {
    Rect,
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    ClipPath
} from 'react-native-svg';

export const AddIcon = props => {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.5}
      y={0.5}
      width={59}
      height={59}
      rx={29.5}
      stroke="url(#paint0_linear_1_2654)"
    />
    <G clipPath="url(#clip0_1_2654)">
      <Path
        d="M40.313 29.063h-9.376v-9.375a.938.938 0 00-1.875 0v9.375h-9.375a.938.938 0 000 1.875h9.375v9.375a.938.938 0 001.875 0v-9.376h9.375a.938.938 0 000-1.875z"
        fill="url(#paint1_linear_1_2654)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_1_2654"
        x1={30}
        y1={0}
        x2={30}
        y2={60}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_1_2654"
        x1={30}
        y1={18.75}
        x2={30}
        y2={41.25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <ClipPath id="clip0_1_2654">
        <Path fill="#fff" transform="translate(15 15)" d="M0 0H30V30H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  );
};
export const EditIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      {...props}
    >
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path d="M12 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <Path d="M18.375 2.625a1 1 0 013 3l-9.013 9.014a2 2 0 01-.853.505l-2.873.84a.5.5 0 01-.62-.62l.84-2.873a2 2 0 01.506-.852z" />
      </G>
    </Svg>
  );
};

export const RemoveIcon = props => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      {...props}
    >
      <G fill="#fff">
        <Path d="M8 11a1 1 0 100 2h8a1 1 0 100-2z" />
        <Path
          fillRule="evenodd"
          d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 11-18 0 9 9 0 0118 0"
          clipRule="evenodd"
        />
      </G>
    </Svg>
  );
};
export const SearchIcon = props => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
      height={props.height}
    viewBox="0 0 32 32"
    {...props}
  >
    <Path d="M11.63 8h7.38v2h-7.38z" className="ouiIcon__fillSecondary" />
    <Path d="M7 8h3.19v2H7z" />
    <Path d="M7 16h7.38v2H7z" className="ouiIcon__fillSecondary" />
    <Path d="M15.81 16H19v2h-3.19zM7 12h9v2H7z" />
    <Path d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13A13 13 0 0013 0m0 24C6.925 24 2 19.075 2 13S6.925 2 13 2s11 4.925 11 11-4.925 11-11 11m9.581-.007l1.414-1.414 7.708 7.708-1.414 1.414z" />
  </Svg>
  );
};