import { MainButton } from "../components";
import { useNavigate } from "react-router-dom";

const Onboard = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/signin");
  };
  return (
    <>
      <div className="md:p-5 w-full flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full  md:w-1/2 flex justify-center items-center ">
          <img
            src="./hero-s.png"
            alt="heroimg"
            className="w-[450px] md:w-2/3 md:h-2/3 h-[432.84px]"
          />
        </div>
        <div className=" mx-auto flex flex-col items-center justify-center mt-20">
          <h1 className="text-5xl font-semibold flex flex-col  items-center justify-center leading-snug">
            Let's connect <span>with each other</span>
          </h1>
          <p className="text-gray-500  p-4 mx-5 flex flex-col items-center justify-center mb-3">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <span>adipiscing elit, sed do eiusmod</span>
          </p>
          <div className="mb-8">
            <svg
              width="67"
              height="5"
              viewBox="0 0 67 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.5 0H2.5C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5H44.5C45.8807 5 47 3.88071 47 2.5C47 1.11929 45.8807 0 44.5 0Z"
                fill="#392A4F"
              />
              <path
                opacity="0.25"
                d="M64.5 0H61.5C60.1193 0 59 1.11929 59 2.5C59 3.88071 60.1193 5 61.5 5H64.5C65.8807 5 67 3.88071 67 2.5C67 1.11929 65.8807 0 64.5 0Z"
                fill="#392A4F"
              />
              <path
                opacity="0.25"
                d="M54.5 0H51.5C50.1193 0 49 1.11929 49 2.5C49 3.88071 50.1193 5 51.5 5H54.5C55.8807 5 57 3.88071 57 2.5C57 1.11929 55.8807 0 54.5 0Z"
                fill="#392A4F"
              />
            </svg>
          </div>
          <div className="w-[325px] mb-4">
            <MainButton onClick={handleNavigate} lable="Get Started" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboard;
