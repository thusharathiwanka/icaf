import React from "react";
import { Link } from "react-router-dom";
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from "react-icons/si";

import FooterLogo from "url:../../assets/images/logo-white.svg";

const Footer = () => {
	return (
		<footer>
			<div className="footer-main-content">
				<div className="footer-content-left">
					<img src={FooterLogo} alt="footer-logo" />
					<div className="details-links">
						<Link>Blogs</Link>
						<Link>Events</Link>
						<Link>Publications</Link>
						<Link>About</Link>
						<Link>Contact</Link>
					</div>
				</div>
				<div className="footer-content-right">
					<div className="social-links">
						<Link>
							<SiFacebook />
						</Link>
						<Link>
							<SiInstagram />
						</Link>
						<Link>
							<SiTwitter />
						</Link>
						<Link>
							<SiYoutube />
						</Link>
					</div>
					<p>&copy; 2021 ICAF. All rights reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
