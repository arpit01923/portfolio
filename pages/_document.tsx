import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
                <link rel="preconnect" href="https://raw.githubusercontent.com" crossOrigin="anonymous" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
