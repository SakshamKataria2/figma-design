type MenuBoxProps = {
  title: string;
  subtitle: string;
};

function MenuBox({ title, subtitle }: MenuBoxProps) {
  return (
    <>
      <div className="w-44 h-44 flex flex-col items-center justify-center border-2 border-gray-200 rounded-lg p-5 ">
        <h1 className="text-3xl font-medium">{title}</h1>{" "}
        <p className=" text-lg text-gray-500">{subtitle}</p>
      </div>
    </>
  );
}

export { MenuBox };
