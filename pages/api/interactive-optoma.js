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
  console.log(emailData);

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
              align="left"
              padding="45px 10px 20px 20px"
              color="#ffffff"
              font-size="20px"
              line-height="23px"
              font-family="Alice, Helvetica, Arial, sans-serif"
            >
              {/* <Specification1 /> */}
              {emailData.section1}
            </mj-text>

            <mj-table color="#ffffff" padding="20px 0 250px 0">
              <tr style={{ border: "1px solid #ecedee" }}>
                <th>Модель</th>
                <th>Діагональ, дюйми</th>
                <th>РРЦ, $</th>
                <th>Дилер, $</th>
              </tr>
              <tr>
                <th>3652RK</th>
                <th>65</th>
                <th>2200</th>
                <th>1650</th>
              </tr>
              <tr>
                <th>3752RK</th>
                <th>75</th>
                <th>2760</th>
                <th>2070</th>
              </tr>
              <tr>
                <th>3862RK</th>
                <th>86</th>
                <th>3500</th>
                <th>2600</th>
              </tr>
              <tr>
                <th>5653RK</th>
                <th>65</th>
                <th>2760</th>
                <th>2070</th>
              </tr>
              <tr>
                <th>5753RK</th>
                <th>75</th>
                <th>3200</th>
                <th>2400</th>
              </tr>
              <tr>
                <th>5863RK</th>
                <th>86</th>
                <th>3920</th>
                <th>2940</th>
              </tr>
            </mj-table>
            <mj-button
              background-color="#F44E3C"
              color="white"
              padding="20px 20px 30px 20px"
              border-radius="20px"
              href={emailData.link}
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
              {emailData.instock}
            </mj-text>
          </mj-column>
        </mj-section>

        <mj-section
          background-url={emailData.background2}
          vertical-align="middle"
          //   background-size="100%"
          background-size="cover"
          //   padding="30px"
          background-repeat="no-repeat"
        >
          <mj-column vertical-align="middle" width="100%">
            <mj-text
              align="center"
              padding="45px 10px 0 20px"
              color="#ffffff"
              font-size="20px"
              line-height="23px"
              font-family="Alice, Helvetica, Arial, sans-serif"
            >
              5-Series
            </mj-text>

            <mj-table color="#ffffff" padding="20px 20px 25px 30px">
              <tr>
                <th>Display</th>
              </tr>
              <tr>
                <td>Size (diagonal)</td>
                <td>65&quot;/ 75&quot;/ 86&quot;</td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>3840(H)*2160(V) Pixel (UHD 4K)</td>
              </tr>
              <tr>
                <td>Brightness</td>
                <td>420 cd/m2</td>
              </tr>
              <tr>
                <td>Contrast ratio</td>
                <td>5,000:1</td>
              </tr>
              <tr>
                <td>Contrast ratio (dynamic)</td>
                <td>6,000:1</td>
              </tr>

              <tr>
                <th>Physical spec</th>
              </tr>
              <tr>
                <td>Inputs</td>
                <td>
                  4 x HDMI 2.0, 1 x DisplayPort, 1 x Audio 3.5mm, 1 x USB-A
                  service, 4 x USB 3.0, 1 x RS232, 1 x RJ45, 2 x USB-C, 1 x OPS
                  slot
                </td>
              </tr>
              <tr>
                <td>Outputs</td>
                <td>
                  1 x HDMI 2.0, 1 x S/PDIF, 1 x Audio 3.5mm, 2 x USB-B
                  interactive, 1 x RJ45
                </td>
              </tr>

              <tr>
                <th>Operation System</th>
              </tr>
              <tr>
                <td>System version</td>
                <td>Android 13</td>
              </tr>
              <tr>
                <td>CPU</td>
                <td>Octa-core (A76*4 + A55*4)</td>
              </tr>
              <tr>
                <td>GPU</td>
                <td>Mali G610 MC4</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>8GB</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>64GB</td>
              </tr>
            </mj-table>
            <mj-button
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
              {emailData.instock}
            </mj-text>
          </mj-column>
        </mj-section>

        <mj-section
          background-url={emailData.background2}
          vertical-align="middle"
          //   background-size="100%"
          background-size="cover"
          //   padding="30px"
          background-repeat="no-repeat"
        >
          <mj-column vertical-align="middle" width="100%">
            <mj-text
              align="center"
              padding="45px 10px 0 20px"
              color="#ffffff"
              font-size="20px"
              line-height="23px"
              font-family="Alice, Helvetica, Arial, sans-serif"
            >
              3-Series
            </mj-text>

            <mj-table color="#ffffff" padding="20px 20px 25px 30px">
              <tr>
                <th>Display</th>
              </tr>
              <tr>
                <td>Size (diagonal)</td>
                <td>
                  <td>65&quot;/ 75&quot;/ 86&quot;</td>
                </td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>3840x2160</td>
              </tr>
              <tr>
                <td>Brightness</td>
                <td>400</td>
              </tr>
              <tr>
                <td>Contrast ratio</td>
                <td>1,200:1</td>
              </tr>
              <tr>
                <td>Contrast ratio (dynamic)</td>
                <td>5,000:1</td>
              </tr>

              <tr>
                <th>Physical spec</th>
              </tr>

              <tr>
                <td>Inputs</td>
                <td>
                  3 x HDMI 2.0, 1 x VGA, 1 x DisplayPort, 1 x Audio 3.5mm, 3 x
                  USB 2.0, 2 x USB 3.0, 1 x RJ45, 1 x USB-C, 1 x Microphone, 1 x
                  OPS slot
                </td>
              </tr>
              <tr>
                <td>Outputs</td>
                <td>1 x HDMI 2.0, 1 x S/PDIF, 1 x Audio 3.5mm, 1 x RJ45</td>
              </tr>

              <tr>
                <th>Operation System</th>
              </tr>
              <tr>
                <td>System version</td>
                <td>Android 13</td>
              </tr>
              <tr>
                <td>CPU</td>
                <td>Quad-core A55</td>
              </tr>
              <tr>
                <td>GPU</td>
                <td>Dual-core A52</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>4GB</td>
              </tr>
              <tr>
                <td>Storage</td>
                <td>32GB</td>
              </tr>
            </mj-table>
            <mj-button
              background-color="#F44E3C"
              color="white"
              padding="20px 20px 30px 20px"
              border-radius="20px"
              href={emailData.productLink2}
            >
              Дізнайтеся більше
            </mj-button>
          </mj-column>
        </mj-section>

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
          {/* <LatestNewsIT /> */}
          {/* <LatestNewsProps arr={latestNewsArr} /> */}
          <LatestNewsProps arr={latestNewsArrIT} />
        </mj-section>

        <Footer />
      </mj-body>
    </mjml>,
    { validationLevel: "soft" }
  );

  return res.send(html);
}
