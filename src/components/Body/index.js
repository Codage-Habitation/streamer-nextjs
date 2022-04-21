import Image from "next/image";
import React from "react";
import data from "../../data";


export default function Body({ data }) {
  return (
    <div className="body_section">
      <div className="centered_element">
        <div className="body_detail_text">
          Broadwick Live was founded on a belief in the power of 'live'. We
          connect, inspire and create massive impact through music, culture and
          space.
        </div>
      </div>
      <div className="sticky">
        <div className="sticky_container" id="sticky_target">
          <div
            className="big_heading"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#sticky_target"
          >
            MUSIC
          </div>
        </div>
        <div className="temp_text">
          {data.map(({ img, text }) => (
            <>
              <Image className="scroll_img" src={img} alt="" />
              <p className="sticky_scroll_paragraph">{text}</p>
            </>
          ))}
          <div data-scroll data-scroll-id="paragraph1"></div>
        </div>
      </div>
      <div className="centered_element2">
        <img className="section-img" src='/images/section-banner.png' alt="" />
        <div className="body_detail_text2">
          Through four core divisions, Broadwick Live Group designs, builds and
          operates some of the world{"'"}s most exciting venue and entertainment
          brands.
        </div>
        <div className="find_out_link">
          <a href="#">Find more</a>
        </div>
      </div>
    </div>
  );
}

