import classes from "./Button.module.css";
import { motion } from "framer-motion";

function Button({
  type = "btn--primary",
  size = "btn-auto",
  children,
  onClick,
}) {
  const classNames = `${classes.btn} ${classes[type]} ${classes[size]}`;
  return (
    <motion.button
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.95, opacity: 0.8 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
      className={classNames}
    >
      {children}
    </motion.button>
  );
}

export default Button;
