interface Props {
  children: React.ReactNode;
  onClose: () => void;
  top?: number;
}

export default function Modal({ children, onClose, top = 0 }: Props) {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 bg-black-#333 inset-0 bg-black bg-opacity-20 flex justify-center"
    >
      <div
        className={`pt-[${top}px]`}
        style={{
          paddingTop: `${top}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
