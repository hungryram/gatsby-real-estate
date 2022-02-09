import * as React from "react"
import branding from "../../data/appearance"

export default function Navbar() {
    const appearance = branding.branding
    return (
        <nav className="uk-navbar-container uk-margin" data-uk-navbar>
            <div className="uk-navbar-left">

                <a className="uk-navbar-item uk-logo" href="/">
                    <img src={appearance.logo} alt={appearance.logo_alt_tag} width={appearance.logo_width}/>
                </a>

                <ul className="uk-navbar-nav">
                    <li>
                        <a href="# ">
                            Features
                        </a>
                    </li>
                </ul>

                <div className="uk-navbar-item">
                    <div>Some <a href="# ">Link</a></div>
                </div>

            </div>
        </nav>
    )
}