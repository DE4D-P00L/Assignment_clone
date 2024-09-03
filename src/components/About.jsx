import { useState } from "react";
import img1 from "../assets/Vector.png";

const About = () => {
  const [headerState, setHeaderState] = useState(0);
  return (
    <div className="flex w-full items-stretch h-full justify-between p-10 bg-[#363C43] rounded-[19px] shadow-[5px_5px_8px_3px_rgba(0,0,0,0.21)]">
      <div className="min-h-full hidden sm:flex flex-col justify-between ">
        <img src={img1} alt="" />
        <div className="flex flex-wrap w-8 gap-[2px]">
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
          <div className="bg-[#4A4E54] size-3 rounded-[4px]"></div>
        </div>
        <div className="size-8"></div>
      </div>
      <div className="flex flex-col items-center justify-between p-6 gap-5">
        <div className="flex items-center justify-between w-full bg-[#171717] p-2 rounded-[23px] flex-wrap text-[15px] sm:text-[19px]">
          <button
            className={`w-[195px] h-[59px] font-semibold grid place-content-center ${
              headerState === 0 && "bg-[#363C43]"
            } rounded-[16px] flex-1 min-w-[200px]`}
            onClick={() => setHeaderState(0)}>
            About Me
          </button>
          <button
            className={`w-[195px] h-[59px] font-semibold grid place-content-center ${
              headerState === 1 && "bg-[#363C43]"
            } rounded-[16px] flex-1 min-w-[200px]`}
            onClick={() => setHeaderState(1)}>
            Experiences
          </button>
          <button
            className={`w-[195px] h-[59px] font-semibold grid place-content-center ${
              headerState === 2 && "bg-[#363C43]"
            } rounded-[16px] flex-1 min-w-[200px]`}
            onClick={() => setHeaderState(2)}>
            Recommended
          </button>
        </div>
        {headerState === 0 && (
          <p className="">
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now. <br /> I was born
            and raised in Albany, NY& have been living in Santa Carla for the
            past 10 years my wife Tiffany and my 4 year old twin daughters- Emma
            and Ella. Both of them are just starting school, so my calender is
            usually blocked between 9-10 AM. This is a...
          </p>
        )}
        {headerState === 1 && (
          <p className="">
            <b>Salesforce Developer with 3+ years of experience</b> specializing
            in building custom applications and automating business processes.
            Proficient in Apex, Visualforce, Lightning Web Components, and other
            Salesforce technologies. Passionate about delivering innovative
            solutions that drive business growth and improve efficiency.
          </p>
        )}
        {headerState === 2 && (
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ducimus asperiores tempore labore distinctio vitae eaque deleniti
            sapiente maxime? Adipisci deleniti, quis quasi vitae molestiae
            officia veniam iure libero rem.
          </p>
        )}
      </div>
      <div className="hidden sm:block bg-gradient-to-b from-[#888989] to-[#4A4E54] h-[64px] w-4 shadow-[2px_2px_4px_1px_rgba(0,0,0,0.43)] rounded-full self-center"></div>
    </div>
  );
};
export default About;
