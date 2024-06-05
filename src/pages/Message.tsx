import { useNavigate } from "react-router-dom";
import { InputBox, MessageBox, SmallBtn } from "../components";

const Message = () => {
  const navigate = useNavigate();
  const btnHandler = () => {
    navigate("/menu");
  };
  return (
    <>
      <div className="w-full">
        <div className="w-full shadow-sm shadow-gray-200">
          <div className="p-5 flex items-center justify-between">
            <SmallBtn onClick={btnHandler} />
            <div className="flex flex-col gap-1">
              <h1 className="flex items-center gap-2">
                <span className="bg-green-700 h-3 w-3 rounded-[100%]"></span>
                @tomCruise
              </h1>{" "}
              <p className="text-gray-400">Last active: 10sec ago</p>
            </div>
            <div>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z"
                  fill="#E8FDED"
                />
                <path
                  d="M24.481 30.131C21.796 30.131 18.638 28.706 15.981 26.055C11.748 21.822 10.648 16.296 13.469 13.474C14.2812 12.6523 15.3422 12.1221 16.487 11.966L17.163 11.866L19.648 17.67L17.163 18.913C17.8583 20.1581 18.7345 21.2931 19.763 22.281C20.7509 23.2961 21.879 24.1645 23.113 24.86L24.282 22.571L30.049 23.395L30.083 24.131C30.1596 24.937 30.0638 25.7501 29.8021 26.5163C29.5404 27.2825 29.1187 27.9843 28.565 28.575C28.0226 29.0939 27.3818 29.4988 26.6804 29.7661C25.979 30.0333 25.2311 30.1574 24.481 30.131ZM16.09 13.882C15.5752 14.0554 15.1084 14.3472 14.727 14.734C12.681 16.779 13.834 21.388 17.243 24.797C20.652 28.206 25.261 29.357 27.307 27.313C27.9105 26.6656 28.2609 25.8225 28.294 24.938L25.294 24.51L24.725 25.66C24.6194 25.8738 24.4715 26.0638 24.2901 26.2186C24.1087 26.3733 23.8977 26.4895 23.67 26.56C23.4378 26.632 23.1936 26.6566 22.9518 26.6326C22.71 26.6086 22.4754 26.5363 22.262 26.42C20.8772 25.6445 19.6107 24.6746 18.501 23.54C17.3518 22.4292 16.372 21.1556 15.593 19.76C15.4808 19.5494 15.4119 19.3186 15.3902 19.081C15.3686 18.8434 15.3947 18.6039 15.467 18.3765C15.5393 18.1492 15.6563 17.9386 15.8112 17.7571C15.9661 17.5757 16.1558 17.4271 16.369 17.32L17.348 16.829L16.09 13.882Z"
                  fill="url(#paint0_linear_1_310)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_310"
                    x1="21.0083"
                    y1="11.866"
                    x2="21.0083"
                    y2="30.1345"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4DD969" />
                    <stop offset="1" stop-color="#28CD56" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full shadow-sm shadow-gray-200 bg-gray-100 ">
          <div className="flex flex-col gap-3 p-7 ">
            <MessageBox msg="Hey, how are you?" img="p-7.jpg" send={false} />
            <MessageBox msg="Hey, I am fine" img="p3.jpg" send={true} />
            <MessageBox
              msg="Its great, UK is awesome, espesially London. New job is good so far! How about you?"
              img="p3.jpg"
              send={true}
            />
            <MessageBox
              msg="I’m fine, i’m thinking about new project. I want to open an online store"
              img="p-7.jpg"
              send={false}
            />
            <MessageBox
              msg="But  I don’t know what to sell. Maybe I will sell stones and water"
              img="p-7.jpg"
              send={false}
            />
            <MessageBox
              msg="Yeah it’s great idea, you know - everyone needs water, I dont know about stones xD"
              img="p3.jpg"
              send={true}
            />
          </div>
        </div>
        <div className="p-5 flex  items-center w-ful justify-between">
          <InputBox placeholder="say something" />
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_258)">
              <path
                d="M62 30C62 15.6406 50.3594 4 36 4C21.6406 4 10 15.6406 10 30C10 44.3594 21.6406 56 36 56C50.3594 56 62 44.3594 62 30Z"
                fill="url(#paint0_linear_1_258)"
              />
            </g>
            <path
              d="M43.2179 22.4276L25.3753 27.1029C24.8943 27.2297 24.4607 27.4938 24.1274 27.8631C23.7941 28.2323 23.5756 28.6907 23.4985 29.1821C23.4111 29.6575 23.4673 30.1483 23.6599 30.5916C23.8525 31.035 24.1729 31.411 24.5801 31.6715L29.9576 35.1215C29.9842 35.1644 30.0147 35.2047 30.0485 35.2422C30.0751 35.285 30.1056 35.3254 30.1394 35.3628L31.9714 41.4817C32.1096 41.9449 32.3826 42.3565 32.7557 42.6639C33.1287 42.9714 33.5849 43.1607 34.066 43.2077C34.7165 43.2926 35.3747 43.1237 35.904 42.7361C36.1781 42.5293 36.4087 42.2705 36.5826 41.9743L45.9955 26.1142C46.2546 25.6899 46.3802 25.1975 46.356 24.7009C46.3317 24.2043 46.1588 23.7265 45.8596 23.3294C45.5605 22.9323 45.1488 22.6343 44.6782 22.4741C44.2075 22.3139 43.6996 22.2988 43.2203 22.4308L43.2179 22.4276ZM25.0396 29.4502C25.0765 29.1946 25.2126 28.9637 25.4185 28.8077C25.5251 28.7276 25.6467 28.6697 25.7761 28.6373L43.6362 23.9487L43.7282 23.9395L30.7532 33.7154L25.4296 30.3237C25.2835 30.2351 25.1679 30.104 25.0982 29.9479C25.0285 29.7918 25.008 29.6182 25.0396 29.4502ZM35.2178 41.1688C35.1204 41.3382 34.9748 41.4747 34.7994 41.5609C34.624 41.6471 34.4269 41.679 34.2333 41.6525C34.0625 41.6367 33.9006 41.569 33.7695 41.4585C33.6383 41.348 33.544 41.1999 33.4994 41.0343L31.7074 34.9818L44.684 25.2047L44.6434 25.2954L35.2178 41.1688Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_d_1_258"
                x="0"
                y="0"
                width="72"
                height="72"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.513726 0 0 0 0 0.247059 0 0 0 0.302 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_258"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_258"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_1_258"
                x1="36"
                y1="4"
                x2="36"
                y2="56"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4DD969" />
                <stop offset="1" stop-color="#28CD56" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export { Message };
