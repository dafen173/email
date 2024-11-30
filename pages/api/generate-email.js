// pages/api/generate-email.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LatestNews from "@/components/LatestNews";
import LatestNewsIT from "@/components/LatestNewsIT";
import Specification1 from "@/components/Specification1";
import {
  render,
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
} from "mjml-react";

// import LinkToPost from "@/components/email/LinkToPost";

export default async function generateEmail(req, res) {
  const data = {
    section1: `yooooooo`,
    section2: "ATOLL ST300 Signature в НАЯВНОСТІ",
    instock: "OPTOMA GT2000HDR - РРЦ $1320 - В НАЯВНОСТІ",
    background1:
      "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/a511958d-38d1-78d3-e123-f4f79b4c3258.png",
    background2:
      "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/c9b3dfb0-4b1a-e3fd-5e91-f3108a2b8dd5.png",
    background3:
      "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/e033f897-2786-45b6-499a-0621b8dd06d0.png",
    productLink: "https://www.optomaeurope.com/product/gt2000hdr",
  };

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
          background-url={data.background1}
          vertical-align="middle"
          //   background-size="100%"
          background-size="cover"
          //   padding="30px"
          background-repeat="no-repeat"
        >
          <mj-column vertical-align="middle" width="100%">
            <mj-text
              align="left"
              padding="15px 10px 0 20px"
              color="#ffffff"
              font-size="20px"
              line-height="23px"
              font-family="Alice, Helvetica, Arial, sans-serif"
            >
              <Specification1 />
              {/* {data.section1} */}
            </mj-text>
          </mj-column>
        </mj-section>

        {/* <mj-section
          background-color="#2f323b"
          padding-bottom="20px"
          padding-top="20px"
        >
          <mj-column>
            <mj-text
              align="center"
              color="#fff"
              font-size="17px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
              line-height="33px"
            >
              {data.instock}
            </mj-text>
          </mj-column>
        </mj-section> */}

        {/* <mj-section
          background-url={data.background2}
          vertical-align="middle"
          background-size="cover"
          padding="30px"
          background-repeat="no-repeat"
          background-position-x="left"
        >
          <mj-column vertical-align="middle" width="100%">
            <mj-text
              align="left"
              padding="100px 10px 10px 10px"
              color="#FFFFFF"
              font-size="16px"
              line-height="37px"
              font-family="Alice, Helvetica, Arial, sans-serif"
            >
            </mj-text>

            <mj-button
              background-color="#F44E3C"
              color="white"
              padding="20px 20px 30px 20px"
              border-radius="20px"
              href={data.productLink}
            >
              Дізнайтеся більше
            </mj-button>
          </mj-column>
        </mj-section> */}

        {/* <mj-section
          background-color="#2f323b"
          padding-bottom="20px"
          padding-top="20px"
        >
          <mj-column>
            <mj-text
              align="center"
              color="#fff"
              font-size="17px"
              padding-left="25px"
              padding-right="25px"
              padding-bottom="0px"
              padding-top="0"
              line-height="33px"
            >
              {data.instock}
            </mj-text>
          </mj-column>
        </mj-section> */}

        {/* <mj-section
          background-url={data.background3}
          vertical-align="middle"
          background-size="cover"
          padding="30px"
          background-repeat="no-repeat"
          background-position-x="right"
        >
          <mj-column vertical-align="middle" width="100%">
            <mj-text
              align="right"
              color="#FFFFFF"
              font-size="16px"
              line-height="27px"
              font-family="Alice, Helvetica, Arial, sans-serif"
            >
            </mj-text>

            <mj-button
              background-color="#F44E3C"
              color="white"
              padding="20px 20px 30px 20px"
              border-radius="20px"
              href={data.productLink}
            >
              Дізнайтеся більше
            </mj-button>
          </mj-column>
        </mj-section> */}

        <mj-section background-color="#ffffff" padding="40px 0 0 0">
          <mj-text
            align="center"
            color="#000000"
            font-size="20px"
            // line-height="27px"
            font-family="Alice, Helvetica, Arial, sans-serif"
          >
            Останні новини:
          </mj-text>
        </mj-section>

        <mj-section background-color="#ffffff">
          {/* <LatestNews /> */}

          <LatestNewsIT />
        </mj-section>

        <Footer />
      </mj-body>
    </mjml>,

    //    <Mjml>
    //       <MjmlBody width={500}>
    //         <MjmlSection backgroundColor="#EFEFEF">
    //           <MjmlColumn>
    //             <MjmlText fontSize="21px">YOOOOOOOOOO</MjmlText>
    //           </MjmlColumn>
    //         </MjmlSection>
    //       </MjmlBody>
    //     </Mjml>

    { validationLevel: "soft" }
  );

  //   if (errors) {
  //     return res.status(500).json({
  //       errors,
  //     });
  //   }

  return res.send(html);
}

// // pages/api/generate-email.js
// import compileMjml from 'mjml'

// export default async function generateEmail(req, res) {
//   const {html} = compileMjml(`
//     <mjml>
//       <mj-body width="500">
//         <mj-section background-color="#EFEFEF">
//           <mj-column>
//             <mj-text font-size="20px">
//               Hello World!999
//             </mj-text>
//           </mj-column>
//         </mj-section>
//       </mj-body>
//     </mjml>
//   `)

//   return res.send(html)
// }
