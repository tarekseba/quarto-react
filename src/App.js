import Grid from "./components/Grid";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import { useDispatch, useSelector } from "react-redux";
import GoModal from "./components/GoModal/GoModal";
import GoModalResetContent from "./components/GoModal/GoModalContent/GoModalResetContent";
import About from "./components/About";

function App() {
  const { resetModal } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  return (
    <>
      {resetModal && (
        <GoModal Content={GoModalResetContent} close={dispatch}></GoModal>
      )}
      <main
        style={{
          width: "100%",
          height: "100%",
          paddingTop: "20px",
          position: "absolute",
          left: "3rem",
        }}
      >
        <Routes>
          <Route exact path="/" element={<Grid />}></Route>
          <Route path="lol" element={<div>LOOL</div>} />
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>

      <Navbar></Navbar>
    </>
  );
}

export default App;

// const [piece, setPiece] = useState({draggable: true})

// const onDragStartHandler = (event) => {
//   console.log("drag | targetId = " + event.target.id);
//   event.dataTransfer.setData("id", event.target.id);
//   console.log(event.target.id);
//   setTimeout(() => {
//     event.target.style.display = "none"
//   }, 0);
// };

// const onPieceDragOverHandler = (event) => {
//   //event.dataTransfer.clear("id");
//   event.target.style.display = "block"
// };

// const onDropHandler = (event) => {
//   console.log("dropped");
//   const id = event.dataTransfer.getData("id");
//   console.log(id);
//   const elt = document.getElementById(id);
//   event.target.appendChild(elt);
// };

// const onDragOverHandler = (event) => {
//   event.preventDefault();
// };

{
  /* <div className="container">
    //   <div className="source">
    //     <div
    //       className="draggable"
    //       draggable={piece.draggable}
    //       onDragStart={onDragStartHandler}
    //       onDragEnd={onPieceDragOverHandler}
    //       id="piece"
    //     ></div>
    //   </div>
    //   <br></br>
    //   <div
    //     className="target"
    //     onDragOver={onDragOverHandler}
    //     onDragEnter={(event) => {
    //       event.preventDefault();
    //     }}
    //     onDrop={onDropHandler}
    //   ></div>
    // </div> */
}
