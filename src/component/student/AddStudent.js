import { useState } from "react";
import {
	Link,
	useNavigate,
} from "react-router-dom";
import axios from "axios";

const AddStudent = () => {
	

	let navigate = useNavigate();
	const [student, setStudent] = useState({
		firstName: "",
		lastName: "",
		email: "",
		address: "",
		mobileNumber: "",
	});
	const {
		firstName,
		lastName,
		email,
		address,
		mobileNumber,
	} = student;

	const handleInputChange = (e) => {
		setStudent({
			...student,
			[e.target.name]: e.target.value,
		});
	};
	const saveStudent = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:9192/peoples", student);
		navigate("/view-peoples");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow rounded">
			<h2 className="mt-5"> Add People</h2>
			<form onSubmit={(e) => saveStudent(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="fristName">
						First Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="firstName"
						id="firstName"
						placeholder="first name"
						required
						value={firstName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="lastName">
						Last Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="lastName"
						id="lastName"
						placeholder="last Name"
						required
						value={lastName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Your Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						placeholder="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="address">
						Address
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="address"
						id="address"
						placeholder="Address"
						required
						value={address}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="mobileNumber">
						Mobile Number
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="mobileNumber"
						id="mobileNumber"
						placeholder="Mobile Number"
						required
						value={mobileNumber}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>


				<div className="row mb-5">
					<div className="col-md-10 mt-2 ">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-md-2 mt-2">
						<Link
							to={"/view-peoples"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddStudent;
