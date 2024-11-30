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
              <p>{emailData.section2}</p>
            </mj-text>

            <mj-table
              color="#ffffff"
              padding="0px 50px 20px 50px"
              cellpadding="5px"
            >
              <tr style={{ border: "1px solid #ecedee" }} align="left">
                <th>Модель</th>
                <th>РРЦ, $</th>
              </tr>
              <tr align="left">
                <th>TRIANGLE CAPELLA Black Star (пара)</th>
                <th>2770</th>
              </tr>
              <tr align="left">
                <th>TRIANGLE TURNTABLE LUNAR 3 Black</th>
                <th>890</th>
              </tr>
              <tr align="left">
                <th>TRIANGLE CAPELLA Space White (пара)</th>
                <th>2770</th>
              </tr>
              <tr align="left">
                <th>TRIANGLE TURNTABLE LUNAR 3 White </th>
                <th>890</th>
              </tr>
            </mj-table>
            <mj-button
              background-color="#F44E3C"
              color="white"
              padding="70px 20px 30px 20px"
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
              // font-family="Alice, Helvetica, Arial, sans-serif"
            >
              Triangle Capella
            </mj-text>

            <mj-table
              color="#ffffff"
              padding="20px 20px 25px 30px"
              font-size="14px"
              cellpadding="3px"
            >
              <tr>
                <td>Type</td>
                <td>
                  Bass Reflex Active Speakers with integrated digital signal
                  processor
                </td>
              </tr>
              <tr>
                <td>Number of ways</td>
                <td>2 ways with dedicated amplification for each driver</td>
              </tr>
              <tr>
                <td>Midrange</td>
                <td>1 x 16.5 cm natural cellulose pulp membrane</td>
              </tr>
              <tr>
                <td>Tweeter</td>
                <td>1 x 25 mm magnesium alloy dome</td>
              </tr>
              <tr>
                <td>Bandwidth (+/-3dB Hz-Khz)</td>
                <td>42-22</td>
              </tr>
              <tr>
                <td>Inputs</td>
                <td>RCA mono line input WiSA wireless technology</td>
              </tr>
              <tr>
                <td>Power (W Rms)</td>
                <td>
                  Class D Bi-amplification of 2*50W per speaker (2x100W total)
                </td>
              </tr>
              <tr>
                <td>Treble Cutoff Frequency (Hz)</td>
                <td>3600</td>
              </tr>
              <tr>
                <td>Filter type</td>
                <td>Active by DSP</td>
              </tr>
              <tr>
                <td>Automatic standby</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Dimensions (mm/inch) L x D x H</td>
                <td>200 x 315 x 380 7,8 x 12,4 x 14,96</td>
              </tr>
              <tr>
                <td>Unit Weight (kg/lb)</td>
                <td>8,5 - 18,7</td>
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
          background-url={emailData.background3}
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
              // font-family="Alice, Helvetica, Arial, sans-serif"
            >
              Stereo Hub (included in the kit)
            </mj-text>
            <mj-table
              color="#ffffff"
              padding="20px 20px 25px 30px"
              font-size="14px"
              cellpadding="3px"
            >
              <tr>
                <td>Type</td>
                <td>WiSA / Wireless transmitter Preamplifier / Streamer</td>
              </tr>
              <tr>
                <td>WiFi</td>
                <td> Wi-Fi IEEE 802.11 b/g/n Supports 2.4GHz & 5 GHz</td>
              </tr>
              <tr>
                <td> WiFi protocol</td>
                <td>
                  Google Cast / Airplay / Spotify Connect /Roon Ready /
                  DLNA/UpNP
                </td>
              </tr>
              <tr>
                <td>Bluetooth</td>
                <td>4.2</td>
              </tr>
              <tr>
                <td>Analog input </td>
                <td>1 RCA / Aux 3.5 mm</td>
              </tr>
              <tr>
                <td> Digital intput </td>
                <td>
                  3 Optical + Aux 3.5mm optical
                  <br />1 Coaxial / 1 USB-B
                </td>
              </tr>
              <tr>
                <td>TV input</td>
                <td> 1 HDMI (ARC / CEC)</td>
              </tr>
              <tr>
                <td> EQ by app </td>
                <td>Automatic ROOM EQ Manual MANUAL EQ</td>
              </tr>
              <tr>
                <td>Sampling rate</td>
                <td>
                  Analog sources: 24bit/96kHz
                  <br />
                  Digital sources: 24bit/192kHz
                  <br />
                  Bluetooth: 16bit/48kHz
                  <br />
                  WiSA: 24bit/96kHz, 2.6 ms latency
                </td>
              </tr>

              <tr>
                <td>Auto standby </td>
                <td>Yes, after 20 minutes </td>
              </tr>
              <tr>
                <td>Remote </td>
                <td>Aluminium - Radio-frequency</td>
              </tr>
              <tr>
                <td>Application </td>
                <td>iOS - Android : TRIANGLE CAPELLA</td>
              </tr>
              <tr>
                <td>Dimensions (mm/inch) L x D x H </td>
                <td>
                  70 x 100 x 45
                  <br />
                  2,7 x 3,9 x 1,7
                </td>
              </tr>
              <tr>
                <td>Weight (kg-lb)</td>
                <td>0,5 - 1,1</td>
              </tr>
            </mj-table>
            <mj-button
              background-color="#F44E3C"
              color="white"
              padding="20px 20px 70px 20px"
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

        <mj-section background-color="#ffffff" padding="30px 20px 0 20px">
          <mj-column>
            <mj-text
              align="center"
              padding="0 10px 20px 20px"
              color="#000000"
              font-size="20px"
              line-height="23px"
              // font-family="Alice, Helvetica, Arial, sans-serif"
            >
              LUNAR 3
            </mj-text>
          </mj-column>
        </mj-section>

        <mj-section background-color="#ffffff" padding="10px 20px 30px 20px">
          <mj-column>
            <mj-image width="300px" padding="0" src={emailData.img} alt="" />
          </mj-column>
          <mj-column padding="0">
            <mj-text align="left">
              <mj-raw>
                <ul>
                  <li>
                    Manual turntable compatible with 33, 45 and 78 rpm (2 belts
                    supplied)
                  </li>
                  <li>
                    Precision transmission belt with electronic speed control
                  </li>
                  <li>Pre-tuned Ortofon 2M Red cartridge</li>
                  <li>21.5 cm carbon straight arm</li>
                  <li>Integrated phono pre-amplifier that can be activated</li>
                  <li> Platter: High-density MDF</li>
                </ul>
              </mj-raw>
            </mj-text>
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
        <mj-section background-color="#ffffff" padding="0 20px">
          <mj-column vertical-align="middle">
            <mj-text align="left">
              <mj-raw>
                <ul>
                  <li>
                    The LUNAR 3 is a premium manual turntable designed to
                    deliver the unique sound of all types of vinyl records. It
                    is ideal for both seasoned audiophiles and those looking for
                    their first high-quality turntable.
                  </li>
                  <li>
                    Assembled in Europe by our partner Pro-Ject, the LUNAR 3
                    features a benchmark cartridge: an Ortofon 2M RED factory
                    fitted to an extremely rigid and lightweight carbon fiber
                    straight tonearm.
                  </li>
                  <li>
                    Designed to be universal, the LUNAR 3 incorporates a phono
                    preamp that can be activated when required, enabling it to
                    be connected to a pair of active speakers as well as a more
                    traditional Hi-Fi system.
                  </li>
                </ul>
              </mj-raw>
            </mj-text>
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
          <mj-column vertical-align="middle">
            <mj-image width="300px" padding="0" src={emailData.img2} alt="" />
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
