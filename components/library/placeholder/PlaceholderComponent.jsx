import "./PlaceholderComponent.scss";

const PlaceholderComponent = ({ className }) => {
  return (
    <div className={"placeholder " + className}>
      <div className="animated-background"></div>
    </div>
  );
};

export default PlaceholderComponent;
