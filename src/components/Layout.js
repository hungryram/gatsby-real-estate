import * as React from "react"
import Helmet from "react-helmet"
import appearance from "../../data/appearance"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children, data }) {
    const color = appearance.colors
    return (
        <>
            <Helmet>
                <style type="text/css">
                    {`
            :root {
                --accent-color: ${color.primary_color};
                --font-family: "Poppins", sans-serif;
            }
        `}
                </style>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet" />
                <meta name="application-name" content="" />
                <meta property="og:site_name" content="" />
                <link rel="apple-touch-icon" sizes="152x152" href="" />
                <link rel="apple-touch-icon" sizes="144x144" href="" />
                <link rel="apple-touch-icon" sizes="120x120" href="" />
                <link rel="apple-touch-icon" sizes="114x114" href="" />
                <link rel="apple-touch-icon" sizes="180x180" href="" />
                <link rel="apple-touch-icon" sizes="72x72" href="" />
                <link rel="apple-touch-icon" href="" />
                <link rel="shortcut icon" href="" />
            </Helmet>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}