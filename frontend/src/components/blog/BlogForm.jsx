import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import { RegisterDataContext } from "../../context/Context";
import Loading from "../../helpers/Loading";
import { BASE_URL } from "../../config/config";
import { getUserId } from "../../auth/userAuth";

const BlogForm = () => {
	const { material } = useContext(RegisterDataContext);
	const [blog, setBlog] = useState({});
	const allowedTypes = ["image/png", "image/jpeg"];
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(blog);
		blog.src = material.src;
		blog.createdBy = getUserId();
		const response = await fetch(`${BASE_URL}/blog/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(blog),
		});

		if (response.ok) {
			toast.success("Blog has been submitted");
			setBlog({});
		} else {
			toast.error("Sorry, something went wrong.");
		}
	};

	const handleUpload = (e) => {
		let selectedPicture = e.target.files[0];

		if (selectedPicture && allowedTypes.includes(selectedPicture.type)) {
			setFile(selectedPicture);
			setError("");
		} else {
			setFile("");
			setError("Please select an image file");
		}
	};

	return (
		<div className="login-content">
			{file && <Loading file={file} setFile={setFile} />}
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<h1>Create new Blog</h1>
			<motion.form
				className="login-form"
				onSubmit={handleSubmit}
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: "tween", duration: 0.8 }}
			>
				<motion.div
					className="user-credentials"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.2 }}
				>
					<label htmlFor="username">Blog Title</label>
					<input
						type="username"
						name="username"
						id="username"
						required
						autoComplete="off"
						value={blog.title}
						onChange={(e) => {
							setBlog({ ...blog, title: e.target.value });
						}}
					/>
					<label htmlFor="password">Blog Description</label>
					<input
						type="text"
						name="password"
						id="password"
						value={blog.description}
						required
						autoComplete="off"
						onChange={(e) => setBlog({ ...blog, description: e.target.value })}
					/>
					<label htmlFor="password">Blog Content</label>
					<textarea
						type="text"
						cols={100}
						rows={6}
						name="password"
						id="password"
						value={blog.content}
						required
						autoComplete="off"
						onChange={(e) => setBlog({ ...blog, content: e.target.value })}
					/>
					<div className="last-name">
						<label htmlFor="material">Upload a Picture</label>
						<input
							type="file"
							accept="image/*"
							name="material"
							id="material"
							required
							autoComplete="off"
							maxLength="3"
							onChange={handleUpload}
						/>
					</div>
					<div>{error && <div className="error">{error}</div>}</div>
				</motion.div>
				<motion.button
					type="submit"
					className="gradient-cta"
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
				>
					Submit
				</motion.button>
			</motion.form>
		</div>
	);
};

export default BlogForm;
