import { ProfilePic } from "./ProfilePic";

type propsType = {
  name: string;
  img: string;
  msg: string;
  time: string;
};

export const NotificationBox = ({ name, img, msg, time }: propsType) => {
  return (
    <>
      <div className="p-3 flex items-center gap-3 shadow-lg border-t-2 border-slate-100 shadow-slate-200">
        <div className="w-16">
          <ProfilePic img={img} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-medium">{name}</h1>
          <p className="text-base text-gray-400">{time} ago</p>
        </div>
        <p className=" text-base mb-6 text-gray-500">{msg}</p>
      </div>
    </>
  );
};
