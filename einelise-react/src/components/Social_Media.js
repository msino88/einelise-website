import React from 'react';
import { FaInstagram } from 'react-icons/fa'

export default function SocialMedia() {
    return (
        <div className="SocialMedia">
            <h1>Social Media Handles</h1>
            <p>Find us on Social Media at any of the following:</p>
            <a
                href="https://www.instagram.com/einelisethecorgi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <FaInstagram size={30} className="instagram-icon" />
            </a>
        </div>
    );
}