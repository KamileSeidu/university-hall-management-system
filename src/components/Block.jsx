import classes from "./Block.module.css";

function Block({ block }) {
  const totalNumberOfPeople =
    block.students.length + block.nssPersonnels.length;

  return (
    <div className={classes.block}>
      <h1>{`${block.blockLetter}-Block`}</h1>
      <p>{totalNumberOfPeople}</p>
    </div>
  );
}

export default Block;
