// import useAuthenticate from "../../../hooks/useAuthenticate";
import axios from "axios";
import qs from "qs";
import useUserStore from "../../../store/userStore";

import "./AuthDevComponent.scss";

const testCredentials = {
  username: "playtest",
  password: "Paroli1",
};

// const testCredentials = {
//   username: "qadep26",
//   password: "Qwer123!",
// };

const AuthDevComponent = ({ fetchInfo }) => {
  const logInUser = useUserStore((state) => state.logInUser);

  // const authenticate = (username = "playtest", password = "Paroli1") => {
  const authenticate = (username = "qadep26", password = "Qwer123!") => {
    const url = "https://coreapi.adjarabet-stage.com/WebsiteService";
    const data = qs.stringify({
      userIdentifier: username,
      password: password,
      otpDeliveryChannel: "2",
      req: "login",
    });
    axios
      .post(url, data, {
        withCredentials: true,
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          fetchInfo();
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authenticate(event.target[0].value, event.target[1].value);
  };

  return (
    <div className="auth-dev">
      <form onSubmit={handleSubmit}>
        <div className="auth-dev__box">
          <label htmlFor="username">
            {/* Username: */}
            <input
              type="text"
              id="username"
              placeholder="Username"
              defaultValue={testCredentials.username}
            />
          </label>
          <label htmlFor="password">
            {/* Password: */}
            <input
              type="password"
              id="password"
              placeholder="Password"
              defaultValue={testCredentials.password}
            />
          </label>
        </div>
        <input type="submit" value="გეიარე ავტარიზაცია" />
      </form>
    </div>
  );
};

export default AuthDevComponent;
