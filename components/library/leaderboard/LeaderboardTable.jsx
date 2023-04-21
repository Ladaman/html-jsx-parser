import p2pIcon from "./img/p2p-icon.svg";

const LeaderboardTable = ({ leaderboardData }) => {
  return (
    <div className="leaderboard">
      <div className="leaderboard__content">
        <div className="leaderboard__head">
          <div className="leaderboard__column">პოზიცია</div>
          <div className="leaderboard__column">მომხმარებელი</div>
          <div className="leaderboard__column">ქულა</div>
          <div className="leaderboard__column">პრიზი</div>
        </div>
        <ul className="leaderboard__body">
          {leaderboardData &&
            leaderboardData.map((el, i) => {
              return (
                <li className="leaderboard__item" key={i}>
                  <div className="leaderboard__column">{el.position}</div>
                  <div className="leaderboard__column">{el.username}</div>
                  <div className="leaderboard__column">{el.points}</div>
                  <div className="leaderboard__column">
                    <img src={p2pIcon} alt="p2p icon" />
                    <p>500 სპინბილეთი</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default LeaderboardTable;
