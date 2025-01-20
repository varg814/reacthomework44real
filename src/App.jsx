import React from "react";
import "./App.css";
import Description from "./components/atoms/Description/Description";
import Icon from "./components/atoms/Icon/Icon";
import Heading from "./components/molecules/Heading/Heading";
import Image from "./components/atoms/Image/Image";
import Button from "./components/atoms/Button/Button.jsx";
import Prices from "./components/atoms/Prices/Prices.jsx";

function App() {
  const pizzaText =
    "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust.";

  const pizzaImageSrc = "../src/images/Pizza Photo.png";
  const tortelliniText =
    "Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.";
  const tortelliniImageSrc = "../src/images/Tortellini Photo.png";
  const cakeText =
    "Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.";
  const cakeImageSrc = "../src/images/Strawberry cake Photo.png";

  const redSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <g clip-path="url(#clip0_1_356)">
        <path
          d="M12.2201 8.19681C12.0597 6.10887 11.0876 4.80044 10.23 3.64582C9.43586 2.5769 8.75 1.65383 8.75 0.292166C8.75 0.182791 8.68875 0.0828225 8.59163 0.0327014C8.4942 -0.0177205 8.37714 -0.00946268 8.28857 0.0549045C7.00057 0.976553 5.92591 2.52992 5.55051 4.01206C5.28989 5.04394 5.25541 6.20397 5.25057 6.97011C4.06112 6.71606 3.79168 4.93686 3.78883 4.91747C3.77543 4.82519 3.71905 4.74488 3.63702 4.70102C3.55414 4.65773 3.45671 4.65459 3.37269 4.69618C3.31032 4.72637 1.84171 5.47258 1.75626 8.45198C1.75027 8.5511 1.75 8.65052 1.75 8.74992C1.75 11.6444 4.10525 13.9996 7 13.9996C7.00399 13.9998 7.00826 14.0004 7.01168 13.9996C7.01282 13.9996 7.01395 13.9996 7.01537 13.9996C9.903 13.9913 12.25 11.6393 12.25 8.74992C12.25 8.60437 12.2201 8.19681 12.2201 8.19681ZM7 13.4163C6.03498 13.4163 5.25 12.5801 5.25 11.5522C5.25 11.5172 5.24973 11.4818 5.25227 11.4385C5.26395 11.0051 5.34628 10.7091 5.43657 10.5123C5.60577 10.8758 5.90825 11.2098 6.39959 11.2098C6.5608 11.2098 6.69126 11.0794 6.69126 10.9182C6.69126 10.503 6.69982 10.0239 6.80321 9.59153C6.89522 9.20817 7.11509 8.80031 7.39367 8.47336C7.51756 8.89774 7.75912 9.2412 7.99496 9.57644C8.33249 10.056 8.68139 10.5519 8.74264 11.3975C8.74634 11.4476 8.75006 11.4981 8.75006 11.5522C8.75 12.58 7.96502 13.4163 7 13.4163Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_356">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const greenSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M10.5038 0C10.5038 0 9.35192 1.11753 8.10617 1.56808C-1.11899 4.90485 2.77166 11.4073 2.89858 11.4287C2.89858 11.4287 3.41589 10.5279 4.11468 10.014C8.54895 6.75421 9.45021 3.00198 9.45021 3.00198C9.45021 3.00198 8.45516 7.51711 4.51021 10.3266C3.63891 10.9467 3.04894 12.4738 2.7992 14C2.7992 14 3.41683 13.7505 3.68241 13.6829C3.78598 13.007 4.0025 12.3599 4.36858 11.7818C9.88213 12.4382 11.6879 7.99549 11.9238 6.44635C12.4806 2.7876 10.5038 0 10.5038 0Z"
        fill="white"
      />
    </svg>
  );

  const yellowSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <g clip-path="url(#clip0_5898_60)">
        <path
          d="M10.8572 3.14282C10.936 3.13898 11.015 3.13705 11.0943 3.13705C11.6149 3.13705 12.1227 3.22015 12.6026 3.37994C13.1051 2.705 13.3769 1.89003 13.3769 1.03329C13.3769 0.806854 13.1933 0.623138 12.9667 0.623138C12.0885 0.623138 11.2766 0.912064 10.6208 1.39977C10.7801 1.87903 10.8629 2.38606 10.8629 2.90581C10.8629 2.98495 10.861 3.064 10.8572 3.14282Z"
          fill="white"
        />
        <path
          d="M3.99828 9.99649C3.9015 9.89951 3.81018 9.79932 3.72356 9.69635L0.120163 13.2999C-0.0400543 13.46 -0.0400543 13.7197 0.120163 13.8798C0.200272 13.9599 0.305161 14 0.410156 14C0.515152 14 0.620041 13.9599 0.70015 13.8798L4.30344 10.2766C4.1993 10.1888 4.09825 10.0965 4.00095 9.99905C4.00009 9.9982 3.99913 9.99734 3.99828 9.99649Z"
          fill="white"
        />
        <path
          d="M8.88052 3.71928C8.93372 3.95587 8.968 4.19513 8.98477 4.43503L10.0108 3.40921C10.0318 3.24344 10.0426 3.07542 10.0426 2.9057C10.0426 1.8535 9.6329 0.864212 8.88885 0.120163C8.81184 0.0431518 8.7076 0 8.59875 0C8.49002 0 8.38567 0.0431518 8.30876 0.120163C7.9612 0.467728 7.68669 0.868805 7.49261 1.30481C7.53171 1.33546 7.56941 1.36826 7.60498 1.40393C8.24222 2.04117 8.68324 2.84183 8.88052 3.71928Z"
          fill="white"
        />
        <path
          d="M13.8799 5.11115C13.1358 4.3671 12.1465 3.95737 11.0943 3.95737C10.9246 3.95737 10.7565 3.96815 10.5908 3.9893L9.56721 5.01277C10.7117 5.09224 11.7769 5.57588 12.5961 6.39502C12.6318 6.43069 12.6645 6.46829 12.6952 6.50728C13.1289 6.31438 13.528 6.04169 13.8743 5.69669C13.9142 5.65823 13.9467 5.61145 13.9688 5.55815C14.0323 5.40488 13.9971 5.22853 13.8799 5.11115Z"
          fill="white"
        />
        <path
          d="M7.12326 6.29643L8.14374 5.27606C8.29424 4.10594 7.92178 2.88081 7.02499 1.98402C6.94798 1.90712 6.84363 1.86386 6.73489 1.86386C6.62616 1.86386 6.5217 1.90712 6.44479 1.98413C6.09242 2.3365 5.82112 2.73961 5.63046 3.17017C5.66891 3.20039 5.70598 3.23276 5.74101 3.2679C6.56015 4.08693 7.04379 5.15195 7.12326 6.29643Z"
          fill="white"
        />
        <path
          d="M9.23055 5.82123C9.06071 5.82123 8.89259 5.83202 8.72682 5.85316L7.70314 6.87663C8.84773 6.9561 9.91286 7.43974 10.732 8.25877C10.7677 8.29445 10.8007 8.33215 10.8313 8.37125C11.2672 8.17728 11.6683 7.90266 12.016 7.5551C12.0929 7.4782 12.1361 7.37384 12.1361 7.26511C12.1361 7.15627 12.0929 7.05202 12.016 6.97511C11.2719 6.23096 10.2827 5.82123 9.23055 5.82123Z"
          fill="white"
        />
        <path
          d="M6.31496 6.63353C6.31496 5.58122 5.90513 4.59193 5.16108 3.84799C5.08097 3.76788 4.97598 3.72783 4.87109 3.72783C4.76609 3.72783 4.6611 3.76788 4.5811 3.84799C3.1431 5.28589 3.05145 7.56813 4.30595 9.1138L6.28303 7.13672C6.30407 6.97105 6.31496 6.80315 6.31496 6.63353Z"
          fill="white"
        />
        <path
          d="M7.36658 7.68509C7.19675 7.68509 7.02852 7.69598 6.86275 7.71703L4.88577 9.694C5.58528 10.2632 6.45195 10.5727 7.36647 10.5728H7.36679C8.41878 10.5728 9.40796 10.1631 10.152 9.41907C10.229 9.34216 10.2722 9.2377 10.2722 9.12897C10.2722 9.02023 10.229 8.91588 10.152 8.83897C9.40796 8.09482 8.41878 7.68509 7.36658 7.68509Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_5898_60">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <>
      <div className="card">
        <Image imgSrc={pizzaImageSrc} />
        <div className="paddingSection">
          <div className="descriptionHeadingSection">
            <div className="headingSection">
              <Heading
                headingText="Pepperoni Pizza"
                headingStyle="headingStyle"
              />
              <div className="iconDiv">
                <Icon iconSvg={redSvg} iconStyle="red" />
                <Icon iconSvg={yellowSvg} iconStyle="yellow" />
              </div>
            </div>
            <Description
              description={pizzaText}
              descriptionStyle="descriptionStyle"
              calories="265Cal"
              date="P/F/C: 12/10/31"
              temp="53.8 °C"
            />
          </div>
          <div className="pricingContainer">
            <Prices
              heading1Style="heading1Style"
              heading2Style="heading2Style"
              heading1Text="$23.90"
              heading2Text="$29.90"
            />
            <Button buttonStyle="buttonStyle" buttonText="ORDER" />
          </div>
        </div>
      </div>

      <div className="card">
        <Image imgSrc={tortelliniImageSrc} />
        <div className="paddingSection">
          <div className="descriptionHeadingSection">
            <div className="headingSection">
              <Heading headingText="Tortellini" headingStyle="headingStyle" />
              <div className="iconDiv">
                <Icon iconSvg={greenSvg} iconStyle="green" />
                <Icon iconSvg={redSvg} iconStyle="red" />
                <Icon iconSvg={yellowSvg} iconStyle="yellow" />
              </div>
            </div>
            <Description
              description={tortelliniText}
              descriptionStyle="descriptionStyle"
              calories="270Cal"
              date="P/F/C: 18/4/41"
              temp="42.4 °C"
            />
          </div>
          <div className="pricingContainer">
            <Prices
              heading1Style="heading1Style"
              heading2Style="heading2Style"
              heading1Text="$17.90"
              heading2Text="$22.90"
            />
            <Button buttonStyle="buttonStyle" buttonText="ORDER" />
          </div>
        </div>
      </div>

      <div className="card">
        <Image imgSrc={cakeImageSrc} />
        <div className="paddingSection">
          <div className="descriptionHeadingSection">
            <div className="headingSection">
              <Heading
                headingText="Strawberry Cake"
                headingStyle="headingStyle"
              />
              <div className="iconDiv">
                <Icon iconSvg={yellowSvg} iconStyle="yellow" />
              </div>
            </div>
            <Description
              description={cakeText}
              descriptionStyle="descriptionStyle"
              calories="346 Cal"
              date="P/F/C: 6/14/49"
              temp="13.9 °C"
            />
          </div>
          <div className="pricingContainer">
            <Prices
              heading1Style="heading1Style"
              heading2Style="heading2Style"
              heading1Text="$13.90"
              heading2Text="$18.90"
            />
            <Button buttonStyle="buttonStyle" buttonText="ORDER" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
