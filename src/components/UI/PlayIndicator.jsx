import "./PlayIndicator.css";
const PlayIndicator = (props) => {
  return (
    <div className="indic__container">
      {props.label}
      <input
        type="checkbox"
        name="tarek"
        checked={props.checked}
        onChange={(e) => {
          e.preventDefault();
        }}
      ></input>
      <label htmlFor="tarek" className="label-class">
        <div className="my__toggle">
          <div></div>
        </div>
      </label>
    </div>
  );
};

export default PlayIndicator;
