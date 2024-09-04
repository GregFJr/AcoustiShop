import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">

            <div className='brand'>
                <img src="../../assets/shared/desktop/logo.svg" alt="logo" />
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                   and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                   visit our demo facility - we’re open 7 days a week.</p>
                <p>&copy; 2022 Audiophile. All rights reserved.</p>
            </div>

            <div className="social-media">
                <div className='footer-links'>
                    <a href="">home</a>
                    <a href="">headphones</a>
                    <a href="">speakers</a>
                    <a href="">earphones</a>
                </div>

                <div className='social-links'>
                <a href="#"><img src="../../assets/shared/desktop/icon-facebook.svg" alt="facebook" /></a>
                <a href="#"><img src="../../assets/shared/desktop/icon-twitter.svg" alt="twitter" /></a>
                <a href="#"><img src="../../assets/shared/desktop/icon-instagram.svg" alt="instagram" /></a>
                </div>
            </div>

            
        </footer>
    )
}