// import React from "react";

export default function LatestNewsProps(newsArr) {

  return (
    <>
      {newsArr.arr.map((item) => (
        <mj-column key={item.id} vertical-align="bottom">
          <mj-section
            background-url={item.background1}
            // vertical-align="bottom"
            background-size="cover"
            // background-size="33%"
            padding="30px 10px"
            background-repeat="no-repeat"
            // background-position-x="right"
          >
            <mj-column>
              <mj-text
                font-weight="bold"
                align="center"
                font-size="16px"
                // color="#f2a03d"
                color="#f27366"
                font-family="helvetica"
              >
                {item.title}
              </mj-text>
              <mj-button
                background-color="#F44E3C"
                border-radius="40px"
                font-family="helvetica"
                font-size="12px"
                href={item.link}
                padding-top="40px"
              >
                READ MORE
              </mj-button>
            </mj-column>
          </mj-section>
        </mj-column>
      ))}
    </>
  );
}
