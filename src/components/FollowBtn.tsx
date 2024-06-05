type FollowBtnProps = {
  color?: string;
};
export const FollowBtn = ({ color = "green-600" }: FollowBtnProps) => {
  return (
    <div>
      <button
        className={`rounded-full flex items-center justify-center p-3 w-[86px] h-[34px] text-${
          color === "white" ? "black" : "white"
        } bg-${color} border-[1px] border-${
          color === "white" ? "gray-400" : "green-500"
        } font-semibold`}
      >
        Following
      </button>
    </div>
  );
};
