

function openNav() {
    console.log("openNav")
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

  
  
function Home() {
	return (
	<div>
			<div class="banner_bg_main">
				<div class="container">
					<div class="header_section_top">
						<div class="row">
							<div class="col-sm-12">
								<div class="custom_menu">
									<ul>
										<li><a href="#">Best Sellers</a></li>
										<li><a href="#">Gift Ideas</a></li>
										<li><a href="#">New Releases</a></li>
										<li><a href="#">Today's Deals</a></li>
										<li><a href="#">Customer Service</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="logo_section">
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<div class="logo"><a href="index.html"><img src={process.env.PUBLIC_URL + "/images/logo_no_bg.png"} /></a></div>
							</div>
						</div>
					</div>
				</div>
				<div class="banner_section layout_padding">
					<div class="container">
						<div id="my_slider" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<div class="row">
									<div class="col-sm-12">
										<h1 class="banner_taital">Get Start <br/>Your favourite Resin Art</h1>
										<div class="buynow_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
									</div>
									</div>
								</div>
								<div class="carousel-item">
									<div class="row">
									<div class="col-sm-12">
										<h1 class="banner_taital">Get Start <br/>Your favourite shoping</h1>
										<div class="buynow_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
									</div>
									</div>
								</div>
								<div class="carousel-item">
									<div class="row">
									<div class="col-sm-12">
										<h1 class="banner_taital">Get Start <br/>Your favourite shoping</h1>
										<div class="buynow_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
									</div>
									</div>
								</div>
							</div>
					<a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
					<i class="fa fa-angle-left"></i>
					</a>
					<a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
					<i class="fa fa-angle-right"></i>
					</a>
				</div>
			</div>
		</div>
		<br/><br/><br/>
		<div class="fashion_section">
			<div id="main_slider" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					{	
						Array.from(Array(3)).map((e, i) => {
							let num = 0
							if(i){
								num = i * 4
							}
							return (
								<div class={ i==0?"carousel-item active":"carousel-item"  }>
									<div className="container">
										<h1 style={{color: "#fff"}} class="fashion_taital">Keychain's</h1>
										<div class="fashion_section_2">
											<div class="row">
											<div class="col-lg-3 col-sm-4">
												<div class="box_main">
													<div class="tshirt_img"><img src={process.env.PUBLIC_URL + "/images/keychain/keychain"+(i+num+1)+".jpg"}/></div>
													<div class="btn_main">
														<div class="buy_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
														<div class="seemore_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">See More</a></div>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-4">
												<div class="box_main">
													<div class="tshirt_img"><img src={process.env.PUBLIC_URL + "/images/keychain/keychain"+(i+num+2)+".jpg"}/></div>
													<div class="btn_main">
														<div class="buy_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
														<div class="seemore_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">See More</a></div>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-4">
												<div class="box_main">
													<div class="tshirt_img"><img src={process.env.PUBLIC_URL + "/images/keychain/keychain"+(i+num+3)+".jpg"}/></div>
													<div class="btn_main">
														<div class="buy_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
														<div class="seemore_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">See More</a></div>
													</div>
												</div>
											</div>
											<div class="col-lg-3 col-sm-4">
												<div class="box_main">
													<div class="tshirt_img"><img src={process.env.PUBLIC_URL + "/images/keychain/keychain"+(i+num+4)+".jpg"}/></div>
													<div class="btn_main">
														<div class="buy_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
														<div class="seemore_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">See More</a></div>
													</div>
												</div>
											</div>
											</div>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
				<a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
				<i class="fa fa-angle-left"></i>
				</a>
				<a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
				<i class="fa fa-angle-right"></i>
				</a>
			</div>
		</div>
		<br/><br/><br/>
		<div class="fashion_section">
			<div id="electronic_main_slider" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
						{	
							Array.from(Array(4)).map((e, i) => {
								let num = 0
								if(i){
									num = i * 4
								}
								return (
									<div class={ i==0?"carousel-item active":"carousel-item"  }>
										<div className="container">
											<h1 class="fashion_taital">Frame's</h1>
											<div class="fashion_section_2">
												<div class="row">
												<div class="col-lg-3 col-sm-4">
													<div class="box_main">
														<div class="tshirt_img"><img src={process.env.PUBLIC_URL + "/images/frames/frame"+(i+num+1)+".jpg"}/></div>
														<div class="btn_main">
															<div class="buy_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
															<div class="seemore_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">See More</a></div>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-sm-4">
													<div class="box_main">
														<div class="tshirt_img"><img src={process.env.PUBLIC_URL + "/images/frames/frame"+(i+num+2)+".jpg"}/></div>
														<div class="btn_main">
															<div class="buy_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
															<div class="seemore_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">See More</a></div>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-sm-4">
													<div class="box_main">
														<div class="tshirt_img"><img src={process.env.PUBLIC_URL + "/images/frames/frame"+(i+num+3)+".jpg"}/></div>
														<div class="btn_main">
															<div class="buy_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
															<div class="seemore_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">See More</a></div>
														</div>
													</div>
												</div>
												<div class="col-lg-3 col-sm-4">
													<div class="box_main">
														<div class="tshirt_img"><img src={process.env.PUBLIC_URL + "/images/frames/frame"+(i+num+4)+".jpg"}/></div>
														<div class="btn_main">
															<div class="buy_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">Buy Now</a></div>
															<div class="seemore_bt"><a href="https://wa.me/message/FUNS2MX2ZF76A1">See More</a></div>
														</div>
													</div>
												</div>
												</div>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
						<a class="carousel-control-prev" href="#electronic_main_slider" role="button" data-slide="prev">
							<i class="fa fa-angle-left"></i>
						</a>
						<a class="carousel-control-next" href="#electronic_main_slider" role="button" data-slide="next">
							<i class="fa fa-angle-right"></i>
						</a>
			</div>
		</div>
		</div>
		{/* <section class="contact-us">
			<div class="container">
				<h2>Contact Us</h2>
				<p style={{margin: 0}}>Have a question or comment? We'd love to hear from you!</p>
				<br/>
				<form action="#" method="POST">
					<div class="form-group">
					<label for="name">Name:</label>
					<input type="text" class="form-control" id="name" name="name" required />
					</div>
					<div class="form-group">
					<label for="email">Email:</label>
					<input type="email" class="form-control" id="email" name="email" required />
					</div>
					<div class="form-group">
					<label for="message">Message:</label>
					<textarea class="form-control" id="message" name="message" rows="5" required></textarea>
					</div>
					<button type="submit" class="btn btn-primary">Send</button>
				</form>
			</div>
		</section> */}
		<br/>
			<div id="footer_section" class="footer_section layout_padding">
				<div class="container">
					<div class="social-media">
					Send a DM For Orders 
						<a href="https://www.instagram.com/snel_art_decorr/" target="_blank" class="icon insta-icon">
						snel_art_decorr <i class="fab fa-instagram"></i>
						</a>
						<br/>
					</div>
					<br/>
					<center><p style={{fontSize: "20px"}}>Business enquiries - snelartdecor@gmail.com </p></center>
					<br/><br/>
				<div class="input_bt"></div>
				<div class="footer_menu">
				<ul>
					<li><a href="#">Best Sellers</a></li>
					<li><a href="#">Gift Ideas</a></li>
					<li><a href="#">New Releases</a></li>
					<li><a href="#">Today's Deals</a></li>
					<li><a href="#">Customer Service</a></li>
				</ul>
				</div>
				</div>
				TK web
			</div>
	</div>
	);
}

export default Home;
