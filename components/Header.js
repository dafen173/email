// import Link from "next/link";

export default function Header() {
//   const productId = 100;
  return (
    <>
      <mj-section background-color="#FF0000" padding="6px 0">
        <mj-column width="100%">
          <mj-button
            background-color="#a70000"
            href="*|ARCHIVE|*"
            font-size="20px"
          >
            Електронний лист не відображається правильно? Перегляньте його у
            своєму браузері.
          </mj-button>
        </mj-column>
      </mj-section>

      <mj-section padding="0" background-color="#ffffff">
        <mj-column width="300px" padding="0">
          <mj-image
            width="200px"
            src="https://mcusercontent.com/b0edbacd950268daec5d201ce/images/01ba385f-5b81-ebc1-7d42-9ff0e8c6de80.png"
            href="https://ctccapital.ua/parent-categories"
            alt=""
          />
        </mj-column>
      </mj-section>
    </>
  );
}
