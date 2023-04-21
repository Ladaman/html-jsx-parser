import "./MaintenanceComponent.scss";

import down from "./img/down.svg";
import close from "./img/close.svg";
import cog from "./img/cog.svg";
import useConfigStore from "../../../store/configStore";

const maintenanceOnDown = (
  <div className="maintenance__container">
    <img alt="" src={down} className="maintenance__icon" />
    <div className="maintenance__text1">
      ძვირფასო მომხმარებელო, მიმდინარეობს ტექნიკური სამუშაოები. ჩვენი გუნდი
      ყველაფერს აკეთებს საკითხის მოსაგვარებლად.
    </div>
    <div className="maintenance__text2">ბოდიშს გიხდით შეფერხებისთვის.</div>
    <a href="https://youtube.com" className="maintenance__button">
      აქციები
    </a>
  </div>
);

const maintenanceOnAwarding = (
  <div className="maintenance__container">
    <img alt="" src={close} className="maintenance__close" />
    <img alt="" src={cog} className="maintenance__icon " />
    <div className="maintenance__text1">
      ძვირფასო მომხმარებელო, პრიზების დარიცხვის სისტემას აქვს გარკვეული
      შეფერხება, მოცემულ მომენტში. ჩვენი გუნდი აწარმოებს ტექნიკურ სამუშაოებს, ამ
      საკითხის მოსაგვარებლად.
    </div>
    <div className="maintenance__text2">ბოდიშს გიხდით შეფერხებისთვის.</div>

    <a href="https://youtube.com" className="maintenance__button">
      დახურვა
    </a>
  </div>
);

const maintenanceOnWager = (
  <div className="maintenance__container">
    <img alt="" src={close} className="maintenance__close" />
    <img alt="" src={cog} className="maintenance__icon " />
    <div className="maintenance__text1">
      ძვირფასო მომხმარებელო, ფსონის ოდენობა დაგვიანებით აისახება და ჩვენი გუნდი
      მუშაობს საკითხის მოგვარებაზე.
    </div>
    <div className="maintenance__text2">ბოდიშს გიხდით შეფერხებისთვის.</div>

    <a href="https://youtube.com" className="maintenance__button">
      დახურვა
    </a>
  </div>
);

const MaintenanceComponent = () => {
  const maintenanceData = useConfigStore(
    (state) => state.configStore.config.Components.Maintenance
  );
  let maintenanceTemplate;

  if (!maintenanceData) return <></>;

  switch (maintenanceData.Type) {
    case "down":
      maintenanceTemplate = maintenanceOnDown;
      break;
    case "awarding":
      maintenanceTemplate = maintenanceOnAwarding;
      break;
    case "wager":
      maintenanceTemplate = maintenanceOnWager;
      break;

    default:
      maintenanceTemplate = <></>;
      break;
  }

  return <div className="maintenance">{maintenanceTemplate}</div>;
};

export default MaintenanceComponent;
