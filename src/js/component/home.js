import React, { useState, useEffect } from "react";

export function Home() {
	const [people, setPeople] = useState([1, 2, 3, 4, 5, 6]);

	return (
		<div>
			{people.map((item, index) => {
				return (
					<div
						key={index}
						className="card"
						style={{ width: "300px;" }}>
						<img
							className="card-img-top"
							src="..."
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card
								title and make up the bulk of the cards content.
							</p>
							<a href="#" className="btn btn-primary">
								{item}
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}
