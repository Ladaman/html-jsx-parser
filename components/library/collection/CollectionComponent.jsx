import "./CollectionComponent.scss";

const CollectionComponent = (props) => {
  let iconElements = [];
  const imgElement = props.icon ? <img src={props.icon} alt="icon" /> : "";
  for (let i = 0; i < 10; i++) {
    if (i < props.progress) {
      iconElements.push(
        <div className="collection__icon active" key={i}>
          {imgElement}
        </div>
      );
    } else {
      iconElements.push(
        <div className="collection__icon" key={i}>
          {imgElement}
        </div>
      );
    }
  }

  return (
    <div className="collection" style={{ width: props.width }}>
      <div className="collection__box">
        <div className="collection__info">
          <h2>10 Symbol = Prize</h2>
          <p>
            left :<span>{props.progress}</span>/10
          </p>
        </div>
        <div className="collection__img">
          <img src="" alt="main collection image" />
        </div>
      </div>
      <div className="collection__line"></div>
      <div className="collection__icons">{iconElements}</div>
    </div>
  );
};

export default CollectionComponent;
