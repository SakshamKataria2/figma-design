import { ProfilePic } from "../components";

type UserNameProps = {
  img?: string;
  name?: string;
  username?: string;
};

export const UserName = ({
  img = "p1.jpg",
  name = "Morsalin Nur",
  username = "@morsalin.nur",
}: UserNameProps) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="w-20">
          <ProfilePic img={img} />
        </div>
        <div className="flex flex-col items-start gap-0">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-500">{username}</p>
        </div>
      </div>
    </>
  );
};
