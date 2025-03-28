// import { useState } from "react";
// import Block from "./Block";
// import DoughnutChart from "./DoughnutChart";
// import classes from "./HallBlocks.module.css";
// import PrintBlockData from "./PrintBlockData";

// function HallBlocks({ hallBlocks }) {
//   // console.log(rooms);

//   const [selectedBlock, setSelectedBlock] = useState(null);

//   // const handleBlockClick = (block) => {
//   //   setSelectedBlock(block);
//   //   console.log(block);
//   // };

//   console.log(hallBlocks);

//   // const blocks =
//   //   hallBlocks.length === 0 ? (
//   //     <p>No Blocks data available right now!</p>
//   //   ) : (
//   //     hallBlocks.map((block) => <Block key={block._id} block={block} />)
//   //   );

//   const blocks = hallBlocks.map((block) => (
//     <Block
//       key={block._id}
//       block={block}
//       // onClick={() => handleBlockClick(block)}
//       onClick={() => handlePrint(block)}
//     />
//   ));

//   const blockData = hallBlocks.map((block) => ({
//     blockLetter: block.blockLetter,
//     peopleCount: block.students.length + block.nssPersonnels.length,
//   }));

//   const handlePrint = (block) => {
//     setSelectedBlock(block);
//     // Clean up any existing print iframes
//     const existingFrames = document.querySelectorAll(
//       "iframe[data-print-frame]"
//     );
//     existingFrames.forEach((frame) => frame.remove());

//     const printFrame = document.createElement("iframe");
//     printFrame.style.display = "none";
//     printFrame.setAttribute("data-print-frame", "true");
//     document.body.appendChild(printFrame);

//     const contentToPrint = document.getElementById("printable-content");

//     if (!contentToPrint) {
//       console.error("Printable content not found");
//       return;
//     }

//     // Get all the classes from the original element
//     // const originalClasses = [
//     //   ...contentToPrint.getElementsByClassName("table-list"),
//     // ];

//     // Create a unique class prefix for print
//     const printPrefix = "print-document";

//     // Copy the content and replace classes
//     const contentCopy = contentToPrint.cloneNode(true);
//     contentCopy.classList.add(printPrefix);

//     // Define the styles matching your module.css
//     const printStyles = `
//         @page {
//           margin: 0;
//           size: A4;
//         }

//         body {
//           // margin: 0;
//           // padding: 2rem;
//         }

//         img {
//           width: 250px !important;
//           height: auto !important;
//         }

//         hr {
//           display: block;
//           content: "";
//           margin-top: 1rem;
//           border: 1px solid #ccc;
//         }

//         .header {
//           display: flex !important;
//           flex-direction: column !important;
//           justify-content: start !important;
//           align-items: center !important;

//         }

//         .header-text {
//           text-align: center;
//           margin-bottom: 0.5rem;
//         }

//         .header h1 {
//           color: red;
//           margin: 0;
//         }

//         .header-text > h1:first-child {
//           font-size: 5rem !important;
//           font-weight: 800 !important;
//         }

//         .header-text > h1:last-child {
//           margin-top: 0.5rem !important;
//           margin-left: 0.2rem !important;
//           font-size: 2.5rem !important;
//           font-weight: 400 !important;
//         }

//         .header h2 {
//           font-size: 1.4rem !important;
//           font-weight: 300 !important;
//           text-decoration: underline !important;
//           margin-bottom: 0.5rem !important;

//         }

//         ul {
//           list-style-type: none !important;
//           padding: 0 !important;
//           margin: 0 !important;
//         }

//         .table-list {
//           display: grid !important;
//           grid-template-columns: 120px 250px 250px 110px 140px 120px !important;
//           gap: 0.5rem !important;
//           margin-bottom: 0.5rem !important;
//           padding: 0.5rem !important;
//         }

//         .table-list h1 {
//           margin: 0 !important;
//           font-size: 1rem !important;
//           padding-right: 1rem !important;
//           font-weight: 400 !important;
//         }

//         .table-list p {
//           margin: 0 !important;
//           font-size: 0.9rem !important;
//         }

//         @media print {
//           body {
//             -webkit-print-color-adjust: exact !important;
//             print-color-adjust: exact !important;
//             padding: 20px !important;

//           }

//           .main {
//             margin: 0 !important;
//             // padding: 20px !important;
//             // padding-top: 50px !important;
//           }
//         }
//       `;

//     // Write the content to the iframe with styles
//     printFrame.contentWindow.document.open();
//     printFrame.contentWindow.document.write(`
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <title>Students Record</title>
//             <style>${printStyles}</style>
//           </head>
//           <body>
//             ${contentToPrint.outerHTML}
//           </body>
//         </html>
//       `);
//     printFrame.contentWindow.document.close();

//     // Wait for images to load before printing
//     printFrame.contentWindow.onload = () => {
//       setTimeout(() => {
//         printFrame.contentWindow.print();

