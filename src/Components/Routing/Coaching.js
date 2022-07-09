import React from "react";
import { Link } from "react-router-dom";
import "./Coaching.css";

export default function Coaching() {
	return (
		<>
			<section className="mt-5 pt-5">
				<div className="container-fluid">
					<div className="coaching">
						<div className="row">
							<div className="col-md-6">
								<div className="coachInfo">
									<h1>Private Coaching </h1>
									<div className="onlineS">
										<h2>Online Sessions</h2>
										<ul style={{ listStyleType: "none" }}>
											<li>-Frontend Developer</li>
											<li>-UI Designer</li>
											<li>-Full Stack Web Development</li>
											<li>-Data Science</li>
											<li>-Testing Courses</li>
										</ul>
									</div>
									<div className="batchTimings">
										<h2>Batch Timings :- </h2>
										<p>Slot 1 :- 10pm to 12pm</p>
										<p>Slot 2 :- 2pm to 4pm</p>
										<p>Slot 3 :- 7pm to 10pm</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 coaching-content">
								<div className="f1 circle"></div>
								<div className="blinkMe">
									<div className="f2">
										<div className="plus w-100 h-100">
											<h1>-25%</h1>
											<h3>Coupon code</h3>
											<h5>Coa3bn5Ac</h5>
										</div>
									</div>
								</div>
								<div className="servicesC float-end ">
									<a className="animated-button">
										<span></span>
										<span></span>
										<span></span>
										<span></span>
										Registrations Open
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-12 cc mt-3">
							<div className="coachContact d-flex justify-content-center align-items-center">
								<div className="con">
									<a href="#" className="px-2">
										<i className="bi bi-telephone-fill pr-1"></i>(123)-2574584
									</a>
								</div>
								<div className="add px-5">
									<span style={{ color: "black", fontSize: "1rem" }}>
										111 C ST ,CNC Web Pvt, Pune ,444852
									</span>
								</div>
								<div className="site ">
									<a href="#"> www.CNCDigitalGyan.com</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
