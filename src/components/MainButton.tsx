type Props = { lable: string; onClick: () => void; className?: string };

export const MainButton = ({ lable, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-green-600  text-white font-bold py-3 px-4 h-14 rounded-md ${className}`}
    >
      {lable}
    </button>
  );
};
