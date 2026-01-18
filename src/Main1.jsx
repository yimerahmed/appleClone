import React from "react";

// Import sections directly from src folder
import Section1 from "./Components/First/Section1";
import Section2 from "./Components/Second/Section2";
import Section3 from "./Components/Third/Section3";
import Section4 from "./Components/Fourth/Section4";
import Section5 from "./Components/Fifth/Section5";
import Section6 from "./Components/Sixth/Section6";
import AlertSection from "./Components/Alert/AlertSection";
import YoutubeVideos from "./Components/Youtube/YoutubeVideos";
const Main1 = () => {
  return (
    <div>
      <AlertSection/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <YoutubeVideos />
    </div>
  );
};

export default Main1;
