export type Point = [number, number];

export const starList: Point[] = [[30,30],[85,115],[330,45],[365,150],[250,25],[55,215],[305,235],[175,65],[120,20],[390,90],[20,150],[225,120],[340,200],[150,160]];

export const Stars = ({ list, dy = 0 }: { list: Point[]; dy?: number }) => (
  <g transform={"translate(0 " + dy + ")"}>
    {list.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 3 ? 1.4 : 2.2} fill="#fff" opacity={i % 2 ? .6 : .95} />)}
  </g>
);
