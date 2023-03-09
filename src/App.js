import "./styles.css";
import { useState } from "react";
import CardsDisplay from "./CardsDisplay";
// import "swiper/components/effect-coverflow/effect-coverflow.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import Appx from "./temp2";
import Navbar from "./Navbar";

export default function App() {
  const [techbold, settechbold] = useState("bold");
  const [ntechbold, setntechbold] = useState("normal");
  const [techborder, settechborder] = useState("solid blue");
  const [ntechborder, setntechborder] = useState("none");

  const [title, settitle] = useState("Tech");
  const openNTech = (e) => {
    e.preventDefault();
    settitle("NTech");
    settechbold("normal");
    setntechbold("bold");
    settechborder("none");
    setntechborder("solid blueviolet");
  };
  const openTech = (e) => {
    e.preventDefault();
    settitle("Tech");
    setntechbold("normal");
    settechbold("bold");
    setntechborder("none");
    settechborder("solid blueviolet");
  };
  return (
    <>
      {/* <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div> */}


      <div className="Nav-Section">
      <Navbar />
      </div>
      


      <div className="UpperHeadContainer">
      <div className="headcontainer">
        <div className="EventsHead">
          <p
            style={{
              fontWeight: techbold,
              borderBottom: techborder,
              borderColor: "blueviolet"
            }}
            className="EventType"
            onClick={openTech}
          >
            Technical Events
          </p>
          <p
            style={{
              fontWeight: ntechbold,
              borderBottom: ntechborder,
              borderColor: "blueviolet"
            }}
            className="EventType"
            onClick={openNTech}
          >
            Non-Technical Events
          </p>
        </div>
      </div>
      </div>




      <div className="SwipeContainer">
        <CardsDisplay EventType={title} />
        {/* <Appx /> */}
      </div>
    </>
  );
}
