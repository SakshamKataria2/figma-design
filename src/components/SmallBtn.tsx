type Props = { onClick: () => void };

export const SmallBtn = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="w-45 h-45 bg-green-500  text-white font-bold py-3 px-4 h-14 rounded-md"
    >
      <svg
        width="20"
        height="10"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5H19M5 9L1 5L5 9ZM1 5L5 1L1 5Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};
