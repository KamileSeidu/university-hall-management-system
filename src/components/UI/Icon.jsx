import classes from "./Icon.module.css";
import barcode from "../../assets/profileIcons/barcode.svg";
import book from "../../assets/profileIcons/book.svg";
import house from "../../assets/profileIcons/house.svg";
import phone from "../../assets/profileIcons/phone.svg";

function Icon({ name }) {
  let icon;
  if (name === "barcode") {
    icon = barcode;
  }
  if (name === "book") {
    icon = book;
  }
  if (name === "house") {
    icon = house;
  }
  if (name === "phone") {
    icon = phone;
  }
  return (
    <span className={classes.icon}>
      <img src={icon} alt="icon" />
    </span>
  );
}

export default Icon;
