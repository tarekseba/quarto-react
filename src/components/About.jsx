import "./About.css";
const About = () => {
  return (
    <div className="about__container">
      <h1>RULES :</h1>
      <p>
        <span className="about__name">Quarto</span> is a board game for two
        players invented by Swiss mathematician{" "}
        <span className="about__name">Blaise Müller</span>.<br></br>
        <br></br>
        It is published and copyrighted by{" "}
        <span className="about__name">Gigamic</span>.<br></br>
        The game is played on a <span className="about__name">4×4 board</span>.
        There are <span className="about__name">16</span> unique pieces to play
        with, each of which is either:
      </p>
      <ul>
        <li>
          <span className="about__name">Big or Small : </span>
          <div className="piece__container">
            <div className="piece big dark full__dark circle"></div>
          </div>
          <div className="piece__container">
            <div className="piece small dark full__dark circle"></div>
          </div>
        </li>
        <li>
          <span className="about__name">Dark or Light : </span>
          <div className="piece__container">
            <div className="piece big dark full__dark circle"></div>
          </div>
          <div className="piece__container">
            <div className="piece big light full__light circle"></div>
          </div>
        </li>
        <li>
          <span className="about__name">Circular or Square : </span>
          <div className="piece__container">
            <div className="piece big dark full__dark circle"></div>
          </div>
          <div className="piece__container">
            <div className="piece big dark full__dark square"></div>
          </div>
        </li>
        <li>
          <span className="about__name">Solid or Hollow : </span>
          <div className="piece__container">
            <div className="piece big light full__light square"></div>
          </div>
          <div className="piece__container">
            <div className="piece big light hollow__light square"></div>
          </div>
        </li>
      </ul>
      <p>
        Players take turns choosing a piece which the other player must then
        place on the board. A player wins by placing a piece on the board which
        forms a <span className="about__name">horizontal</span>,{" "}
        <span className="about__name">vertical</span>, or{" "}
        <span className="about__name">diagonal row of four pieces</span>, all of
        which have a{" "}
        <span className="about__name">
          common attribute (all light, all circular, etc.)
        </span>
        .<br></br>
        <br></br>A variant rule included in many editions gives a second way to
        win by placing four matching pieces in a{" "}
        <span className="about__name">2×2 square</span>.{" "}
        <span className="about__name">Quarto</span> is distinctive in that there
        is <span className="about__name">only one set of common pieces</span>,
        rather than a set for one player and a different set for the other. It
        is therefore an
        <span className="about__name"> impartial game</span>.
        <br />
        <br />
        <span className="about__name">Source</span> :{" "}
        <a
          className="about__name"
          href="https://en.wikipedia.org/wiki/Quarto_(board_game)"
          style={{ color: "rgb(125 204 171)" }}
        >
          Wikipedia
        </a>
      </p>
    </div>
  );
};

export default About;
