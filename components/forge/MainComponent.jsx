//react components
import AuthComponent from "../library/auth/AuthComponent";
import AuthDevComponent from "../library/authDev/AuthDevComponent";
import SurvayComponent from "../library/survey/SurveyComponent";
import WagerComponent from "../library/wager/WagerComponent";
import CalendarComponent from "../library/calendar/CalendarComponent";
import LeaderboardComponent from "../library/leaderboard/LeaderboardComponent";
import CollectionComponent from "../library/collection/CollectionComponent";
import ButtonComponent from "../library/button/ButtonComponent";
import WheelinatorComponent from "../library/wheel/WheelinatorComponent";
import DetailsComponent from "../library/details/DetailsComponent";
import CutWrapper from "../library/cut/CutWrapper";
import useInfoCall from "../../hooks/useInfoCall";

//storage
import useUserStore from "../../store/userStore";
// import useConfigStore from "../../store/configStore";

//styles
import "./MainComponent.scss";
import useCheckUser from "../../hooks/useCheckUser";

//dummy data
const logCalendarValues = (...args) => {
  console.log(args);
};
const checkpoints = [
  0, 1000, 5000, 15000, 30000, 60000, 90000, 120000, 150000, 180000, 210000, 240000, 270000, 300000,
];

//main
const MainComponent = () => {
  const isUserValid = useCheckUser();
  // console.log("is user valid?", isUserValid);
  // console.log("main component rerendered");

  // const { infoData, isLoading, isError } = useInfoCall();
  // console.log("infoData:", infoData);
  return (
    <>
      <AuthComponent />

      {isUserValid && (
        <>
          {/* <ButtonComponent
        // href={"https://youtube.com"}
        // target={"_blank"}
        // color={"green"}
        // backgroundColor={"dodgerblue"}
        // onClick={}
        // customClass="customButton"
        // disabled
      /> */}
          {/* <AuthComponent status={1} authConfig={authConfig}/> */}
          {/* <SurvayComponent /> */}
          <CutWrapper>
            <CalendarComponent
              cutId={1}
              daysPerView={7}
              daysPerViewMobile={4}
              textColor={"#ffffff"}
              backgroundColor={"transparent"}
              lockedDays={false}
              // onSelectedDay={logCalendarValues}
            />
            <DetailsComponent resultId={1} cutId={1} />
            <LeaderboardComponent resultId={1} cutId={1} />
          </CutWrapper>
          <div className="wheel-container">
            <WheelinatorComponent layers={1} />
          </div>
          <CollectionComponent
            progress={5}
            // width={"50%"}
          />
          <WagerComponent
            wagerValue={60000}
            currency={"₾"}
            checkpoints={checkpoints}
            checkpointsPerView={8}
            checkpointsPerViewMobile={4}
            hasTopText
            hasSale
            hasRefresh
            hasInfo
          />
        </>
      )}
    </>
  );
};

export default MainComponent;
