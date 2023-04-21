import ButtonComponent from "../button/ButtonComponent";
import { ENV } from "../../../environment";

import useConfigStore from "../../../store/configStore";
import useUserStore from "../../../store/userStore";
import useInfoCall from "../../../hooks/useInfoCall";

import "./AuthComponent.scss";

import logIn from "./img/auth-icon-log-in.svg";
import verify from "./img/auth-icon-verify.svg";
import optIn from "./img/auth-icon-opt-in.svg";
import lock from "./img/auth-icon-lock.svg";
import AuthDevComponent from "../authDev/AuthDevComponent";

const AuthComponent = () => {
  const { isLogedIn, isOptedIn, isBlocked, setInitialValues, optInUser } = useUserStore();
  const authConfig = useConfigStore((state) => state.configStore.config.Components.Alerts);

  const { refetch } = useInfoCall();

  // console.log(authConfig);
  console.log("auth rerendered");

  const handleLogIn = () => {
    // console.log("run log in");
    // refetch();
    // setInitialValues(true, true, false);
    // console.log("isLogedIn", isLogedIn);
    // console.log("isOptedIn", isOptedIn);
    // console.log("isBlocked", isBlocked);
  };

  const handleRegister = () => {
    console.log("run register");
  };

  const handleOptIn = () => {
    console.log("run opt in");

    optInUser();
  };

  const handleVerify = () => {
    console.log("run verify");
  };

  const handleMainPage = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  };

  let currentBody;

  const registerBody = (
    <div className="auth auth--register">
      <div className="auth__container">
        <div className="auth__box">
          <img className="auth__img" src={logIn} alt="log in" />
          <div className="auth__text">
            აქციაში მონაწილეობის მისაღებად გთხოვთ გაიაროთ ავტორიზაცია ან დარეგისტრირდეთ
          </div>
        </div>
        <div className="auth__box">
          <ButtonComponent
            onClick={handleRegister}
            className="auth__button auth__button--register"
            backgroundColor={"#ce0e2d"}
            color={"#ffffff"}
          >
            ავტორიზაცია
          </ButtonComponent>
          <ButtonComponent
            onClick={handleLogIn}
            className="auth__button auth__button--log-in"
            backgroundColor={"#01ac2d"}
            color={"#ffffff"}
          >
            ავტორიზაცია
          </ButtonComponent>
        </div>
      </div>
    </div>
  );

  const optInBody = (
    <div className="auth auth--opt-in">
      <div className="auth__container">
        <div className="auth__box">
          <img className="auth__img" src={optIn} alt="log in" />
          <div className="auth__text">აქციაში მონაწილეობის მისაღებად გთხოვთ ჩაერთოთ</div>
        </div>
        <div className="auth__box">
          <ButtonComponent
            onClick={handleOptIn}
            className="auth__button auth__button--opt-in"
            backgroundColor={"#01ac2d"}
            color={"#ffffff"}
          >
            ჩაერთე
          </ButtonComponent>
        </div>
      </div>
    </div>
  );

  const verifyBody = (
    <div className="auth auth--verify">
      <div className="auth__container">
        <div className="auth__box">
          <img className="auth__img" src={verify} alt="log in" />
          <div className="auth__text">
            აქციაში მონაწილეობის მისაღებად გთხოვთ გაიაროთ ვერიფიკაცია
          </div>
        </div>
        <div className="auth__box">
          <ButtonComponent
            onClick={handleVerify}
            className="auth__button auth__button--verify"
            backgroundColor={"#da8201"}
            color={"#ffffff"}
          >
            ვერიფიკაცია
          </ButtonComponent>
        </div>
      </div>
    </div>
  );

  const blockedBody = (
    <div className="auth auth--blocked">
      <div className="auth__container">
        <div className="auth__box">
          <img className="auth__img" src={lock} alt="log in" />
          <div className="auth__text">გილოცავ, დაბლოკილი ხარ დებილო</div>
        </div>
        <div className="auth__box">
          <ButtonComponent
            onClick={handleMainPage}
            className="auth__button auth__button--blocked"
            backgroundColor={"#323b43"}
            color={"#ffffff"}
          >
            მთავარი გვერდი
          </ButtonComponent>
        </div>
      </div>
    </div>
  );

  const restrictedBody = (
    <div className="auth auth--blocked">
      <div className="auth__container">
        <div className="auth__box">
          <img className="auth__img" src={lock} alt="log in" />
          <div className="auth__text">გილოცავ, შეზღუდული ხარ დებილო</div>
        </div>
        <div className="auth__box">
          <ButtonComponent
            onClick={handleMainPage}
            className="auth__button auth__button--blocked"
            backgroundColor={"#323b43"}
            color={"#ffffff"}
          >
            მთავარი გვერდი
          </ButtonComponent>
        </div>
      </div>
    </div>
  );

  const invalidCurrencyBody = (
    <div className="auth auth--blocked">
      <div className="auth__container">
        <div className="auth__box">
          <img className="auth__img" src={lock} alt="log in" />
          <div className="auth__text">აქციაში ჩასართავად არ გაქვთ შესაბამისი ვალუტა</div>
        </div>
        <div className="auth__box">
          <ButtonComponent
            onClick={handleMainPage}
            className="auth__button auth__button--blocked"
            backgroundColor={"#323b43"}
            color={"#ffffff"}
          >
            მთავარი გვერდი
          </ButtonComponent>
        </div>
      </div>
    </div>
  );

  if (!isLogedIn && authConfig.MustLogin === "1") {
    currentBody = ENV === "dev" ? <AuthDevComponent fetchInfo={refetch} /> : registerBody;
  } else if (isBlocked) {
    currentBody = blockedBody;
  } else if (isBlocked) {
    currentBody = blockedBody;
  } else if (isOptedIn === null && authConfig.MustOptin) {
    currentBody = optInBody;
  }

  return currentBody;
};

export default AuthComponent;
