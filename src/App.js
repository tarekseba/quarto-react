import Grid from "./components/Grid";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import GoModal from "./components/GoModal/GoModal";
import GoModalResetContent from "./components/GoModal/GoModalContent/GoModalResetContent";
import About from "./components/About";
import GoModalDifficulty from "./components/GoModal/GoModalContent/GoModalDifficulty";
import { gameActions } from "./store/game";

function App() {
  const { resetModal, difficultyModal, difficulty } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();
  return (
    <>
      {resetModal && (
        <GoModal
          Content={GoModalResetContent}
          close={dispatch}
          action={gameActions.setResetModal}
        ></GoModal>
      )}
      {difficultyModal && (
        <GoModal
          Content={GoModalDifficulty}
          close={dispatch}
          action={gameActions.setDifficultyModal}
          difficulty={difficulty}
          difficultyAction={gameActions.setDifficulty}
        ></GoModal>
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