//         // Cleanup after printing
//         setTimeout(() => {
//           if (document.body.contains(printFrame)) {
//             document.body.removeChild(printFrame);
//           }
//         }, 1000);
//       }, 500);
//     };
//   };

//   // console.log(blockData);

//   return (
//     <div className={classes.container}>
//       <div>
//         <ul className={classes.blocks}>{blocks}</ul>
//         <div style={{ display: "none" }}>
//           {selectedBlock && <PrintBlockData block={selectedBlock} />}
//         </div>
//       </div>
//       <div className={classes.chat}>
//         <DoughnutChart blockData={blockData} />
//       </div>
//     </div>
//   );
// }

// export default HallBlocks;

import { useState, useRef } from "react";
import Block from "./Block";
import DoughnutChart from "./DoughnutChart";
import classes from "./HallBlocks.module.css";
import PrintBlockData from "./PrintBlockData";

function HallBlocks({ hallBlocks }) {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const printRef = useRef(null);
  const printFrameRef = useRef(null);

  const handlePrint = (block) => {
    // Ensure we always use the latest block data
    setSelectedBlock(block);

    // Remove any existing print iframe
    if (printFrameRef.current) {
      document.body.removeChild(printFrameRef.current);
      printFrameRef.current = null;
    }

    // Create a new print iframe
    const printFrame = document.createElement("iframe");
    printFrame.style.display = "none";
    printFrame.setAttribute("data-print-frame", "true");
    printFrameRef.current = printFrame;
    document.body.appendChild(printFrame);

    // Wait a moment to ensure the new block data is rendered
    setTimeout(() => {
      const contentToPrint = printRef.current;

      if (!contentToPrint) {
        console.error("Printable content not found");
        return;
      }

      // Your existing print styles
      const printStyles = `
              @page {
          margin: 0;
          size: A4;
        }

        body {
          // margin: 0;
          // padding: 2rem;
        }

        img {
          width: 250px !important;
          height: auto !important;
        }

        hr {
          display: block;
          content: "";
          margin-top: 0.5rem;
          border: 1px solid #ccc;
        }

        .header {
          display: flex !important;
          flex-direction: column !important;
          justify-content: start !important;
          align-items: center !important;

        }

        .header-text {
          text-align: center;
          margin-bottom: 0.5rem;
        }

        .header h1 {
          color: red;
          margin: 0;
        }

        .header-text > h1:first-child {
          font-size: 5rem !important;
          font-weight: 800 !important;
        }

        .header-text > h1:last-child {
          margin-top: 0.5rem !important;
          margin-left: 0.2rem !important;
          font-size: 2.5rem !important;
          font-weight: 400 !important;
        }

        .header h2 {
          font-size: 1.4rem !important;
          font-weight: 300 !important;
          text-decoration: underline !important;
          margin-bottom: 0.5rem !important;

        }

        ul {
          list-style-type: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        .table-list {
          display: grid !important;
          grid-template-columns: 130px 250px 250px 110px 140px 120px !important;
          gap: 0.5rem !important;
          margin-bottom: 0.5rem !important;
          padding: 0.5rem !important;
        }

        .table-list h1 {
          margin: 0 !important;
          font-size: 1rem !important;
          padding-right: 1rem !important;
          font-weight: 400 !important;
        }

        .table-list p {
          margin: 0 !important;
          font-size: 0.9rem !important;
        }

        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            padding: 20px !important;

          }

          .main {
            margin: 0 !important;
            // padding: 20px !important;
            // padding-top: 50px !important;
          }
        }
      `;

      // Ensure unique content by adding a timestamp
      const uniqueContent = contentToPrint.outerHTML + `<!-- ${Date.now()} -->`;

      // Write the content to the iframe with styles
      printFrame.contentWindow.document.open();
      printFrame.contentWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Block Data</title>
            <style>${printStyles}</style>
          </head>
          <body>
            ${uniqueContent}
          </body>
        </html>
      `);
      printFrame.contentWindow.document.close();

      // Wait for images to load before printing
      printFrame.contentWindow.onload = () => {
        setTimeout(() => {
          printFrame.contentWindow.print();

          // Cleanup after printing
          setTimeout(() => {
            if (document.body.contains(printFrame)) {
              document.body.removeChild(printFrame);
              printFrameRef.current = null;
            }
          }, 1000);
        }, 500);
      };
    }, 100);
  };

  const blocks = hallBlocks.map((block) => (
    <Block key={block._id} block={block} onClick={() => handlePrint(block)} />
  ));

  const blockData = hallBlocks.map((block) => ({
    blockLetter: block.blockLetter,
    peopleCount: block.students.length + block.nssPersonnels.length,
  }));

  return (
    <div className={classes.container}>
      <div>
        <ul className={classes.blocks}>{blocks}</ul>
        <div style={{ display: "none" }}>
          {selectedBlock && (
            <div ref={printRef}>
              <PrintBlockData block={selectedBlock} />
            </div>
          )}
        </div>
      </div>
      <div className={classes.chat}>
        <DoughnutChart blockData={blockData} />
      </div>
    </div>
  );
}

export default HallBlocks;
