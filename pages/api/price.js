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

  const latestNewsArrIT = newsIT
    .slice(newsIT.length - 4, newsIT.length - 1)
    .reverse();

  const latestNewsArr = allNews
    .slice(allNews.length - 4, allNews.length - 1)
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
          background-url={emailData.background1}
          vertical-align="middle"
          //   background-size="100%"
          background-size="cover"
          //   padding="30px"
          background-repeat="no-repeat"
        >
          <mj-column vertical-align="middle" width="100%">
            <mj-text
              align="center"
              padding="45px 10px 50px 20px"
              color="#ffffff"
              font-size="33px"
              line-height="51px"
              // font-family="Alice, Helvetica, Arial, sans-serif"
            >
              {/* <Specification1 /> */}
              {/* <h1>{emailData.section1}</h1> */}
              <p>{emailData.section1}</p>
            </mj-text>

            <mj-button
              background-color="#F44E3C"
              color="white"
              padding="70px 20px 30px 20px"
              border-radius="20px"
              href={emailData.productLink}
              font-size="30px"
            >
              {emailData.section2}
            </mj-button>
          </mj-column>
        </mj-section>

        <mj-section background-color="#ffffff" padding="40px 0 0 0">
          <mj-text
            align="center"
            color="#000000"
            font-size="20px"
            // line-height="27px"
            // font-family="Alice, Helvetica, Arial, sans-serif"
          >
            Останні новини:
          </mj-text>
        </mj-section>
        <mj-section background-color="#ffffff">
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
