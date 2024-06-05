import { useNavigate } from "react-router-dom";
import { InputBox, MainButton, SmallBtn } from "../components";

export const Signin = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const toProfile = () => {
    navigate("/menu");
  };

  return (
    <>
      <div className="p-3 w-full">
        <div className="mb-7">
          <SmallBtn onClick={handleClick} />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-5">
            <h1 className="text-5xl font-semibold">Hello Again</h1>
            <p className="text-gray-500 mt-2">Sign in to your account</p>
          </div>
          <div className="w-[325px] gap-4 flex flex-col justify-center mt-5">
            <InputBox placeholder="Enter Your Email" />
            <InputBox placeholder="Enter Your Password" />
            <p className="underline text-green-500 text-sm font-semibold">
              Forget your password?
            </p>

            <MainButton lable="Sign In" onClick={toProfile} className="mt-10" />

            <div className="flex gap-2 text-sm text-gray-400 items-center mt-3">
              <span>
                <svg
                  width="128"
                  height="2"
                  viewBox="0 0 128 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H128" stroke="#DDDDDD" stroke-dasharray="2 2" />
                </svg>
              </span>
              Or With
              <span>
                <svg
                  width="128"
                  height="2"
                  viewBox="0 0 128 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1H128" stroke="#DDDDDD" stroke-dasharray="2 2" />
                </svg>
              </span>
            </div>

            <button className="rounded-md w-[325px] h-[58px] p-2 border-2 border-gray-400 flex items-center gap-2 justify-center font-semibold">
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1229 7.86249H8.6275V9.79624H13.2387C13.005 12.495 10.7596 13.6496 8.63458 13.6496C5.92166 13.6496 3.54166 11.5104 3.54166 8.49999C3.54166 5.59582 5.80833 3.35041 8.64166 3.35041C10.8304 3.35041 12.1125 4.74582 12.1125 4.74582L13.4583 3.34332C13.4583 3.34332 11.73 1.41666 8.57083 1.41666C4.5475 1.41666 1.43791 4.81666 1.43791 8.49999C1.43791 12.0771 4.36333 15.5833 8.67708 15.5833C12.4667 15.5833 15.2292 12.9837 15.2292 9.14457C15.2292 8.32999 15.1229 7.86249 15.1229 7.86249Z"
                    fill="black"
                  />
                </svg>
              </span>
              Sign in with Google
            </button>
            <button className="rounded-md w-[325px] h-[58px] p-2 border-2 border-gray-400 flex items-center gap-2 justify-center font-semibold">
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8375 3.93125C10.2991 3.93116 9.78227 4.14242 9.3981 4.51957C9.01393 4.89672 8.79318 5.40961 8.78334 5.94787L8.7635 7.0635C8.76234 7.1234 8.74853 7.18238 8.72297 7.23656C8.69742 7.29075 8.66069 7.33892 8.61521 7.37791C8.56973 7.41691 8.51651 7.44585 8.45906 7.46283C8.40161 7.47981 8.34121 7.48446 8.28184 7.47646L7.17613 7.32629C5.72121 7.12796 4.32721 6.45787 2.98988 5.34367C2.5663 7.68825 3.39363 9.31246 5.38617 10.5655L6.62363 11.3432C6.68243 11.3802 6.73127 11.431 6.76589 11.4912C6.80052 11.5514 6.81987 11.6191 6.82224 11.6885C6.82462 11.758 6.80995 11.8269 6.77953 11.8893C6.7491 11.9517 6.70384 12.0057 6.64771 12.0466L5.52005 12.8704C6.19084 12.9122 6.82763 12.8825 7.35604 12.7776C10.698 12.1104 12.92 9.59579 12.92 5.44779C12.92 5.10921 12.2032 3.93125 10.8375 3.93125ZM7.36667 5.92167C7.37903 5.23887 7.59255 4.57489 7.98048 4.01286C8.36842 3.45084 8.91353 3.01574 9.54757 2.76205C10.1816 2.50836 10.8764 2.44735 11.5449 2.58665C12.2135 2.72596 12.8261 3.05939 13.306 3.54521C13.8097 3.54167 14.2382 3.66917 15.1966 3.08833C14.9593 4.25 14.8424 4.75433 14.3367 5.44779C14.3367 10.8609 11.0096 13.493 7.63371 14.1667C5.31888 14.6285 1.95288 13.8699 0.988129 12.8626C1.47971 12.8244 3.47721 12.6097 4.6318 11.7647C3.655 11.1208 -0.233038 8.83292 2.32192 2.68175C3.52113 4.08212 4.73734 5.03554 5.96984 5.54129C6.79009 5.87775 6.99125 5.87067 7.36738 5.92237L7.36667 5.92167Z"
                    fill="black"
                  />
                </svg>
              </span>
              Sign in with Twitter
            </button>
            <p className="text-sm text-gray-500 flex items-center justify-center">
              Don’t have account? Let’s{" "}
              <span className="underline text-green-500 font-semibold ">
                Signup
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
