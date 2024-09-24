interface Props {
  children: React.ReactNode;
  width: number;
}

export default function Toast({ children, width }: Props) {
  return (
    <div
      style={{ width: `${width}px` }}
      className="toast absolute flex justify-center z-50 px-3 py-2 rounded-[7px] bg-black-#4242 top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2"
    >
      {children}
    </div>
  );
}
