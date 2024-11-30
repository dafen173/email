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

export default async function generateEmail(req, res) {
  const data = {
    section1: `Професійні дисплеї OPTOMA - у нас на складі:`,
    section2: "ATOLL ST300 Signature в НАЯВНОСТІ",
    instock: "Професійні дисплеї OPTOMA - В НАЯВНОСТІ",
    background1:
      "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/ccf2a504-e7a6-a697-8f31-f1843fac2761.png",
    background2:
      "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/53cfc668-6548-928a-fe10-cc36a6709448.png",
    background3:
      "https://mcusercontent.com/b0edbacd950268daec5d201ce/images/0c2a7e20-0539-4e73-61f4-a4ed196c71fc.png",
    productLink: "https://www.optomaeurope.com/products/professional-displays",
    productLink2: "https://www.youtube.com/watch?v=6QFjfNgU8Es",
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
              padding="45px 10px 0 20px"
              color="#ffffff"
              font-size="20px"
              line-height="23px"
              font-family="Alice, Helvetica, Arial, sans-serif"
            >
              {/* <Specification1 /> */}
              {data.section1}
            </mj-text>

            <mj-table color="#ffffff" padding="20px 0 250px 0">
              <tr style={{ border: "1px solid #ecedee" }}>
                <th>Модель</th>
                <th>РРЦ, $</th>
                <th>Дилер, $</th>
                <th>Наявність</th>
              </tr>
              <tr>
                <th>N3551K</th>
                <th>1300</th>
                <th>980</th>
                <th>В наявності</th>
              </tr>
              <tr>
                <th>N3651K</th>
                <th>1600</th>
                <th>1200</th>
                <th>В наявності</th>
              </tr>
              <tr>
                <th>N3751K</th>
                <th>2240</th>
                <th>1680</th>
                <th>В наявності</th>
              </tr>
              <tr>
                <th>N3861K</th>
                <th>2880</th>
                <th>2160</th>
                <th>В наявності</th>
              </tr>
              <tr>
                <th>N3981K</th>
                <th>7000</th>
                <th>5200</th>
                <th>В наявності</th>
              </tr>
            </mj-table>
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
        </mj-section>

        <mj-section
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
        </mj-section>

        <mj-section
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
              padding="100px 0 20px 0"
              color="#ffffff"
              font-size="20px"
              line-height="23px"
            >
              N-серія від Optoma – ідеальне рішення для
              <strong> відеостін</strong>.
              <p>
                Налаштуйте свій контент та відображайте його в книжковій або
                альбомній орієнтації на кількох дисплеях.
              </p>
            </mj-text>
            <mj-button
              background-color="#F44E3C"
              color="white"
              padding="20px 20px 30px 20px"
              border-radius="20px"
              href={data.productLink2}
            >
              Дізнайтеся більше
            </mj-button>
          </mj-column>
        </mj-section>

        <mj-section
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
        </mj-section>

        <mj-section
          background-url={data.background3}
          vertical-align="middle"
          background-size="cover"
          padding="30px"
          background-repeat="no-repeat"
          background-position-x="left"
        >
          <mj-column vertical-align="middle" width="100%">
            <mj-text
              align="left"
              padding="100px 0 20px 0"
              color="#ffffff"
              font-size="20px"
              line-height="23px"
            >
              Професійні дисплеї Optoma серії N ідеально підходять для
              <strong> вестибюлів, бізнес-лобі та прийомних</strong>.
              <p>Подайте інформацію ефективним способом.</p>
            </mj-text>
            <mj-button
              background-color="#F44E3C"
              color="white"
              padding="20px 20px 30px 20px"
              border-radius="20px"
              href={data.productLink2}
            >
              Дізнайтеся більше
            </mj-button>
          </mj-column>
        </mj-section>

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
            ></mj-text>

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
