interface SvgIconProps {
  paths: string[];
  viewBox: string;
  color: string;
  width: number;
  height: number;
  strokeWidth?: number;
}

export default function SvgIcon({ paths, viewBox, color, width, height, strokeWidth = 1.375 }: SvgIconProps) {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      {paths.map((d, i) => (
        <path key={i} d={d} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}
