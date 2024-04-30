/* eslint-disable react/prop-types */
import "./FreeEntryToggler.css";

export const FreeEntryToggler = ({
  category,
  showOnlyFree,
  setShowOnlyFree,
}) => {
  return (
    <div className="free-entry-toggler">
      <div>Only show {category} with free entry</div>
      <label className="switch" aria-label="toggle">
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
