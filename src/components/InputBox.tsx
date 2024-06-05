type InputBoxProps = {
  placeholder: string;
};
export const InputBox = ({ placeholder }: InputBoxProps) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-md h-[73px] focus:text-black text-gray-500 w-full border-2 border-gray-200 p-2  focus:outline-none focus:border-green-600 focus:placeholder-green-600"
      />
    </div>
  );
};
