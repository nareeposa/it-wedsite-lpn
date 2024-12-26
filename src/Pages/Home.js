import React from "react";


function Home() {
    return (
        <div>


            {/* Carousel */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img
                            src="https://www.lannapoly.ac.th/web/gallery/20241121-094109.jpg"
                            className="d-block w-100"
                            alt="Information Technology Lab"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Welcome to IT Department</h5>
                            <p>Explore cutting-edge technologies and innovate the future.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img
                            src="https://www.lannapoly.ac.th/web/gallery/20241204-024758.jpg"
                            className="d-block w-100"
                            alt="Programming Class"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Learn to Code</h5>
                            <p>Develop skills in software development and problem-solving.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://www.lannapoly.ac.th/web/gallery/20240401-034105.jpg"
                            className="d-block w-100"
                            alt="Networking Workshop"
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Hands-on Experience</h5>
                            <p>Build and manage secure networks in our specialized labs.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* Sections */}
            <section id="about" className="py-5">
                <div className="container">
                    <h2>About Us</h2>
                    <p>Our IT department is dedicated to equipping students with the knowledge and skills required to thrive in a technology-driven world.</p>
                </div>
            </section>


            <section id="courses" className="py-5 bg-light">
                <div className="container">
                    <h2>Our Courses</h2>
                    <ul>
                        <li>Introduction to Programming</li>
                        <li>Data Science and Analytics</li>
                        <li>Web Development</li>
                        <li>Networking and Security</li>
                    </ul>
                </div>
            </section>


            <section id="contact" className="py-5">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Email: stu67319010113@lannapoly.ac.th</p>
                    <p>Phone: 081 231 9001</p>
                    <p>Address: IT4501 ปวส.1</p>
                </div>
            </section>
        </div>
    );
}


export default Home;



