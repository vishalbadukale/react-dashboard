import React from "react";
import "./Help.css";

export default function Help() {
	return (
		<>
			<section className="mt-5 pt-5">
				<div className="container-fluid help">
					<div className="col-md-12">
						<h1 className="py-3 border-bottom-2">
							Learner Help Center and Support
						</h1>
						<div className="row">
							<div className="col-md-4">
								<a href="#">
									<i className="bi bi-shield-lock"></i>
								</a>
								<a href="#">
									<h2>Account Setup </h2>
								</a>
								<a href="#">How to login and change setting</a>
							</div>
							<div className="col-md-4">
								<a href="#">
									<i className="bi bi-credit-card"></i>
								</a>
								<a href="#">
									<h2>Payments</h2>
								</a>
								<a href="#">Billing Options, refund and cancellation's </a>
							</div>
							<div className="col-md-4">
								<a href="#">
									<i className="bi bi-mortarboard-fill"></i>
								</a>
								<a href="#">
									<h2>Enrollment </h2>
								</a>
								<a href="#">Start Learning today</a>
							</div>
						</div>
					</div>
					<div className="col-md-12 py-5 d-flex justify-content-center align-items-center">
						<button className="btn btn-outline-secondary btn-lg w-25">
							All Topics
						</button>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="quickSupport mb-4">
								<h2>Quick Tasks</h2>
								<ul style={{ listStyleType: "none" }}>
									<li>
										{" "}
										<a href="">
											Run assistance to automatically solve any connection
											problem
										</a>
									</li>
									<li>
										<a href="">How do I upgrade my plan</a>
									</li>
									<li>
										<a href="">See manual and common procedure </a>
									</li>
									<li>
										<a href="">See our courses</a>
									</li>
								</ul>
							</div>
							<div className="contactUsSupport mb-4">
								<h5>Chat with our assistance</h5>
								<p>
									Have question, get live and real time help with our chat
									support
								</p>
								<button className="btn btn-dark">Chat now</button>
							</div>
							<div className="call-us">
								<h5>Call Us</h5>
								<p>
									Get in touch, free of charge. Just call 1-55551-5582 <br />
									Customer reprensentive are available from 9am to 10pm, daily
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="questions">
								<h2>Frequently Asked Questions</h2>
								<div className="accordion" id="accordionPanelsStayOpenExample">
									<div className="accordion-item">
										<h2 className="accordion-header" id="chap1">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#chap-1"
												aria-expanded="true"
												aria-controls="chap-1"
											>
												General
											</button>
										</h2>
										<div
											id="chap-1"
											className="accordion-collapse collapse show"
											aria-labelledby="chap1"
										>
											<div className="accordion-body">
												<ul>
													<li>What are fees structure ?</li>
													<li>How much time to cover courses ?</li>
													<li>Video access given or not ?</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="chap-2">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#chap2"
												aria-expanded="false"
												aria-controls="chap2"
											>
												Tutorials
											</button>
										</h2>
										<div
											id="chap2"
											className="accordion-collapse collapse"
											aria-labelledby="chap-2"
										>
											<div className="accordion-body">
												<ul>
													<li>Daily session are there or not ?</li>
													<li>Syllabus wise topic covering or not ?</li>
													<li>
														Are there any other batch available when missing
														topics ?
													</li>
													<li>Is video access lifetime or not ?</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="chap3">
											<button
												className="accordion-button     "
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#chap-3"
												aria-expanded="false"
												aria-controls="chap-3"
											>
												Courses
											</button>
										</h2>
										<div
											id="chap-3"
											className="accordion-collapse collapse"
											aria-labelledby="chap3"
										>
											<div className="accordion-body">
												<ul>
													<li>What kind of course do you have ?</li>
													<li>How do have purchase course </li>
													<li>How many time can I watch a course ?</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="chap-4">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#chap4"
												aria-expanded="false"
												aria-controls="chap4"
											>
												Pricing
											</button>
										</h2>
										<div
											id="chap4"
											className="accordion-collapse collapse"
											aria-labelledby="chap-4"
										>
											<div className="accordion-body">
												<ul>
													<li>Each course have separate price ? </li>
													<li>Is there package of Course ?</li>
													<li>Fees structure ,payments</li>
													<li>Payment method ?</li>
													<li>Is there student loan structure or not ?</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="accordion-item">
										<h2 className="accordion-header" id="chap-5">
											<button
												className="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#chap5"
												aria-expanded="false"
												aria-controls="chap5"
											>
												My Account
											</button>
										</h2>
										<div
											id="chap5"
											className="accordion-collapse collapse"
											aria-labelledby="chap-5"
										>
											<div className="accordion-body">
												<ul>
													<li>Profile changes</li>
													<li>Subscription / Premium </li>
													<li>Summary</li>
													<li>Topics</li>
													<li>Course Purchase</li>
													<li>Forget Password</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
