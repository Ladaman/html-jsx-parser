import { useEffect } from "react";
import { useState } from "react";

import useLeaderboardStore from "../../../store/leaderboardStore";
import useUserStore from "../../../store/userStore";

import "./DetailsComponent.scss";

const DetailsComponent = ({ resultId, cutId }) => {
  const currPeriod = useLeaderboardStore((state) => state.periodStore);
  const userResults = useUserStore((state) => state.userResults[resultId][cutId][currPeriod]);
  console.log(userResults);
  // console.log(userResults[resultId][cutId][currPeriod.periodStore]);
  // console.log(currPeriod.periodStore);

  const [userLeaderboardInfo, setUserLeaderboardInfo] = useState({
    position: "x",
    points: "x",
    something: "69",
  });

  useEffect(() => {
    if (userResults) {
      setUserLeaderboardInfo({
        ...userLeaderboardInfo,
        position: userResults.position,
        points: userResults.points,
      });
      console.log("rerendered");
    } else {
      setUserLeaderboardInfo({
        ...userLeaderboardInfo,
        position: "x",
        points: "x",
      });
    }
  }, [userResults]);

  return (
    <div className="lib-details">
      <div className="lib-details__item">
        <div className="lib-details__number">{userLeaderboardInfo.position}</div>
        <div className="lib-details__text">მიმდინარე პოზიცია</div>
      </div>
      <div className="lib-details__item">
        <div className="lib-details__number">{userLeaderboardInfo.points}</div>
        <div className="lib-details__text">ჩემი ქულები</div>
      </div>
      <div className="lib-details__item">
        <div className="lib-details__number">{userLeaderboardInfo.something}</div>
        <div className="lib-details__text">რავი რამე</div>
      </div>
    </div>
  );
};

export default DetailsComponent;
