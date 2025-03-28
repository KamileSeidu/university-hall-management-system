import classes from "./PersonnelProfile.module.css";
import Button from "../../components/UI/Button";
import Icon from "../../components/UI/icon";
import thumbs from "../../assets/profileIcons/thumbs.svg";
import { Link } from "react-router-dom";

function PersonnelProfile({ personnel, onClose }) {
  // console.log(personnel.photoFileName);

  const fullMiddleName = personnel.middleName ? personnel.middleName : "";
  const imgUrl = import.meta.env.VITE_IMG_URL;

  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.modal}>
        <Link onClick={onClose} className={classes.link}>
          {" "}
          ✕
        </Link>
        <div className={classes.profile}>
          <img
            className={classes["profile__photo"]}
            src={`${imgUrl}/nssPersonnel-photos/${personnel.photoFileName}`}
            alt="profle-photo"
          />
          <h1>{`${personnel.firstName} ${fullMiddleName}, ${personnel.lastName}`}</h1>
          <div className={classes["profile__info"]}>
            <Icon name="barcode" />
            <div>
              <h2>NSS Number</h2>
              <h3>{personnel.nssNumber}</h3>
            </div>
          </div>
          <div className={classes["profile__info"]}>
            <Icon name="house" />
            <div>
              <h2>Room Number</h2>
              <h3>{`${personnel.roomNumber}`}</h3>
            </div>
          </div>

          <div className={classes["profile__info"]}>
            <Icon name="book" />
            <div>
              <h2>Place of Work</h2>
              <h3>{personnel.placeOfWork}</h3>
            </div>
          </div>
          <div className={classes["profile__info--container"]}>
            <div className={classes["profile__info"]}>
              <Icon name="phone" />
              <div>
                <h2>Contact</h2>
                <h3>{personnel.phoneNumber}</h3>
              </div>
            </div>
            <div
              className={`${classes["profile__info"]} ${classes["profile__info--emmergency"]}`}
            >
              <Icon name="phone" />
              <div>
                <h2>Emmergency Contact</h2>
                <h3>{personnel.emmergencyNumber}</h3>
              </div>
            </div>
          </div>
        </div>
        <Button size="btn--block" onClick={onClose}>
          V-Mate <img src={thumbs} className={classes.thumbs} alt="thumbs-up" />
        </Button>
      </div>
    </>
  );
}

export default PersonnelProfile;
