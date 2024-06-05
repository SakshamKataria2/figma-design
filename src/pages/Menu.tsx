import { useNavigate } from "react-router-dom";
import { MenuBars, MenuBox, UserName, UserNameBtn } from "../components";

const Menu = () => {
  const navigate = useNavigate();

  const profileHandler = () => {
    navigate("/profile");
  };
  const notificationHandler = () => {
    navigate("/notification");
  };
  const friendsHandler = () => {
    navigate("/friends");
  };
  const messagesHandler = () => {
    navigate("/messages");
  };

  const logoutHandler = () => {
    navigate("/signin");
  };
  return (
    <>
      <div className="flex flex-col items-stretch ">
        <div className=" p-5 flex items-center  justify-between   ">
          <UserName />
          <UserNameBtn onClick={profileHandler} />
        </div>
        <div className="bg-gray-300 h-[1px] w-full"></div>
        <div className="p-5 flex justify-center items-center mt-10 gap-2">
          <MenuBox title="572" subtitle="Posts" />
          <MenuBox title="6.3k" subtitle="Followers" />
          <MenuBox title="2.5k" subtitle="Following" />
        </div>
        <div className="flex flex-col p-5 md:p-10 gap-8 mt-10">
          <MenuBars
            onClick={notificationHandler}
            title="Notification"
            subtitle="See your recent activity"
            number={35}
          />
          <MenuBars
            onClick={friendsHandler}
            title="Friends"
            subtitle="Friendlist totals"
          />
          <MenuBars
            onClick={messagesHandler}
            title="Messages"
            subtitle="Message your friends"
            number={12}
          />
          <MenuBars title="Albums" subtitle="Save or post your albums" />
          <MenuBars title="Favorites" subtitle="Friends you love" />
        </div>
        <div className="bg-gray-300 h-[1px] w-full mb-3 mt-5"></div>

        <div className=" flex flex-col gap-5 p-5 items-start md:items-center md:p-10">
          <MenuBars title="Privacy Policy" subtitle="Protect your privacy" />

          <button
            onClick={logoutHandler}
            className={` w-full md:w-1/4 bg-green-100  text-green-800 border-2 border-green-400 font-bold py-3 px-4 h-14 rounded-md`}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
