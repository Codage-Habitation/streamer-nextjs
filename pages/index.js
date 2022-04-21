import React, { useEffect } from "react";

import { RemoveScrollBar } from "react-remove-scroll-bar";

import "locomotive-scroll/dist/locomotive-scroll.css";

import Header from "../src/components/Header";
import Body from "../src/components/Body";
import Footer from "../src/components/Footer";
import data from "../src/data";
export default function App({ data }) {
  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      var scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
      });

      scroll.on("scroll", (args) => {
        if (typeof args.currentElements["black"] === "object") {
          let progress = args.currentElements["black"].progress;
          if (progress > 0.92) {
            document.querySelector("body").style.backgroundColor = "#0C0C0C";
            document.querySelector("body").style.color = "white";
          } else {
            document.querySelector("body").style.backgroundColor = "#F6F6F4";
            document.querySelector("body").style.color = "black";
          }
        } else if (typeof args.currentElements["paragraph1"] === "object") {
          let progress = args.currentElements["paragraph1"].progress;
          if (progress < 0.65) {
            document.querySelector(".big_heading").innerHTML = "MUSIC";
            document.querySelector(".big_heading").style.marginLeft = "16rem";
          } else if (progress > 0.65) {
            document.querySelector(".big_heading").innerHTML = "CULTURE";
            document.querySelector(".big_heading").style.marginLeft = "2rem";
            document.querySelector(".big_heading").style.letterSpacing = "-4px";
          }
        } else if (typeof args.currentElements["paragraph2"] === "object") {
          let progress = args.currentElements["paragraph2"].progress;
          if (progress < 0.65) {
            document.querySelector(".big_heading").innerHTML = "CULTURE";
            document.querySelector(".big_heading").style.marginLeft = "2rem";
            document.querySelector(".big_heading").style.letterSpacing = "-4px";
          } else if (progress > 0.95) {
            document.querySelector(".big_heading").innerHTML = "SPACE";
            document.querySelector(".big_heading").style.marginLeft = "16rem";
          }
        }
      });
    });
  }, []);
  return (
    <>
      <RemoveScrollBar />
      <div className="App" data-scroll-container>
        <Header
          data-scroll
          data-scroll-section
          data-scroll-repeat
          data-scroll-speed="1"
        />
        <Body
          data-scroll
          data-scroll-section
          data-scroll-repeat
          data-scroll-speed="1"
          data={data}
        />
        <Footer
          data-scroll
          data-scroll-section
          data-scroll-repeat
          data-scroll-speed="1"
        />
      </div>
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      data: data,
    },
  };
}
