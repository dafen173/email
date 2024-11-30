// pages/api/generate-email.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LatestNews from "@/components/LatestNews";
import LatestNewsIT from "@/components/LatestNewsIT";
import LatestNewsProps from "@/components/LatestNewsProps";
import Specification1 from "@/components/Specification1";
import {
  render,
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
} from "mjml-react";

export default async function generateEmail(req, res) {
  // const data = {
  //   section1: `Інтерактивні дисплеї OPTOMA - доступні до замовлень`,
  //   section2: "",
  //   instock: "Інтерактивні дисплеї OPTOMA - доступні до замовлень",
  //   background1:
  //     "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/ccf2a504-e7a6-a697-8f31-f1843fac2761.png",
  //   background2:
  //     "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/53cfc668-6548-928a-fe10-cc36a6709448.png",
  //   background3:
  //     "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/0c2a7e20-0539-4e73-61f4-a4ed196c71fc.png",
  //   productLink:
  //     "https://www.optomaeurope.com/products/interactive-flat-panel-displays",
  //   productLink2: "",
  // };

  const response = await fetch("http://localhost:3001/arrnews", {
    next: {
      revalidate: 10,
    },
  });
  const allNews = await response.json();
  const emailData = allNews[allNews.length - 1];
  // console.log(emailData);

  const newsIT = allNews.filter(checkItNews);
  function checkItNews(item) {
    return item.hasOwnProperty("itnews");
  }

  const newsWithoutPrice = allNews.filter(checkNewsWithoutPrice);
  function checkNewsWithoutPrice(item) {
    return item.hasOwnProperty("notprice");
  }
  // console.log(newsWithoutPrice)

  const latestNewsArrIT = newsIT
    .slice(newsIT.length - 4, newsIT.length - 1)
    .reverse();

  const latestNewsArr = newsWithoutPrice
    .slice(newsWithoutPrice.length - 4, newsWithoutPrice.length - 1)
    .reverse();

  const { html, errors } = render(
    <mjml>
      <mj-head>
        <mj-font
          name="Alice"
          href="https://fonts.googleapis.com/css?family=Alice"
        ></mj-font>
        <mj-font
          name="Roboto"
          href="https://fonts.googleapis.com/css?family=Roboto:400,700"
        ></mj-font>
        <mj-attributes>
          <mj-all
            font-family="Roboto, Helvetica, Arial, sans-serif"
            padding="0px"
          ></mj-all>
          <mj-text
            font-weight="400"
            font-size="14px"
            color="#000000"
            line-height="21px"
          ></mj-text>
        </mj-attributes>
      </mj-head>

      <mj-body background-color="#EAE8E5">
        <Header />

        <mj-section
          background-color="#ffffff"
          background-url={emailData.background1}
          background-position-y="70%"
          vertical-align="middle"
          //   background-size="100%"
          background-size="cover"
          //   padding="30px"
          background-repeat="no-repeat"
          border="20px solid #FF0000"
          // border-left="20px solid #FF0000"
          // border-right="20px solid #FF0000"
        >
          <mj-column vertical-align="middle" width="100%" padding-top="120px">
            <mj-text
              align="left"
              padding="10px 10px 10px 40px"
              color="#ffffff"
              font-size="23px"
              line-height="27px"
              // font-family="Alice, Helvetica, Arial, sans-serif"
            >
              {/* <Specification1 /> */}
              {/* <h3>{emailData.section1}</h3> */}
              <p>
                <strong>{emailData.section1}</strong>
              </p>
              {/* <p>{emailData.section2}</p> */}
              {/* <Specification1 /> */}
            </mj-text>
          </mj-column>

          <mj-column vertical-align="middle" width="100%">
            <mj-text
              align="left"
              color="#ffffff"
              font-size="20px"
              line-height="25px"
              padding-left="40px"
              // font-family="Alice, Helvetica, Arial, sans-serif"
            >
              <Specification1 />
            </mj-text>

            <mj-button
              align="center"
              background-color="#F44E3C"
              color="white"
              padding="20px 20px 30px 20px"
              border-radius="20px"
              href={emailData.productLink}
            >
              Дізнайтеся більше
            </mj-button>
          </mj-column>
        </mj-section>

        <mj-section
          background-color="#ffffff"
          padding="40px 0 0 0"
          border-left="20px solid #FF0000"
          border-right="20px solid #FF0000"
        >
          <mj-column vertical-align="middle" width="100%">
            <mj-text
              align="center"
              color="#000000"
              font-size="20px"
              // line-height="27px"
              // font-family="Alice, Helvetica, Arial, sans-serif"
            >
              Останні новини:
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section
          background-color="#ffffff"
          border-left="20px solid #FF0000"
          border-right="20px solid #FF0000"
          border-bottom="20px solid #FF0000"
        >
          {/* <LatestNews /> */}
          {/* <LatestNewsIT /> */}
          <LatestNewsProps arr={latestNewsArr} />
          {/* <LatestNewsProps arr={latestNewsArrIT} /> */}
        </mj-section>

        <Footer />
      </mj-body>
    </mjml>,
    { validationLevel: "soft" }
  );

  return res.send(html);
}
