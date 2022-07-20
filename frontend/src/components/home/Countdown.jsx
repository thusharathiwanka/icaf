import React, { useState, useRef, useEffect } from "react";
import { BASE_URL } from "../../config/config";

const Countdown = () => {
	const [timerDays, setTimerDays] = useState("00");
	const [timerHours, setTimerHours] = useState("00");
	const [timerMinutes, setTimerMinutes] = useState("00");
	const [timerSeconds, setTimerSeconds] = useState("00");
	const [isShow, setIsShow] = useState(true);
	const [date, setDate] = useState(null);

	let interval = useRef();

	useEffect(async () => {
		const res = await fetch(`${BASE_URL}/conference`);
		const data = await res.json();
		setDate(data.conference[0].startDate);
		return () => {
			clearInterval(interval.current);
		};
	}, []);

	const startTimer = () => {
		const countdownDate = new Date(date).getTime();

		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			if (distance <= 0) {
				clearInterval(interval.current);
				setIsShow(false);
			} else {
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		}, 1000);
	};

	date && startTimer();

	return (
		<>
			{isShow && (
				<section className="countdown-content">
					<h1>Happening In,</h1>
					<div className="countdown">
						<div className="days">
							<h1>{isShow ? timerDays : "00"}</h1>
							<p>Days</p>
						</div>
						<div className="hours">
							<h1>{isShow ? timerHours : "00"}</h1>
							<p>Hours</p>
						</div>
						<div className="minutes">
							<h1>{isShow ? timerMinutes : "00"}</h1>
							<p>Minutes</p>
						</div>
						<div className="seconds">
							<h1>{isShow ? timerSeconds : "00"}</h1>
							<p>Seconds</p>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Countdown;
