import "./Loading.css";

export const Loading = () => {
  return (
    <div className="loading-container" aria-role="status" aria-label="label">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
