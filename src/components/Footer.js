import * as React from "react"
import footerData from "../../data/footer"
import profileData from "../../data/profile"
import * as footerStyles from "../styles/footer.module.css"
import { Link } from "gatsby"

// IMPORT DATA
import contact from "../../data/profile"

export default function Footer() {
    const contactInfo = contact.contact_information
    return (
        <footer className={footerStyles.footer}>
            <div className="uk-section">
                <div className={`uk-container uk-container-large ${footerData.colors.enable_white_text && 'uk-light'}`}>
                    <div className="uk-grid-large uk-child-width-1-4@s uk-child-width-1-2@s" data-uk-grid>
                        <div>
                            {
                                footerData.footer_logo ?
                                    <img src={footerData.footer_logo} alt="" width={footerData.footer_logo_width} /> :
                                    <h2>{footerData.footer_title}</h2>
                            }
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <ul className="uk-list">
                                {
                                    contactInfo.email &&
                                    <li><a href={`mailto: ${contactInfo.email}`}>{contactInfo.email}</a></li>
                                }
                                {
                                    contactInfo.cell &&
                                    <li><a href={`tel: ${contactInfo.cell}`}>{contactInfo.cell}</a></li>
                                }
                                {
                                    contactInfo.office &&
                                    <li><a href={`tel: ${contactInfo.office}`}>{contactInfo.office}</a></li>
                                }
                                {

                                    contactInfo.address &&
                                    <li>
                                        <a href="#">{
                                            contactInfo.address}, {
                                                contactInfo.city}, {
                                                contactInfo.state} {
                                                contactInfo.zip_code} </a>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div>
                            <h3>Quick Links</h3>
                            <ul className="uk-list">
                                {footerData.quick_links.map((link) => (
                                    <li key={link.label}>
                                        {link.new_window &&
                                            <a href={link.link} target={link.new_window ? '_blank' : '_self'} rel="noreferrer">
                                                {link.label}
                                            </a>
                                        }
                                        {!link.new_window &&
                                            <Link to={link.link}>
                                                {link.label}
                                            </Link>
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>About</h3>
                            <p>{footerData.footer_paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section uk-section-small uk-text-center">
                <div className={`uk-container uk-container-large ${footerData.colors.enable_white_text && 'uk-light'}`}>
                    <p className="uk-text-small">{footerData.footer_disclaimer}</p>
                    <p className="uk-text-small">&copy; {new Date().getFullYear()} {profileData.company} &bull; Built by <a to="https://www.hungryram.com/" target="_blank">Hungry Ram Web Design</a></p>
                </div>
            </div>
        </footer>
    )
}