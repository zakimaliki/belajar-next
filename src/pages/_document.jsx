import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
          integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <ul>
          <Link href={`home`}>
            <li>home</li>
          </Link>

          <Link href={`Hello`}>
            <li>hello</li>
          </Link>
          <Link href={`product/1`}>
            <li>product detail</li>
          </Link>
          <Link href={`products`}>
            <li>Products</li>
          </Link>
          <Link href={`CSR`}>
            <li>CSR</li>
          </Link>
          <Link href={`SSR`}>
            <li>SSR</li>
          </Link>
          <Link href={`SSG`}>
            <li>SSG</li>
          </Link>
          <Link href={`ISR`}>
            <li>ISR</li>
          </Link>
        </ul>
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
