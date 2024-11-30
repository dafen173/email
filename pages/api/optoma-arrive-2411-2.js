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

        <mj-section background-color="#fff" padding="30px">
          <mj-column padding="0">
            <mj-image
              align="left"
              padding="0px"
              src="https://getvero.s3.amazonaws.com/uploads%2F6f361cb8c6e0b33c89cae59a1d3f944a%2Ffullsize%2F97efc283-9052-4ba3-be45-094efb277225-havana%402x.png"
              width="92px"
            ></mj-image>
          </mj-column>
          <mj-column padding="0">
            <mj-text
              align="right"
              color="#023047"
              font-size="20px"
              padding-bottom="10px"
              padding-left="10px"
              padding-right="0px"
              padding-top="10px"
              padding="10px"
            >
              Link &nbsp; &nbsp;Link &nbsp; Link
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section
          background-url="https://getvero.s3.amazonaws.com/uploads%2F6f361cb8c6e0b33c89cae59a1d3f944a%2Ffullsize%2Fd5ba89c4-3c4e-4bec-9a5f-37a979b7fbfe-hero.jpg"
          padding-bottom="30px"
          padding-left="20px"
          padding-right="20px"
          padding-top="30px"
          padding="20px"
        >
          <mj-column padding="0">
            <mj-spacer height="70px"></mj-spacer>
            <mj-text
              align="center"
              color="#ffffff"
              font-family="'Source Sans Pro', 'Helvetica', 'Arial', sans-serif"
              font-size="40px"
              line-height="1.25"
              padding="10px"
            >
              <strong>Lorem ipsum dolor</strong>
            </mj-text>
            <mj-text
              align="center"
              color="#ffffff"
              font-family="'Source Sans Pro', 'Helvetica', 'Arial', sans-serif"
              font-size="20px"
              line-height="1.5"
              padding-bottom="10px"
              padding-left="40px"
              padding-right="40px"
              padding-top="0px"
              padding="10px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut &nbsp;aliqua.
            </mj-text>
            <mj-spacer height="20px"></mj-spacer>
            <mj-button
              background-color="#FB8500"
              border-radius="0px"
              font-size="20px"
              line-height="1.5"
              padding="0px"
            >
              <strong>CLICK ME</strong>
            </mj-button>
            <mj-spacer height="20px"></mj-spacer>
          </mj-column>
        </mj-section>
        <mj-section
          background-color="#023047"
          padding-bottom="30px"
          padding-left="20px"
          padding-right="20px"
          padding-top="30px"
          padding="20px"
        >
          <mj-column padding="0">
            <mj-text
              align="center"
              color="#ffffff"
              font-family="'Source Sans Pro', 'Helvetica', 'Arial', sans-serif"
              font-size="20px"
              line-height="1.5"
              padding-bottom="10px"
              padding-left="40px"
              padding-right="40px"
              padding-top="10px"
              padding="10px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut &nbsp;aliqua.
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section
          background-color="#023047"
          padding-bottom="20px"
          padding-left="20px"
          padding-right="20px"
          padding-top="0px"
          padding="20px"
        >
          <mj-column padding="0">
            <mj-image
              fluid-on-mobile="true"
              padding="10px"
              src="https://getvero.s3.amazonaws.com/uploads%2F6f361cb8c6e0b33c89cae59a1d3f944a%2Ffullsize%2F136bb958-44a3-42b3-86a4-07adaeb117ff-3%402x.jpg"
            ></mj-image>
            <mj-text
              align="left"
              color="#ffffff"
              font-size="18px"
              line-height="1.5"
              padding-bottom="0px"
              padding-left="10px"
              padding-right="10px"
              padding-top="10px"
              padding="10px"
            >
              <strong>Replace this text</strong>
            </mj-text>
            <mj-text
              color="#fff"
              font-size="16px"
              line-height="1.5"
              padding-bottom="10px"
              padding-left="10px"
              padding-right="10px"
              padding-top="5px"
              padding="10px"
            >
              Consectetur adipiscing elit, sed do eiusmod tempor
            </mj-text>
            <mj-spacer height="20px"></mj-spacer>
            <mj-button
              align="left"
              background-color="#fff"
              border-radius="0px"
              color="#023047"
              font-size="16px"
              line-height="1.5"
              padding-bottom="0px"
              padding-left="10px"
              padding-right="10px"
              padding-top="0px"
              padding="0px"
            >
              <strong>CLICK ME</strong>
            </mj-button>
          </mj-column>
          <mj-column padding="0">
            <mj-image
              fluid-on-mobile="true"
              padding="10px"
              src="https://getvero.s3.amazonaws.com/uploads%2F6f361cb8c6e0b33c89cae59a1d3f944a%2Ffullsize%2F599f92d4-d11c-440a-9d79-4c1dd73c93c2-4%402x.jpg"
            ></mj-image>
            <mj-text
              align="left"
              color="#ffffff"
              font-size="18px"
              line-height="1.5"
              padding-bottom="0px"
              padding-left="10px"
              padding-right="10px"
              padding-top="10px"
              padding="10px"
            >
              <strong>Replace this text</strong>
            </mj-text>
            <mj-text
              color="#fff"
              font-size="16px"
              line-height="1.5"
              padding-bottom="10px"
              padding-left="10px"
              padding-right="10px"
              padding-top="5px"
              padding="10px"
            >
              Consectetur adipiscing elit, sed do eiusmod tempor
            </mj-text>
            <mj-spacer height="20px"></mj-spacer>
            <mj-button
              align="left"
              background-color="#fff"
              border-radius="0px"
              color="#023047"
              font-size="16px"
              line-height="1.5"
              padding-bottom="0px"
              padding-left="10px"
              padding-right="10px"
              padding-top="0px"
              padding="0px"
            >
              <strong>CLICK ME</strong>
            </mj-button>
          </mj-column>
        </mj-section>
        <mj-section
          background-color="#023047"
          padding-bottom="30px"
          padding-left="20px"
          padding-right="20px"
          padding-top="20px"
          padding="20px"
        >
          <mj-column padding="0">
            <mj-image
              fluid-on-mobile="true"
              padding="10px"
              src="https://getvero.s3.amazonaws.com/uploads%2F6f361cb8c6e0b33c89cae59a1d3f944a%2Ffullsize%2F136bb958-44a3-42b3-86a4-07adaeb117ff-3%402x.jpg"
            ></mj-image>
            <mj-text
              align="left"
              color="#ffffff"
              font-size="18px"
              line-height="1.5"
              padding-bottom="0px"
              padding-left="10px"
              padding-right="10px"
              padding-top="10px"
              padding="10px"
            >
              <strong>Replace this text</strong>
            </mj-text>
            <mj-text
              color="#fff"
              font-size="16px"
              line-height="1.5"
              padding-bottom="10px"
              padding-left="10px"
              padding-right="10px"
              padding-top="5px"
              padding="10px"
            >
              Consectetur adipiscing elit, sed do eiusmod tempor
            </mj-text>
            <mj-spacer height="20px"></mj-spacer>
            <mj-button
              align="left"
              background-color="#fff"
              border-radius="0px"
              color="#023047"
              font-size="16px"
              line-height="1.5"
              padding-bottom="0px"
              padding-left="10px"
              padding-right="10px"
              padding-top="0px"
              padding="0px"
            >
              <strong>CLICK ME</strong>
            </mj-button>
          </mj-column>
          <mj-column padding="0">
            <mj-image
              fluid-on-mobile="true"
              padding="10px"
              src="https://getvero.s3.amazonaws.com/uploads%2F6f361cb8c6e0b33c89cae59a1d3f944a%2Ffullsize%2F599f92d4-d11c-440a-9d79-4c1dd73c93c2-4%402x.jpg"
            ></mj-image>
            <mj-text
              align="left"
              color="#ffffff"
              font-size="18px"
              line-height="1.5"
              padding-bottom="0px"
              padding-left="10px"
              padding-right="10px"
              padding-top="10px"
              padding="10px"
            >
              <strong>Replace this text</strong>
            </mj-text>
            <mj-text
              color="#fff"
              font-size="16px"
              line-height="1.5"
              padding-bottom="10px"
              padding-left="10px"
              padding-right="10px"
              padding-top="5px"
              padding="10px"
            >
              Consectetur adipiscing elit, sed do eiusmod tempor
            </mj-text>
            <mj-spacer height="20px"></mj-spacer>
            <mj-button
              align="left"
              background-color="#fff"
              border-radius="0px"
              color="#023047"
              font-size="16px"
              line-height="1.5"
              padding-bottom="0px"
              padding-left="10px"
              padding-right="10px"
              padding-top="0px"
              padding="0px"
            >
              <strong>CLICK ME</strong>
            </mj-button>
          </mj-column>
        </mj-section>
        <mj-section padding="30px">
          <mj-column padding="0">
            <mj-image
              align="left"
              padding="0px"
              src="https://getvero.s3.amazonaws.com/uploads%2F6f361cb8c6e0b33c89cae59a1d3f944a%2Ffullsize%2Fbc3db06d-2961-4fab-bbbc-9e4ec2eb4fa4-oslo%402x.png"
              width="72px"
            ></mj-image>
            <mj-divider
              border-color="#dcdcdc"
              border-width="1px"
              padding-bottom="10px"
              padding-left="0"
              padding-right="0"
              padding-top="20px"
              padding="10px 0"
            ></mj-divider>
            <mj-text
              color="#023047"
              font-size="14px"
              line-height="1.5"
              padding-bottom="10px"
              padding-left="0px"
              padding-right="0px"
              padding-top="10px"
              padding="10px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Tempor incididunt ut labore et dolore magna aliqua.
            </mj-text>
          </mj-column>
        </mj-section>

        <Footer />
      </mj-body>
    </mjml>,
    { validationLevel: "soft" }
  );

  return res.send(html);
}
