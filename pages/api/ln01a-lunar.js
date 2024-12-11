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
                    // background-url={emailData.background1}
                    // background-position-y="70%"
                    // vertical-align="middle"
                    //   background-size="100%"
                    // background-size="cover"
                    // padding="0 0 300px 0"
                    // padding-bottom="40px"
                    // background-repeat="no-repeat"
                    border-left="20px solid #FF0000"
                    border-right="20px solid #FF0000"
                    border-top="20px solid #FF0000"
                >
                    <mj-column vertical-align="top" width="100%" padding-top="0px">
                        <mj-text
                            align="center"
                            color="#000000"
                            font-size="20px"
                        // line-height="27px"
                        // font-family="Alice, Helvetica, Arial, sans-serif"
                        >
                            <p>
                                <strong>
                                    {emailData.section1}
                                </strong>
                            </p>
                            <p>
                                {emailData.section2}
                            </p>
                            <p>
                                {emailData.section3}
                            </p>
                            <p>
                                В наявності комплекти в таких кольорах:
                            </p>
                        </mj-text>
                    </mj-column>
                </mj-section>

                <mj-section
                    background-color="#ffffff"
                    background-url={emailData.background2}
                    background-position-y="70%"
                    vertical-align="middle"
                    //   background-size="100%"
                    background-size="cover"
                    padding="50px 0 300px 0"
                    // padding-bottom="40px"
                    background-repeat="no-repeat"
                    // border="20px solid #FF0000"
                    border-left="20px solid #FF0000"
                    border-right="20px solid #FF0000"
                    // border-top="20px solid #FF0000"
                >
                    <mj-column vertical-align="top" width="100%" padding-top="0px">

                        <mj-button
                            align="center"
                            background-color="#F44E3C"
                            color="white"
                            border-radius="10px"
                            href={emailData.productLink}
                            width="150px"
                        >
                            Дізнайтеся більше
                        </mj-button>
                    </mj-column>
                </mj-section>

                {/* <mj-section
                    background-color="#ffffff"
                    // background-url={emailData.background1}
                    background-position-y="70%"
                    vertical-align="middle"
                    //   background-size="100%"
                    background-size="cover"
                    padding="10px"
                    background-repeat="no-repeat"
                    border="20px solid #FF0000"
                // border-left="20px solid #FF0000"
                // border-right="20px solid #FF0000"
                // border-bottom="20px solid #FF0000"
                >
                    <mj-column>
                        <mj-text
                            align="center"
                            color="#000000"
                            font-size="20px"
                        // line-height="27px"
                        // font-family="Alice, Helvetica, Arial, sans-serif"
                        >
                            <p>
                                <strong>
                                    {emailData.section1}
                                </strong>
                            </p>
                            <p>
                                {emailData.section2}
                            </p>
                            <p>
                                {emailData.section3}
                            </p>
                            <p>
                                В наявності комплекти в таких кольорах:
                            </p>
                        </mj-text>
                        <mj-carousel
                        // padding="10px"
                        >
                            <mj-carousel-image src="https://mcusercontent.com/b0edbacd950268daec5d201ce/images/dc055967-e183-4ad9-78cb-e944b31424e2.png" />
                            <mj-carousel-image src="https://mcusercontent.com/b0edbacd950268daec5d201ce/images/28bd0b19-dfae-f364-12d7-0492ea7d4a30.png" />
                            <mj-carousel-image src="https://mcusercontent.com/b0edbacd950268daec5d201ce/images/16546b3b-dbec-39bb-f11a-d37afdb23110.png" />
                            <mj-carousel-image src="https://mcusercontent.com/b0edbacd950268daec5d201ce/images/6d699d05-8be4-89be-bfd7-eed68d173073.png" />
                            <mj-carousel-image src="https://mcusercontent.com/b0edbacd950268daec5d201ce/images/3081f645-cd49-84de-df4c-94a969969d6d.png" />
                            <mj-carousel-image src="https://mcusercontent.com/b0edbacd950268daec5d201ce/images/2e9e9cc1-0e18-a35c-1809-51bd665eb79e.png" />
                            <mj-carousel-image src="https://mcusercontent.com/b0edbacd950268daec5d201ce/images/db615852-d8af-d327-b767-e79691b3de77.png" />
                        </mj-carousel>

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
                </mj-section> */}

                <mj-section
                    padding="0"
                    border-left="20px solid #FF0000"
                    border-right="20px solid #FF0000"
                    background-color="#121c18"
                >
                    <mj-column vertical-align="middle" padding="10px 10px">
                        <mj-text align="left" color="#ffffff">
                            LN01A is equipped with a built-in 2 x 50 Watts Class D amplifier
                            and includes a large input panel and can perform in all situations:
                            <mj-raw>
                                <ul>
                                    <li>
                                        Bluetooth 4.0 APTX (equivalent to CD Quality)
                                    </li>
                                    <li>
                                        Phono input
                                    </li>
                                    <li>
                                        Optical
                                    </li>
                                    <li>
                                        Coaxial
                                    </li>
                                    <li>
                                        RCA
                                    </li>
                                    <li>
                                        Subwoofer output
                                    </li>
                                </ul>
                            </mj-raw>
                        </mj-text>
                    </mj-column>
                    <mj-column vertical-align="middle">
                        <mj-image width="300px" padding="0" src={emailData.img} alt="" />
                    </mj-column>
                </mj-section>
                <mj-section
                    background-color="#121c18"
                    padding="10px 0 0 0"
                    border-left="20px solid #FF0000"
                    border-right="20px solid #FF0000"
                >
                    <mj-column>
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

                <mj-section
                    padding="0"
                    border-left="20px solid #FF0000"
                    border-right="20px solid #FF0000"
                    border-top="20px solid #FF0000"
                    background-color="#4d4b4a"
                >
                    <mj-column vertical-align="middle">
                        <mj-image
                            // width="300px"
                            padding="0"
                            src={emailData.img2}
                            alt=""
                        />
                    </mj-column>
                    <mj-column vertical-align="middle" padding="10px 10px">
                        <mj-text align="left" color="#ffffff">
                            LUNAR 1:
                            <mj-raw>
                                <ul>
                                    <li>
                                        Ortofon OM-5E Cartridge
                                    </li>
                                    <li>
                                        33 and 45 rpm, manual speed change
                                    </li>
                                    <li>
                                        Belt drive
                                    </li>
                                    <li>
                                        Aluminium Straight Tonearm
                                    </li>
                                    <li>
                                        Length of the arm: 21,5cm
                                    </li>
                                    <li>
                                        Manufactured in Europe by Pro-Ject
                                    </li>
                                    <li>
                                        Platter: MDF
                                    </li>
                                    <li>
                                        Gold-plated RCA connectors
                                    </li>
                                </ul>
                            </mj-raw>
                        </mj-text>
                    </mj-column>
                </mj-section>
                <mj-section
                    background-color="#4d4b4a"
                    padding="10px 0 0 0"
                    border-left="20px solid #FF0000"
                    border-right="20px solid #FF0000"
                >
                    <mj-column>
                        <mj-button
                            background-color="#F44E3C"
                            color="white"
                            padding="20px 20px 30px 20px"
                            border-radius="20px"
                            href={emailData.productLink3}
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
                    border-top="20px solid #FF0000"
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
