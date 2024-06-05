import { useNavigate } from "react-router-dom";
import { FollowBtn, SmallBtn, UserName } from "../components";

function Friends() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <>
      <div>
        <div className="p-5 flex items-center gap-5">
          <SmallBtn onClick={handleClick} />
          <h1 className="text-2xl font-semibold">Followers (4K)</h1>
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="border-t-2 border-gray-200">
            <div className=" p-7 flex items-center justify-between">
              <UserName img="p3.jpg" name="RDJ" username="@stark.tony" />
              <FollowBtn />
            </div>
          </div>
          <div className="border-t-2 border-gray-200">
            <div className="p-7 flex items-center justify-between">
              <UserName
                img="p4.png"
                name="Kate Winslet"
                username="@katesinking.ship"
              />
              <FollowBtn color="white" />
            </div>
          </div>

          <div className="border-t-2 border-gray-200">
            <div className="p-7 flex items-center justify-between">
              <UserName img="p5.jpg" name="Devid Backham" username="@devid7" />
              <FollowBtn color="white" />
            </div>
          </div>
          <div className="border-t-2 border-gray-200">
            <div className="p-7 flex items-center justify-between">
              <UserName
                img="p6.jpg"
                name="Jenefer Lopez"
                username="@jennyfromtheblock"
              />
              <FollowBtn color="white" />
            </div>
          </div>
          <div className="border-t-2 border-gray-200">
            <div className="p-7 flex items-center justify-between">
              <UserName img="gray.svg" name="James" username="@jamessmith" />
              <FollowBtn color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Friends };
