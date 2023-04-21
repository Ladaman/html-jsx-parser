import "./SurveyComponent.scss";

const SurvayComponent = () => {
  return (
    <div className="survey active">
      <form className="survey__container" action="">
        <div className="survey__header">
          <div className="survey__header-text">
            <p className="">შეფასება</p>
          </div>
          <div className="survey__header-close"></div>
        </div>
        <div className="survey__line"></div>
        <div className="survey__body">
          <div className="survey__desc">
            <p>
              რამდენად მოსალოდნელია თქვენს მეგობარს, რომელიც დაინტერესებულია აზარტული თამაშებით,
              ურჩიოთ აჭარაბეთის სპორტით სარგებლობა?
            </p>
          </div>
          <div className="survey__numbers">
            <p className=" rangeNumbers">0</p>
            <p className=" rangeNumbers">1</p>
            <p className=" rangeNumbers">2</p>
            <p className=" rangeNumbers">3</p>
            <p className=" rangeNumbers">4</p>
            <p className=" rangeNumbers selected">5</p>
            <p className=" rangeNumbers">6</p>
            <p className=" rangeNumbers">7</p>
            <p className=" rangeNumbers">8</p>
            <p className=" rangeNumbers">9</p>
            <p className=" rangeNumbers">10</p>
          </div>
          <div className="survey__range">
            <input
              className="range"
              type="range"
              name="rating"
              id="points"
              min="0"
              max="10"
              value="5"
            />
          </div>
          <div className="survey__dificulty">
            <div className="survey__dificulty-text">
              <p className="font-FiraMedium">სრულიად არ არის მოსალოდნელი</p>
            </div>
            <div className="survey__dificulty-text">
              <p className="font-FiraMedium">სრულიად მოსალოდნელია</p>
            </div>
          </div>
          <textarea
            className="survey__textbox "
            type="text"
            name="review"
            placeholder="გთხოვთ დაგვიზუსტოთ რატომ დაწერეთ აღნიშნული ქულა"
            maxLength="500"
          ></textarea>
          <div className="survey__characters">
            <p className="font-FiraMedium" id="chl">
              0/500
            </p>
          </div>
          <input className="survey__submit " type="submit" value="გაგზავნა" />
        </div>
      </form>
    </div>
  );
};

export default SurvayComponent;
