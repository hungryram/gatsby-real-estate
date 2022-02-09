import * as React from "react"

export default function Pagebanner({ pageTitle }) {
    return (
        <div class="uk-cover-container">
            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1637596762/navid-ziaolhagh/ambiance-home/modern-gray-interior.jpg" alt="" data-uk-cover />
            <canvas height="400"></canvas>
            <div class="uk-overlay-baseof uk-position-cover"></div>
            <div class="uk-overlay uk-position-center uk-light uk-text-center">
                <h1 class="uk-text-uppercase">{pageTitle}</h1>
            </div>
        </div>
    )
}