type UserNameBtnProps = {
  onClick?: () => void;
};
export const UserNameBtn = ({ onClick }: UserNameBtnProps) => {
  return (
    <>
      <div>
        <button
          onClick={onClick}
          className="text-gray-500 rounded-[100%] p-5 border-2 border-gray-300"
        >
          <img src="gt.svg" alt="arrow" className="w-3" />
        </button>
      </div>
    </>
  );
};
