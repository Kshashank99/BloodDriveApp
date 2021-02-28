import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Calling Firebase config setting to call the data
import { db, auth } from "./services/firebase";

class App extends React.Component {
	state = {
		users: null,
	};

	componentDidMount() {
		console.log("mounted");
		db.collection("users")
			.get()
			.then((snapshot) => {
				const users = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					users.push(data);
				});
				this.setState({ users: users });
				console.log(snapshot);
				console.log(users);
			})
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div className='MainDiv'>
				<div class='jumbotron text-center bg-sky'>
					<h3>Blood doners</h3>
				</div>
				<div className='container'>
					<table id='example' class='display table'>
						<thead class='thead-dark'>
							<tr>
								<th>BloodGroup</th>
								<th>DOB</th>
								<th>FullName</th>
								<th>Latitude</th>
								<th>Longitude</th>
								<th>Sex</th>
							</tr>
						</thead>
						<tbody>
							{this.state.users &&
								this.state.users.map((users) => {
									return (
										<tr>
											<td>{users.BloodGroup}</td>
											<td>{users.DOB}</td>
											<td>{users.FullName}</td>
											<td>{users.Latitude}</td>
											<td>{users.Longitude}</td>
											<td>{users.Sex}</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
export default App;
