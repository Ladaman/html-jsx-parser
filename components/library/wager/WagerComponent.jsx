import { useEffect } from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "./WagerComponent.scss";

import wagerArrow from "./img/wager-arrow.svg";

const setWagerValue = (value, lastCheckpoint, sectionWidth, setValueWidth) => {
  const commonInterval = 30000;

  let percentPerPixel = sectionWidth / 100;
  let amountPercentage = (value / commonInterval) * 100;
  let additionalWidth = 0;
  let widthcoefficient = 1;

  // if (swiper) {
  //   if (value > commonInterval) {
  //     let slideToIndex = Math.floor(value / commonInterval);
  //     swiper.slideTo(slideToIndex);
  //   }
  // }
  if (value <= 1000) {
    widthcoefficient = commonInterval / 1000;
  } else if (1000 < value && value <= 5000) {
    additionalWidth = sectionWidth;
    widthcoefficient = commonInterval / 5000;
  } else if (5000 < value && value <= 15000) {
    additionalWidth = sectionWidth * 2;
    widthcoefficient = commonInterval / 15000;
  } else if (15000 < value && value <= commonInterval) {
    additionalWidth = sectionWidth * 3;
    widthcoefficient = 1;
  } else if (value > lastCheckpoint) {
    additionalWidth = sectionWidth * 4;
    value = lastCheckpoint;
    amountPercentage = (value / commonInterval) * 100;
  } else {
    additionalWidth = sectionWidth * 3;
  }
  setValueWidth(
    additionalWidth + percentPerPixel * amountPercentage * widthcoefficient
  );
};
const WagerComponent = ({
  wagerValue = 0,
  checkpoints = [],
  checkpointsPerView = 6,
  checkpointsPerViewMobile = 6,
  currency = "",
  ...rest
}) => {
  const swiperRef = useRef();
  const [lineWidth, setLineWidth] = useState(null);
  const [valueWidth, setValueWidth] = useState(null);

  const size = window.innerWidth;
  const currcheckpointsPerView =
    size <= 940 ? checkpointsPerViewMobile : checkpointsPerView;
  let checkpointWidth;

  // console.log("wager component rerendered");
  useEffect(() => {
    checkpointWidth =
      swiperRef.current.offsetWidth / currcheckpointsPerView || 0;

    setLineWidth(checkpointWidth * checkpoints.length);
    setWagerValue(
      wagerValue,
      checkpoints[checkpoints.length - 1],
      checkpointWidth,
      setValueWidth
    );
    swiperRef.current.swiper.slideTo(valueWidth / checkpointWidth - 2);
  }, [wagerValue, valueWidth]);

  return (
    <div className="wager">
      <div className="wager__header">
        {rest.hasTopText && (
          <p className="wager__header-text">
            * Open 1 paper for the first 1000֏, then 5000֏, 15.000֏ and 30.000֏
            wagers.
          </p>
        )}
        {!rest.hasTopText && rest.hasSale && <div></div>}
        {rest.hasSale && (
          <div className="wager__header-sale">
            <span>90%</span>
            <div className="wager__header-infoIcon">
              <div className="wager__tooltip">
                <div className="wager__tooltip-container">
                  * Open 1 paper for the first 1000֏, then 5000֏, 15.000֏ and
                  30.000֏ wagers. Afterwards you
                </div>
                <div className="wager__tooltip-triangle"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      {(rest.hasTopText || rest.hasSale) && (
        <div className="wager__break"></div>
      )}
      <div className="wager__container">
        <div className="wager__arrow wager__arrow-prev">
          <img src={wagerArrow} alt="wager left" />
        </div>
        <Swiper
          modules={[Navigation]}
          className="wager__slider"
          spaceBetween={0}
          slidesPerView={currcheckpointsPerView}
          ref={swiperRef}
          navigation={{
            nextEl: ".wager__arrow-next",
            prevEl: ".wager__arrow-prev",
          }}
        >
          {checkpoints.map((element, key) => {
            return (
              <SwiperSlide key={key} className="wager__slide">
                <span className="wager__txt wager__txt-top">
                  {element + currency}
                </span>
                <span className="wager__txt wager__txt-bottom">+1</span>
              </SwiperSlide>
            );
          })}
          <SwiperSlide className="wager__slide">
            <span className="wager__txt wager__txt-top">ထ</span>
            <span className="wager__txt wager__txt-bottom">+1ထ</span>
          </SwiperSlide>
          <SwiperSlide
            className="wager__line"
            style={{ width: lineWidth + "px" }}
          >
            <div
              className="wager__line-fill"
              style={{ width: valueWidth + "px" }}
            >
              <div className="wager__line-value">{wagerValue + currency}</div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="wager__arrow wager__arrow-next">
          <img src={wagerArrow} alt="wager right" />
        </div>
      </div>
      <div className="wager__footer">
        {rest.hasRefresh ? (
          <div className="wager__footer-refreshButton">
            <div className="wager__footer-refreshIcon"></div>
            <span>Refresh</span>
          </div>
        ) : (
          <div></div>
        )}
        <div className="wager__footer-box">
          {rest.hasInfo && (
            <div className="wager__footer-infoIcon">
              <div className="wager__tooltip">
                <div className="wager__tooltip-container">
                  * Open 1 paper for the first 1000֏, then 5000֏, 15.000֏ and
                  30.000֏ wagers. Afterwards you
                </div>
                <div className="wager__tooltip-triangle"></div>
              </div>
            </div>
          )}
          <div className="wager__footer-playButton">Play Now</div>
        </div>
      </div>
    </div>
  );
};

export default WagerComponent;
