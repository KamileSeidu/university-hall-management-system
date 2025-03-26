import Block from "./Block";
import DoughnutChart from "./DoughnutChart";
import classes from "./HallBlocks.module.css";

function HallBlocks({ hallBlocks }) {
  // console.log(rooms);

  console.log(hallBlocks);
  const blocks =
    hallBlocks.length === 0 ? (
      <p>No Blocks data available right now!</p>
    ) : (
      hallBlocks.map((block) => <Block key={block._id} block={block} />)
    );

  const blockData = hallBlocks.map((block) => ({
    blockLetter: block.blockLetter,
    peopleCount: block.students.length + block.nssPersonnels.length,
  }));

  // console.log(blockData);

  return (
    <div className={classes.container}>
      <ul className={classes.blocks}>{blocks}</ul>
      <div className={classes.chat}>
        <DoughnutChart blockData={blockData} />
      </div>
    </div>
  );
}

export default HallBlocks;
