import { ProfilePic } from "./ProfilePic";

type MessageBoxProps = {
  msg: string;
  img?: string;
  send?: boolean;
};

export const MessageBox = ({
  msg,
  img = "p1.jpg",
  send = true,
}: MessageBoxProps) => {
  return (
    <>
      <div
        className={`flex gap-2 items-center p-2 ${
          send ? "" : "flex-row-reverse"
        }`}
      >
        <div
          className={`p-2  flex justify-between items-center bg-${
            send ? "white" : "green-500"
          } text-${send ? "gray-600" : "white"} ${
            send ? "rounded-l-none rounded-r-lg" : "rounded-l-lg rounded-r-none"
          } border-2 border-${send ? "bg-gray-500" : "green-500"}`}
        >
          <p>{msg}</p>
        </div>
        <div className="w-16">
          <ProfilePic img={img} />
        </div>
      </div>
    </>
  );
};
