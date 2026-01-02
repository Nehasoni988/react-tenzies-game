export const Notify = ({ errorMsg }) => {
  return (
    <div className={`error_container ${errorMsg ? "" : "hidden"}`}>
      <div className={errorMsg ? "error" : ""}>{errorMsg}</div>
    </div>
  );
};
