import classes from "./Block.module.css";

function Block({ block, onClick }) {
  const totalNumberOfPeople =
    block.students.length + block.nssPersonnels.length;

  return (
    <>
      <li
        onClick={() => onClick(block)}
        className={`${classes.block} ${classes.btn}`}
      >
        <h1>{`${block.blockLetter}-Block`}</h1>
        <p>{totalNumberOfPeople}</p>
      </li>
    </>
  );
}

export default Block;
