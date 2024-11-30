// import React from "react";

export default async function LatestNews() {
  // const response = await fetch("http://localhost:3001/products", {
  //   next: {
  //     revalidate: 10,
  //   },
  // });
  // const allNews = await response.json();

  // const latestNewsArr = allNews
  //   .slice(arrNews.length - 4, arrNews.length - 1)
  //   .reverse();

  const arrNews = [
    {
      img: "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/e1a45d5f-f236-2e00-e004-41f896751422.png",
      title: "Music Hall MMF Mark1 WALNUT - В НАЯВНОСТІ",
      link: "https://mailchi.mp/3cd08e5e33ed/2323-13839534",
      id: 1,
    },
    {
      img: "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/dc89c2fe-55a8-ab04-3bda-a6c56579cf67.png",
      title: "Music Hall MMF-7.3 SE PIANO - В НАЯВНОСТІ",
      link: "https://mailchi.mp/50661f135c65/2323-13839586",
      id: 2,
    },
    {
      img: "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/f12327fa-bf70-5d68-08bf-e94ba3e0a549.jpg",
      title: "ATOLL ST300 Signature - В НАЯВНОСТІ",
      link: "https://mailchi.mp/ef830e14b9b0/panasonic-13840785",
      id: 3,
    },
    {
      img: "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/258aa5f8-4a58-3425-3163-db98654b1263.png",
      title: "OPTOMA GT2000HDR - В НАЯВНОСТІ",
      link: "https://mailchi.mp/9956ab3dfd0c/ctccapital",
      id: 4,
    },
    {
      img: "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/654ec6f3-02d0-b50a-3273-7954b0c032a6.jpg",
      title: "Вантаж акустики від TRIANGLE",
      link: "https://mailchi.mp/69bb44a59eb8/ctccapital-13840959",
      id: 5,
    },
    {
      img: "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/a511958d-38d1-78d3-e123-f4f79b4c3258.png",
      title: "Вантаж проекторів від OPTOMA",
      link: "https://mailchi.mp/60bceed95891/ctccapital-13840987",
      id: 6,
    },
    {
      img: "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/53cfc668-6548-928a-fe10-cc36a6709448.png",
      title: "Професійні дисплеї OPTOMA у нас на складі",
      link: "https://mailchi.mp/ebc7b15236c0/ctccapital-13841113",
      id: 7,
    },
  ];

  const latestNewsArr = arrNews
    .slice(arrNews.length - 4, arrNews.length - 1)
    .reverse();

  return (
    <>
      {latestNewsArr.map((item) => (
        <mj-column key={item.id} vertical-align="bottom">
          <mj-section
            background-url={item.img}
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

// export default LatestNews;
