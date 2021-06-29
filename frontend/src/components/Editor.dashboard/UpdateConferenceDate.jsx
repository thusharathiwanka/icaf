import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BASE_URL } from "../../config/config";

const UpdateConferenceDate = () => {
	const [selectedDate, setSelectedDate] = useState(Date.now());

	const handleDateChange = (d) => {
		setSelectedDate(d);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const startDate = selectedDate;

		fetch(`${BASE_URL}/conference/${startDate}`, {
			method: "PUT",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Headers": "*",
			},
		})
			.then(() => {
				toast.success("conference date updated !!");
			})
			.catch((error) => {
				toast.error("conference date not updated !!");
			});
	};

	return (
		<div className="Update_conference">
		
			<form onSubmit={handleSubmit}>
				<p
					style={{
						marginBottom: "8px",
						marginTop: "17px",
						marginRight: "10px",
						width: "25%",
						float: "left",
						fontWeight: "lighter",
					}}
				>
					conferrence date :
				</p>
				<MuiPickersUtilsProvider
					utils={DateFnsUtils}
					style={{ backgroundColor: "white", float: "right", width: "55%" }}
				>
					<KeyboardDatePicker
						margin="normal"
						l
						id="date-picker-dialog"
						format="MM/dd/yyyy"
						value={selectedDate}
						onChange={handleDateChange}
						KeyboardButtonProps={{ "aria-label": "change date" }}
					/>
				</MuiPickersUtilsProvider>
				<button className="Submit_Conference" type="submit">
					Update
				</button>
			</form>
			<ToastContainer
				position="bottom-center"
				autoClose={3000}
				showProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default UpdateConferenceDate;
