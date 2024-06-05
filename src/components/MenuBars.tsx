import { UserNameBtn } from "./UserNameBtn";

type MenuBarsProps = {
  title: string;
  subtitle: string;
  number?: number;
  onClick?: () => void;
};

export const MenuBars = ({
  title,
  subtitle,
  number,
  onClick,
}: MenuBarsProps) => {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className=" text-gray-400">{subtitle}</p>
      </div>
      <div className="flex items-center gap-5">
        {number && (
          <button className="bg-green-400 rounded-[100%]  text-white p-3 ">
            {number}
          </button>
        )}
        <UserNameBtn onClick={onClick} />
      </div>
    </div>
  );
};
