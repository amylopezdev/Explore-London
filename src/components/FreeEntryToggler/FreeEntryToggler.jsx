/* eslint-disable react/prop-types */
import "./FreeEntryToggler.css";

export const FreeEntryToggler = ({
  category,
  showOnlyFree,
  setShowOnlyFree,
}) => {
  return (
    <div className="free-entry-toggler">
      <h4>Only show {category} with free entry</h4>
      <label className="switch">
        <input
          type="checkbox"
          checked={showOnlyFree}
          onChange={(e) => {
            setShowOnlyFree(e.target.checked);
          }}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
