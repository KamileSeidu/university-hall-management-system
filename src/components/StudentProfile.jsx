import classes from "./StudentProfile.module.css";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import thumbs from "../assets/profileIcons/thumbs.svg";
import kamile from "../assets/Kamile.jpg";
import Icon from "./UI/icon";

function StudentProfile() {
  return (
    <Card>
      <div className={classes.profile}>
        <img src={kamile} alt="Kamile-profle-photo" />
        <h1>Kamile, Seidu</h1>
        <div className={classes["profile__info"]}>
          <Icon name="barcode" />
          <div>
            <h2>Student ID, Nbr</h2>
            <h3>22010430</h3>
          </div>
        </div>
        <div className={classes["profile__info"]}>
          <Icon name="house" />
          <div>
            <h2>Room Number</h2>
            <h3>J40 - 1</h3>
          </div>
        </div>
        <div className={classes["profile__info"]}>
          <Icon name="phone" />
          <div>
            <h2>Contact</h2>
            <h3>0205254977</h3>
          </div>
        </div>
        <div className={classes["profile__info"]}>
          <Icon name="book" />
          <div>
            <h2>Program</h2>
            <h3>Bsc Mathematical Science</h3>
          </div>
        </div>
      </div>
      <Button size="btn--block">
        V-Mate <img src={thumbs} className={classes.thumbs} alt="thumbs-up" />
      </Button>
    </Card>
  );
}

export default StudentProfile;
