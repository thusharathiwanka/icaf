import React from "react";
import { motion } from "framer-motion";

const AttendeeForm = () => {
	return (
		<div className="register-content">
			<h1>Attendee Registration</h1>
			<motion.form
				className="login-form"
				initial={{ x: 300, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<motion.div
					className="user-credentials"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						required
						autoComplete="off"
					/>
					<label htmlFor="mobile-number">Contact Number</label>
					<input
						type="tel"
						name="mobile-number"
						id="mobile-number"
						required
						maxLength="10"
						autoComplete="off"
					/>
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="card-number">Card Number</label>
							<input
								type="text"
								name="card-number"
								id="card-number"
								required
								autoComplete="off"
							/>
						</div>
						<div className="last-name">
							<label htmlFor="cvc">CVC</label>
							<input
								type="text"
								name="last-name"
								id="last-name"
								required
								autoComplete="off"
								maxLength="3"
							/>
						</div>
					</div>
					<div className="name-info">
						<div className="first-name">
							<label htmlFor="exp-date">Expiration Date</label>
							<input
								type="text"
								name="exp-date"
								id="exp-date"
								required
								autoComplete="off"
								placeholder="12-2024"
							/>
						</div>
						<div className="last-name">
							<label htmlFor="amount">Amount</label>
							<input
								type="text"
								name="amount"
								id="amount"
								required
								autoComplete="off"
								maxLength="3"
								value="Rs. 1000"
								disabled
							/>
						</div>
					</div>
				</motion.div>
				<div className="button-container">
					<motion.button
						className="gradient-cta transparent"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
					>
						Back
					</motion.button>
					<motion.button
						type="submit"
						className="gradient-cta"
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
					>
						Register
					</motion.button>
				</div>
			</motion.form>
		</div>
	);
};

export default AttendeeForm;
