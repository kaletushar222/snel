import { BookmarkStarFill, EnvelopeAtFill, GeoAltFill, PhoneFill } from 'react-bootstrap-icons';
import { Link } from "react-scroll";
import ValueImage from '../assets/images/value.jpg';
import { useState } from 'react';

function Main() {

    const [ selectedCategory, setSelectedCategory ] = useState("INDUSTRIAL_SUPPLIES")
    
    return (
        <main id="main">

            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About Us</h2>
                    </div>

                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                                Welcome to our industrial solutions company! We are a team of experts dedicated to providing innovative solutions for your industrial needs.
                                <br/><br/>
                                With years of experience and a deep understanding of the industry, we have established ourselves as a trusted partner for businesses looking to improve their operations. We are committed to providing high-quality products and services that meet the unique needs of each of our clients. 
                                <br/><br/>
                                Our team is comprised of highly skilled professionals who are passionate about what they do. We work together to design, develop, and deliver customized solutions that optimize efficiency, reduce costs, and increase productivity.
                                <br/><br/>
                            </p>
                            <a href="#contact" className="btn-learn-more">Learn More</a>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            Our wide range of industrial solutions includes everything from machinery and equipment to IT Products & Accessories. We work closely with our clients to understand their specific requirements and develop tailored solutions that meet their needs.
                            <br/><br/>
                            At our core, we are driven by a commitment to excellence and a passion for innovation. We are constantly exploring new technologies and techniques to improve our products and services and provide our clients with the most cutting-edge solutions available.
                            <br/><br/>
                            Whether you are looking to streamline your manufacturing processes, optimize your supply chain, or improve your overall operations, we are here to help. Contact us today to learn more about our industrial solutions and how we can help you achieve your goals.
                        </div>
                    </div>

                </div>
            </section>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>We are dedicated to providing top-quality services to our clients, and we strive to meet and exceed their expectations. Our services are designed to meet a wide range of needs, and we are committed to providing excellent customer service and support throughout every step of the process.</p>
                    </div>

                    <div className="row reveal">
                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
                            <div className="icon-box">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4><a href="#">Vendor Consolidation</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">Inventory Management</a></h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="#">CAPEX / OPEX procurement</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-tachometer"></i></div>
                                <h4><a href="#">Vendor Managed Inventory (VMI)</a></h4>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-layer"></i></div>
                                <h4><a href="#">SIS projects&nbsp;&nbsp;</a></h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon"><i className="bx bx-layer"></i></div>
                                <h4><a href="#">CSR projects&nbsp;&nbsp;</a></h4>
                                <p></p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="why-us">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" >
                            <img src={ValueImage} className="img-fluid reveal" alt="" style={{ height: "300px" }} />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left"  style={{ padding: "2%" }}>
                            <br />
                            <h3>Our Values </h3>
                            <br />
                            <p className="fst-italic">
                                <ul>
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Quality</li>
                                    <br />
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Customer Satisfaction and Deliver Exceptional Service</li>
                                    <br />
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Integrity</li>
                                    <br />
                                    <li><BookmarkStarFill size={25} color="orange" />&nbsp; Operate With Excellence</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">

                    <div className="row">
                        <div className="col-lg-9 text-center text-lg-start">
                            <h3>Call To Action</h3>
                            <br />
                            <p>
                                Whether you're looking to upgrade your machinery and equipment, IT Products & Accessories, or optimize your operations through expert consulting and support, we have the solutions and expertise to help you achieve success.
                                <br/><br/>
                                So why wait? Contact us today to learn more about our industrial solutions and how we can help you take your business to the next level. We look forward to hearing from you and helping you achieve your goals.
                            </p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <Link
                                activeclassName=""
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={400}
                                className="cta-btn align-middle"
                            >
                                Call To Action
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
            <section id="categories" class="portfolio">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                    <h2>Categories</h2>
                        <p>Welcome to our industrial solutions company's categories! Here you will find an overview of the different categories of industrial solutions we offer to help you find the products and services that best suit your needs.</p>
                    </div>

                    <ul id="portfolio-flters" class="d-grid-mobile d-flex justify-content-center" data-aos="fade-up" >
                        <li onClick={ ()=> setSelectedCategory("INDUSTRIAL_SUPPLIES") } className={selectedCategory === "INDUSTRIAL_SUPPLIES"? "filter-active" : ""}>Industrial Supplies</li>
                        <li onClick={ ()=> setSelectedCategory("SAFETY_SUPPLIES") } className={selectedCategory === "SAFETY_SUPPLIES"? "filter-active" : ""}> Safety Supplies</li>
                        <li onClick={ ()=> setSelectedCategory("OFFICE_SUPPLIES") } className={selectedCategory === "OFFICE_SUPPLIES"? "filter-active" : ""}> Office Supplies</li>
                        <li onClick={ ()=> setSelectedCategory("CUSTOMISED_PRODS") } className={selectedCategory === "CUSTOMISED_PRODS"? "filter-active" : ""}> Customised Products</li>
                        <li onClick={ ()=> setSelectedCategory("CHEMICALS") } className={selectedCategory === "CHEMICALS"? "filter-active" : ""}> Chemicals</li>
                    </ul>
                    <br/>
                    <div class="row portfolio-container" style={{marginLeft : "0" }}>
                        {
                            selectedCategory === "INDUSTRIAL_SUPPLIES" &&
                            <div className='row'>
                                <div className="col-xl-1 d-flex align-items-stretch" data-aos="zoom-in" >
                                </div>
                                <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                        <h3>Abrasives</h3>
                                        <ul>
                                            <li>Wheels and Belts</li>
                                            <li>Cutting Wheel</li>
                                            <li>Grinding Wheel</li>
                                            <li>Dressing Tool</li>
                                        </ul>
                                        <br/>
                                        <h3>Tapes, Adhesives and Sealers</h3>
                                        <ul>
                                            <li>Waterproofing</li>
                                            <li>Tapes</li>
                                            <li>Synthetic Adhesives</li>
                                            <li>Epoxy Putty</li>
                                            <li>Dispensing Guns</li>
                                        </ul>
                                        <br/>
                                        <h3>Safety</h3>
                                        <ul>
                                            <li>PVC Safety Shoes</li>
                                            <li>Steel Insole Shoes</li>
                                            <li>Reflective Jacket</li>
                                            <li>First Aid Kit</li>
                                            <li>Safety Goggles</li>
                                            <li>Safety Helmet</li>
                                            <li>Road Safety</li>
                                            <li>Respiratory Protector</li>
                                            <li>Fall Protection</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                        <h3>Power Transmission Products</h3>
                                        <ul>
                                            <li>Couplings</li>
                                            <li>Sprockets</li>
                                            <li>Chains</li>
                                            <li>Seals</li>
                                            <li>Bushing Hubs</li>
                                            <li>Belts</li>
                                            <li>Bearings</li>
                                        </ul>
                                        <br/>
                                        <h3>Material Handlings</h3>
                                        <ul>
                                            <li>Insulated storage</li>
                                            <li>Racks</li>
                                            <li>Carts</li>
                                            <li>Plastic Trays</li>
                                            <li>Ladders</li>
                                        </ul>
                                        <br/>
                                        <h3>Fasteners</h3>
                                        <ul>
                                            <li>Washer</li>
                                            <li>Screws</li>
                                            <li>Nut and Bolt</li>
                                            <li>Circle Clips</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                        <h3>Hand Tools</h3>
                                        <ul>
                                            <li>Hand Tool Kit</li>
                                            <li>Vices and Clamps</li>
                                            <li>Tool Storage</li>
                                            <li>Plier</li>
                                            <li>Torque Wrenches</li>
                                            <li>Screw Driver Set</li>
                                            <li>Spanner and Wrenches</li>
                                            <li>Screw Driver and Nut Driver</li>
                                            <li>Hammer</li>
                                        </ul>
                                        <br/>
                                        <h3>Electrical</h3>
                                        <ul>
                                            <li>Circuit Breaker and Fuses</li>
                                            <li>Wires and Cables</li>
                                            <li>Relay and Contractor</li>
                                            <li>Power and Socket</li>
                                            <li>Power Generator</li>
                                            <li>Distribution Board</li>
                                            <li>Drives</li>
                                            <li>Panels</li>
                                            <li>FR electrical products</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            selectedCategory === "SAFETY_SUPPLIES" &&
                            <div className='row'>
                                <div className="col-xl-1 d-flex align-items-stretch" data-aos="zoom-in" >
                                </div>
                                <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                        <h3>Masks</h3>
                                        <ul>
                                            <li>3-Ply</li>
                                            <li>2-Ply</li>
                                            <li>Surgical Face Mask</li>
                                            <li>N-95 Mask</li>
                                            <li>KN95 Mask</li>
                                            <li>Respiratory Masks</li>
                                            <li>Dust Masks</li>
                                            <li>Cloth Mask</li>
                                        </ul>
                                        <br/>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                        <h3>Safety Gloves</h3>
                                        <ul>
                                            <li>Latex</li>
                                            <li>Nitrile</li>
                                            <li>PVC (polythene)</li>
                                            <li>Cottons</li>
                                            <li>Chemical Resistant</li>
                                            <li>Heat Resistant</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                        <h3>Other Safety Items</h3>
                                        <ul>
                                            <li>PVC Safety Shoes</li>
                                            <li>Steel Insole Shoes</li>
                                            <li>Reflective Jacket</li>
                                            <li>First Aid Kit</li>
                                            <li>Safety Goggles</li>
                                            <li>Safety Helmet</li>
                                            <li>Road Safety</li>
                                            <li>Respiratory Protector</li>
                                            <li>Fall Protection</li>
                                            <li>Hair Nets</li>
                                            <li>Shoe Covers</li>
                                            <li>Faceshields</li>
                                            <li>PPE Kits</li>
                                            <li>Aprons</li>
                                            <li>Customised Safety Kits</li>
                                            <li>Chemical Resistant Suits</li>
                                        </ul>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            selectedCategory === "OFFICE_SUPPLIES" &&
                            <div className='row'>
                                <div className="col-xl-1 d-flex align-items-stretch" data-aos="zoom-in" >
                                </div>
                                <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                        <h3>Electronics</h3>
                                        <ul>
                                            <li>LED TV</li>
                                            <li>Interactive Touch Panels</li>
                                            <li>Refrigerators</li>
                                            <li>Air Conditioners</li>
                                            <li>Consumer Electronics</li>
                                        </ul>
                                        <br/><br/>
                                        <h3>IT Products & Accessories</h3>
                                        <ul>
                                            <li>Laptops</li>
                                            <li>Computers</li>
                                            <li>Desktop</li>
                                            <li>Tablets</li>
                                            <li>Mobile Phones</li>
                                            <li>SSD</li>
                                            <li>Hard Drives</li>
                                            <li>LAN Cables</li>
                                            <li>CCTV</li>
                                            <li>Projectors</li>
                                        </ul>
                                        <br/>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                        <h3>Corporate Giftings</h3>
                                        <ul>
                                            <li>Wide range of gifts for employees</li>
                                        </ul>
                                        <br/>
                                        <h3>Office Furniture</h3>
                                        <br/>
                                        <h3>Office Stationary</h3>
                                        <br/>
                                        <h3>Printed Stationary</h3>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            selectedCategory === "CUSTOMISED_PRODS" &&
                            <div className='row'>
                                <div className="col-xl-1 d-flex align-items-stretch" data-aos="zoom-in" >
                                </div>
                                <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                        <h3>Storage Racks</h3>
                                        <br/>
                                        <h3>Mechanical Spares</h3>
                                        <br/>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                        <h3>Electrical Panels</h3>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                        <h3>Sheet metal fabricated products</h3>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            selectedCategory === "CHEMICALS" &&
                            <div className='row'>
                                <div className="col-xl-1 d-flex align-items-stretch" data-aos="zoom-in" >
                                </div>
                                <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                        <h3> Construction Chemicals</h3>
                                        <br/>
                                        <h3>ETP & STP Plant Chemicals</h3>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                        <h3>Food Chemicals</h3>
                                        <br/>
                                        <h3>Oil & Lubricants</h3>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-file"></i></div>
                                        <h3>Industrial & General</h3>
                                        <br/>
                                        <h3>Metal & Surface Treatment</h3>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>

                </div>
            </section>
            <section id="contact" className="contact section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Thank you for your interest in our services. Please send an email to us with your contact information and a brief message about your inquiry. We will get back to you as soon as possible. Thank you!</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <GeoAltFill size={35}/>
                                    <h4>Branch Office</h4>
                                    <p>
                                        Office No. 321, Tower D,
                                        Chandigarh City Centre,
                                        Zirakpur - 140603, Punjab
                                    </p>
                                </div>
                                <div className="address">
                                    <GeoAltFill size={35}/>
                                    <h4>Registerred Office</h4>
                                    <p>
                                        Village - Bhagwanpura, Barwala Road,
                                        DeraBassi
                                        Punjab - 140507
                                    </p>
                                </div>

                                <div className="email">
                                    <EnvelopeAtFill size={35} />
                                    <h4>Email:</h4>
                                    <p>
                                        sales@ssisindia.co.in
                                        <br/>
                                        ops@ssisindia.co.in
                                    </p>
                                </div>

                                <div className="phone">
                                    <PhoneFill  size={35}  />
                                    <h4>Call:</h4>
                                    <p>
                                        +91 - 7696672502
                                        <br/>
                                        +91 - 98144 12360
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d858.3413675453669!2d76.81626023563389!3d30.623656095191542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fead1b4c5ad41%3A0xde4256f38f066c10!2sTower-D%2C%20Affinity%20Greens%2C%20Punjab%20140603!5e0!3m2!1sen!2sin!4v1680121420471!5m2!1sen!2sin"
                                frameborder="0"
                                height="600"
                                width="800"
                                allowfullscreen>
                            </iframe>
                        </div>

                    </div>

                </div>
            </section>

        </main>

    )
}

export default Main