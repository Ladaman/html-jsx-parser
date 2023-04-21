import { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./CalendarComponent.scss";

import arrow from "./img/arrow-active.svg";
import lock from "./img/lock.svg";
import useConfigStore from "../../../store/configStore";
import useLeaderboardStore from "../../../store/leaderboardStore";

const getWeekDayList = (cut) => {
  let days = [];
  let end = new Date(cut.EndDate);
  let periodLength = parseInt(cut.PeriodLength);

  const monthNames = [
    {
      en: "January",
      ka: "იანვარი",
      ru: "Январь",
    },
    {
      en: "February",
      ka: "თებერვალი",
      ru: "Февраль",
    },
    {
      en: "March",
      ka: "მარტი",
      ru: "Март",
    },
    {
      en: "April",
      ka: "აპრილი",
      ru: "Апрель",
    },
    {
      en: "May",
      ka: "მაისი",
      ru: "Май",
    },
    {
      en: "June",
      ka: "ივნისი",
      ru: "Июнь",
    },
    {
      en: "July",
      ka: "ივლისი",
      ru: "Июль",
    },
    {
      en: "August",
      ka: "აგვისტო",
      ru: "Август",
    },
    {
      en: "September",
      ka: "სექტემბერი",
      ru: "Сентябрь",
    },
    {
      en: "October",
      ka: "ოქტომბერი",
      ru: "Октябрь",
    },
    {
      en: "November",
      ka: "ნოემბერი",
      ru: "Ноябрь",
    },
    {
      en: "December",
      ka: "დეკემბერი",
      ru: "Декабрь",
    },
  ];
  // console.log(cut);
  // console.log(typeof periodLength);

  for (
    let iDate = new Date(cut.StartDate);
    iDate <= end;
    iDate.setDate(iDate.getDate() + periodLength)
  ) {
    let currLang = document.documentElement.lang;
    let currDate = new Date(iDate);
    let currDay = currDate.getDate();
    let currMonth = monthNames[currDate.getMonth()][currLang];

    if (cut.Components.Calendar.TextType === "default") {
      currMonth = currMonth.substring(0, 3);
    }
    if (iDate > new Date()) {
      days.push({ currDay, currMonth, blocked: true });
    } else if (iDate.toDateString() === new Date().toDateString()) {
      days.push({ currDay, currMonth, blocked: false, isToday: true });
    } else {
      days.push({ currDay, currMonth, blocked: false });
    }
  }

  return days;
};

const CalendarComponent = ({
  cutId,
  daysPerView = 6,
  daysPerViewMobile = 6,
  textColor = "#ffffff",
  backgroundColor = "grey",
  onSelectedDay,
  lockedDays = true,
}) => {
  const [calendarSwiper, setCalendarSwiper] = useState(null);
  const setPeriod = useLeaderboardStore((state) => state.setPeriod);

  const cuts = useConfigStore((state) => state.configStore.config.Cuts);
  const datesArray = getWeekDayList(cuts[cutId]);

  const size = window.innerWidth;
  const currdaysPerView = size <= 940 ? daysPerViewMobile : daysPerView;

  const nextSlide = () => {
    calendarSwiper?.slideNext();
  };
  const prevSlide = () => {
    calendarSwiper?.slidePrev();
  };

  const setActive = (e, slide, key) => {
    let prevActiveDay = document.querySelector("#active-calendar-day");

    console.log(key + 1);
    setPeriod(key + 1);

    onSelectedDay && onSelectedDay(slide, key);
    prevActiveDay && prevActiveDay.setAttribute("id", "");
    e.currentTarget.setAttribute("id", "active-calendar-day");
  };

  return (
    <div className="calendar" style={{ backgroundColor: backgroundColor }}>
      <div onClick={prevSlide} className="calendar__arrow calendar__arrow-left">
        <img src={arrow} alt="left arrow" />
      </div>
      <Swiper
        className="calendar__container"
        spaceBetween={20}
        slidesPerView={currdaysPerView}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={setCalendarSwiper}
      >
        {datesArray.map((slide, key) => {
          return (
            <SwiperSlide
              key={key}
              onClick={(e) => {
                setActive(e, slide, key);
              }}
              style={{ color: textColor }}
              className={`calendar__slide ${slide.blocked && lockedDays ? "blocked" : ""}`}
              id={slide.isToday ? "active-calendar-day" : ""}
            >
              {slide.blocked && lockedDays && (
                <img className="calendar__slide-lock" src={lock} alt="locked" />
              )}
              <div className="calendar__slide-day">{slide.currDay}</div>
              <div className="calendar__slide-month">{slide.currMonth}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div onClick={nextSlide} className="calendar__arrow calendar__arrow-right">
        <img src={arrow} alt="right arrow" />
      </div>
    </div>
  );
};

CalendarComponent.propTypes = {
  cutId: PropTypes.number,
  daysPerView: PropTypes.number,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  onSelectedDay: PropTypes.func,
  lockedDays: PropTypes.bool,
};

export default CalendarComponent;
