import "./ButtonComponent.scss";

const ButtonComponent = ({
  className = "",
  text = "Default Text",
  color,
  backgroundColor,
  href,
  target,
  onClick,
  disabled,
  ...rest
}) => {
  let modifiedClassName = "button";
  modifiedClassName += disabled ? " disabled" : "";
  modifiedClassName += className ? " " + className : "";
  return (
    <a
      href={href}
      target={target}
      className={modifiedClassName}
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      <p style={{ color: color }}>{rest.children}</p>
    </a>
  );
};

export default ButtonComponent;
