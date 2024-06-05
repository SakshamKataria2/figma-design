type ProfilePicProps = { img: string; width?: string };

export const ProfilePic = ({ img, width = "" }: ProfilePicProps) => {
  return (
    <div
      className={`p-1 flex items-center justify-center rounded-[100%] border-2 border-green-500 w-[${width}]`}
    >
      <img src={img} alt="profile pic" className="rounded-[100%] p-[1.5px] " />
    </div>
  );
};
