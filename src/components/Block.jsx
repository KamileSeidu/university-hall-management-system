import classes from "./Block.module.css";

function Block({ block }) {
  return (
    <div className={classes.block}>
      <h1>{`${block.blockLetter}-Block`}</h1>
      <p>{block.students.length}</p>
    </div>
  );
}

export default Block;
