import "./write.css";

const Write = () => {
	return (
		<div className="write">
			<img
				className="writeImg"
				src="https://source.unsplash.com/1600x900/?computer"
				alt=""
			/>
			<form className="writeForm">
				<div className="writeFormGroup">
					<label htmlFor="fileInput">
						<i className=" writeIcon fas fa-plus" />
					</label>
					<input type="file" id="fileInput" style={{ display: "none" }} />
					<input
						type="text"
						placeholder="Title"
						className="writeInput"
						autoFocus={true}
					/>
				</div>
				<div className="writeFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="writeInput writeText"
					></textarea>
				</div>
				<button className="writeSubmit">Pulish</button>
			</form>
		</div>
	);
};

export default Write;
