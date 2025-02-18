import classes from "./VerificationProfile.module.css";

function VerificationProfile() {
  return (
    <div className={classes["profile-container"]}>
      <div className={classes.backdrop}></div>
      <div className={classes["profile-content"]}>
        <img src="" alt="" className={classes["profile-image"]} />
        <h2 className={classes["profile-name"]}>Kamile Seidu</h2>
        <div className={classes["action-btn"]}>
          <button className={`${classes.btn} ${classes["btn--collect"]}`}>
            Collect
          </button>
          <button className={`${classes.btn} ${classes["btn--collect"]}`}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificationProfile;
