import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import CountUp from 'react-countup';
import BookCar from './BookCar';
class Home extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {

    //     }
    // }


    render() {
        // 
        return (
            <React.Fragment>

                <Nav style={{ position: "fixed" }} />
                <section id="hero">

                    <div class="container">
                        <div data-aos="zoom-out">
                            <br />
                            <h1 style={{ textAlign: "center" }}>Plan Your Journey with <span>Rapid Rental</span></h1>
                        </div>
                        <div class="row justify-content-between" style={{ maxHeight: "80vh" }}>
                            <div class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                                <div data-aos="zoom-out">
                                    {/* <h1>Plane Your Journey with <span>India Drive</span></h1> */}
                                    {/* <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, magni!</h2>
                        <div class="text-center text-lg-start">
                            <a href="http://localhost:3000/" class="btn-get-started scrollto">Get Started</a>
                        </div> */}
                                    
                                    <BookCar flag={0} />
                                    {/* {this.getBookengine} */}
                                </div>
                            </div>
                            <div class="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
                                <img src="assets/img/b.svg" class="img-fluid animated" alt="" style={{ marginTop: "15%" }} />
                            </div>
                        </div>
                    </div>

                    <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 24 150 28 " preserveAspectRatio="none" >
                        <defs>
                            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g class="wave1">
                            <use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
                        </g>
                        <g class="wave2">
                            <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
                        </g>
                        <g class="wave3">
                            <use href="#wave-path" x="50" y="9" fill="#fff" />
                        </g>
                    </svg>

                </section>
                {/* <!-- End Hero --> */}

                <main id="main">
                    {/* <!-- ======= Counts Section ======= --> */}
                    <section id="counts" class="counts">
                        <div class="container">

                            <div class="row" data-aos="fade-up">

                                <div class="col-lg-3 col-md-6">
                                    <div class="count-box">
                                        <i class="bi bi-emoji-smile"></i>
                                        <CountUp end={100} duration={5} />
                                        <p>Happy Clients</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                                    <div class="count-box">
                                        <i class="bi bi-geo-alt-fill"></i>
                                        <CountUp end={50} duration={5} />
                                        <p>Centers</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                    <div class="count-box">
                                        <i class="bi bi-headset"></i>
                                        <CountUp end={1000} duration={5} />
                                        <p>Hours Of Support</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                    <div class="count-box">
                                        <i class="bi bi-people"></i>
                                        <CountUp end={5} duration={5} />
                                        <p>Hard Workers</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>


                    {/* <!-- ======= Features Section ======= --> */}
                    <section id="features" className="features" style={{ backgroundColor: '#f5f5ff' }}>


                        <div class="container">

                            <div class="section-title" data-aos="fade-up">
                                <h2>Features</h2>
                                <p>Check The Features</p>
                            </div>

                            <section id="services" class="services">

                                <div class="container" data-aos="fade-up">


                                    <div class="row gy-4 ">

                                        <div class="col-lg-4 col-md-6 " data-aos="fade-up" data-aos-delay="200">
                                            <div class="service-box gray feature_item" style={{ "background": "white" }}>
                                                <div class="left_icon " data-toggle="modal" data-target="#feature1">
                                                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_JXUInT.json"
                                                        background="transparent" speed="1.5" style={{ "width": "300px", "height": "300px" }}
                                                        loop autoplay>
                                                    </lottie-player>
                                                </div>
                                                <h3>Easy to Book and Cancel</h3>
                                                <p>When you choose us for your cab booking requirements, we offer you premium services, and most importantly, high reliability.</p>
                                                {/* <a href="" data-target="#servicemodel1" class="read-more"
                                                    data-toggle="modal"><span>Read More</span> <i class="bi bi-arrow-right"></i></a> */}
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                            <div class="service-box gray feature_item">
                                                <div class="left_icon " data-toggle="modal" data-target="#feature1">
                                                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_fxvz0c.json"
                                                        background="transparent" speed="1.5" style={{ "width": "300px", "height": "300px" }}
                                                        loop autoplay>
                                                    </lottie-player>
                                                </div>
                                                <h3>Rent by the Hour, Day, Week, or Month</h3>
                                                <p>You could have our rental service anytime on an hourly basis, on a weekly or monthly basis...</p>
                                                {/* <a href="" data-target="#servicemodel2" class="read-more"
                                                    data-toggle="modal"><span>Read More</span> <i class="bi bi-arrow-right"></i></a> */}
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                            <div class="service-box gray feature_item">
                                                <div class="left_icon " data-toggle="modal" data-target="#feature1">
                                                    <lottie-player src="https://assets7.lottiefiles.com/temp/lf20_JvT50n.json"
                                                        background="transparent" speed="1.5" style={{ "width": "300px", "height": "300px" }}
                                                        loop autoplay>
                                                    </lottie-player>
                                                </div>
                                                <h3>Located in Your Neighbourhood or Near Your Office</h3>
                                                <p>You can find the nearest location where you could be booking your car  and thier we are available with veriety of cars ...</p>
                                                {/* <a href="" data-target="#servicemodel3" class="read-more"
                                                    data-toggle="modal"><span>Read More</span> <i class="bi bi-arrow-right"></i></a> */}
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500" id="services2">
                                            <div class="service-box gray feature_item">
                                                <div class="left_icon " data-toggle="modal" data-target="#feature1">
                                                    <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_h8rfc2ov.json"
                                                        background="transparent" speed="1.5" style={{ width: "300px", height: "300px" }}
                                                        loop autoplay></lottie-player>
                                                </div>

                                                <h3>Range of Cars: Luxury, Sedan</h3>
                                                <p>We are having varities of car accordingly your requirements such as small car,campact car intermediate car,sedan cars,SUV cars</p>
                                                {/* <a href="" data-target="#servicemodel4" class="read-more"
                                                    data-toggle="modal"><span>Read More</span> <i class="bi bi-arrow-right"></i></a> */}
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                            <div class="service-box gray feature_item">
                                                <div class="left_icon " data-toggle="modal" data-target="#feature1">
                                                    <lottie-player
                                                        src="https://assets2.lottiefiles.com/private_files/lf30_uocwkpt8.json"
                                                        background="transparent" speed="1.5" style={{ width: "300px", height: "300px" }}
                                                        loop autoplay>
                                                    </lottie-player>
                                                </div>
                                                <h3>Book weeks or minutes before pick-up</h3>
                                                <p>You could book our cars accordingly your needs like book before a day, week, month of your pickup day..</p>
                                                {/* <a data-target="#servicemodel5" class="read-more"
                                                    data-toggle="modal"><span>Read More</span> <i class="bi bi-arrow-right"></i></a> */}
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="700">
                                            <div class="service-box gray feature_item">
                                                <div class="left_icon " data-toggle="modal" data-target="#feature1">
                                                    <lottie-player
                                                        src="https://assets10.lottiefiles.com/packages/lf20_9ee7bmlt.json"
                                                        background="transparent" speed="1.5" style={{ width: "300px", height: "300px" }}
                                                        loop autoplay>
                                                    </lottie-player>
                                                </div>
                                                <h3>Our Cars Have All-India Permits</h3>
                                                <p>We have all india permits for our car rental service so that you can enjoy every bit of your journey..</p>
                                                {/* <a href="" data-target="#servicemodel6" class="read-more"
                                                    data-toggle="modal"><span>Read More</span> <i class="bi bi-arrow-right"></i></a> */}
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </section>
                        </div>
                    </section>
                    {/* <!-- End Features Section -->


        <!-- ======= Details Section ======= --> */}
                    <section id="aboutus" class="details">
                        <div class="container">
                            <div class="section-title" data-aos="fade-up">
                                <h2>About Us</h2>
                                <p></p>
                            </div>
                            <div class="row content">
                                <div class="col-md-4 mt-5" data-aos="fade-right">
                                    <img src="assets/img/history.svg" class="img-fluid" alt="" />
                                </div>
                                <div class="col-md-8 pt-4" data-aos="fade-up">
                                    <h3 id="aboutUsHistory">History</h3>



                                    <p>

                                        Companies like Avis, Carzonrent etc were already in India for quite some time but were not widely recognised as self-drive car
                                        rental companies. In 2021 Indian drive came into existence and that???s when the self-drive car business started to pick up steam. All other companies also pushed in for a bigger chunk of this lucrative business that was still untapped in a country as large as India. These self-drive car rental companies came in to fill the gap for people who loved to travel to far off places but didn???t own a car. Today there are multiple car rental companies in India catering to the self-driving as well as the chauffeur-driven audience making it one of the fastest growing industries in India. According to a report the car rental industry in India is growing at the compound annual
                                        growth rate of 35% and is expected to accelerate further. It is expected to be worth more than INR 1000 billion by 2022.
                                    </p>
                                </div>
                            </div>

                            <div class="row content">
                                <div class="col-md-4 order-1 order-md-2" data-aos="fade-left">
                                    <img src="assets/img/fresult1.svg" class="img-fluid" alt="" />
                                </div>
                                <div class="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
                                    <h3 id="aboutUsFinancialResult">Financial Result</h3>

                                    <p>
                                        Revenue in the Car Rentals segment is projected to reach US$2,294m in 2021.
                                        Revenue is expected to show an annual growth rate (CAGR 2021-2025) of 15.46%, resulting in a projected market
                                        volume of US$4,076m by 2025.In the Car Rentals segment, the number of users is expected to amount to 77.5m users by 2025.
                                        User penetration is 3.4% in 2021 and is expected to hit 5.4% by 2025.
                                        The average revenue per user (ARPU) is expected to amount to US$48.15.
                                        In the Car Rentals segment, 71% of total revenue will be generated through online sales by 2025.
                                    </p>
                                </div>
                            </div>

                            <div class="row content">
                                <div class="col-md-4 mt-lg-5" data-aos="fade-right">
                                    <img src="assets/img/managment.svg" class="img-fluid" alt="" />
                                </div>
                                <div class="col-md-8 pt-5" data-aos="fade-up">
                                    <h3 id="aboutUsManagement">Management</h3>
                                    <p>
                                        Vehicle Rental Management System helps in automating all the services like booking, finding the car, collecting the car, returning, accounting, and vehicle management.

                                        Car rental companies run by purchasing or leasing several fleet vehicles and renting them to their purchasers for a fee. Generally, the vehicles need to be returned in the same condition it was rented in that is they must not exceed the mileage restrictions or if any damage on the vehicle then the customer will be charged extra for these services. These details are maintained in the vehicle rental system.

                                        The vehicle rental management system helps in changing the manual process of bookings to a computerized system. The vehicle rental system helps in keeping a check on the vehicles. The vehicle rental system provides a car catalogue for the customers to select a car they want. The vehicle rental management system restricts the number of users and the admin decides on the accessibility to the process.
                                        The vehicle rental system allows the customers to give feedback on the travel.
                                    </p>
                                </div>
                            </div>



                        </div>
                    </section>
                    {/* <!-- End Details Section -->



      
        <!-- ======= Pricing Section ======= --> */}
                    <section id="pricing" class="pricing">
                        <div class="container">

                            <div class="section-title" data-aos="fade-up">
                                <h2>Pricing</h2>
                                <p>Check our Pricing</p>
                            </div>

                            <div class="row" data-aos="fade-left">

                                <div class="col-lg-4 col-md-6">
                                    <div class="box featured " data-aos="zoom-in" data-aos-delay="100">
                                        <h3>Small Car</h3>

                                        <ul>
                                            <li>
                                                <h4>???300.00<span> / Day</span></h4>
                                            </li>
                                            <li>
                                                <h4>???2100.00<span> / Week</span></h4>
                                            </li>
                                            <li>
                                                <h4>???9400.00<span> / Month</span></h4>
                                            </li>
                                        </ul>
                                        <div class="btn-wrap">
                                            <a href="#" class="btn-buy">Book Now</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                                    <div class="box featured" data-aos="zoom-in" data-aos-delay="200">
                                        <h3>Compact Cars</h3>
                                        <ul>
                                            <li>
                                                <h4>???320.00<span> / Day</span></h4>
                                            </li>
                                            <li>
                                                <h4>???2240.00<span> / Week</span></h4>
                                            </li>
                                            <li>
                                                <h4>???9500.00<span> / Month</span></h4>
                                            </li>
                                        </ul>
                                        <div class="btn-wrap">
                                            <a href="#" class="btn-buy">Book Now</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div class="box featured " data-aos="zoom-in" data-aos-delay="300">
                                        <h3>Intermediate</h3>
                                        <ul>
                                            <li>
                                                <h4>???400.00<span> / Day</span></h4>
                                            </li>
                                            <li>
                                                <h4>???2800.00<span> / Week</span></h4>
                                            </li>
                                            <li>
                                                <h4>???9800.00<span> / Month</span></h4>
                                            </li>
                                        </ul>
                                        <div class="btn-wrap">
                                            <a href="#" class="btn-buy">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div class="row">
                                <div class="col-3">

                                </div>
                                <div class="col-3">
                                    <div class="box featured " data-aos="zoom-in" data-aos-delay="400">
                                        {/* <!-- <span class="advanced">Advanced</span> --> */}
                                        <h3>Sedan</h3>
                                        <ul>
                                            <li>
                                                <h4>???440.00<span> / Day</span></h4>
                                            </li>
                                            <li>
                                                <h4>???3200.00<span> / Week</span></h4>
                                            </li>
                                            <li>
                                                <h4>???10200.00<span> / Month</span></h4>
                                            </li>
                                        </ul>
                                        <div class="btn-wrap">
                                            <a href="#" class="btn-buy">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="box featured " data-aos="zoom-in" data-aos-delay="400">
                                        {/* <!-- <span class="advanced">Advanced</span> --> */}
                                        <h3>SUV</h3>
                                        <ul>
                                            <li>
                                                <h4>???500.00<span> / Day</span></h4>
                                            </li>
                                            <li>
                                                <h4>???3400.00<span> / Week</span></h4>
                                            </li>
                                            <li>
                                                <h4>???10600.00<span> / Month</span></h4>
                                            </li>
                                        </ul>
                                        <div class="btn-wrap">
                                            <a href="#" class="btn-buy">Book Now</a>
                                        </div>
                                    </div>


                                </div>
                                <div class="col-3">

                                </div>
                            </div>

                        </div>
                    </section>
                    {/* <!-- End Pricing Section -->

        <!-- ======= F.A.Q Section ======= --> */}
                    <section id="faq" class="faq section-bg">
                        <div class="container">

                            <div class="section-title" data-aos="fade-up">
                                <h2>F.A.Q</h2>
                                <p>Frequently Asked Questions</p>
                            </div>

                            <div class="faq-list">
                                <ul>
                                    <li data-aos="fade-up">
                                        <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse"
                                            data-bs-target="#faq-list-1">Do I have to return the car to the same location where I
                                            picked it up? <i class="bx bx-chevron-down icon-show"></i><i
                                                class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                                            <p>
                                                Yes. You must bring the vehicle back to the same place you picked it up before the
                                                end of your reservation. If you dropoff the car at a location different from your
                                                pickup point, you will be charged INR 2,000, and the full hourly rate and late fees
                                                until
                                                the vehicle is returned to the correct location.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up" data-aos-delay="100">
                                        <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse"
                                            data-bs-target="#faq-list-2" class="collapsed">What happens if I return the car late? <i
                                                class="bx bx-chevron-down icon-show"></i><i
                                                    class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                                            <p>
                                                a) A standard hourly fee will be applicable per hour of delay. b) Free KMs will be
                                                given per hour as per your booked package. c) In addition to the standard hourly
                                                fee, every hour of delay would be charged at Rs. 300/hour,
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up" data-aos-delay="200">
                                        <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse"
                                            data-bs-target="#faq-list-3" class="collapsed">Is there a km limit to how much I can
                                            drive?<i class="bx bx-chevron-down icon-show"></i><i
                                                class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                                            <p>
                                                With reference to the km package which you select you are eligible to drive
                                                accordingly.For example, if you opt for 10 km/hr package then 5 hours reservation
                                                would come with 50 km in driving at no additional charge, while a 3 day reservation
                                                would come
                                                with 720 km in driving at no additional charges. There is a per-km charge for each
                                                km beyond that point. Please see Zoomcar tariffs for more details.
                                            </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up" data-aos-delay="300">
                                        <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse"
                                            data-bs-target="#faq-list-4" class="collapsed">How will I receive my Refund? <i
                                                class="bx bx-chevron-down icon-show"></i><i
                                                    class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                                            <p>
                                                "Refund will be initiated to the account/card used to make the payment and will take
                                                upto 30 days to settle." If the payment was made from the wallet account, it would
                                                take 24-48 hrs for the refund to settle. </p>
                                        </div>
                                    </li>

                                    <li data-aos="fade-up" data-aos-delay="400">
                                        <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse"
                                            data-bs-target="#faq-list-5" class="collapsed">How do I extend my booking end time?
                                            <i class="bx bx-chevron-down icon-show"></i><i
                                                class="bx bx-chevron-up icon-close"></i></a>
                                        <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                                            <p>
                                                Extension is subject to vehicle availability and extension can be done before the
                                                booking end time. To extend the booking you have to 1. Login to Zoomcar application
                                                2. Click on My trips from Menu option 3. Select the booking 4. Click on extend
                                                booking
                                                right below the Remaining time. 5. If yes, Key in your desired extension time. 6.
                                                Pay the amount immediately to confirm your extension. Failing to pay the extension
                                                amount immediately would reverse the extended time
                                                and you will have to drop back the vehicle within the originally reserved time. Any
                                                Late drop without extension would incur late fees and charges.
                                                https://www.zoomcar.com/policy#feePolicy." Extend booking option will
                                                be available only if the vehicle is available for extension.
                                            </p>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </section>
                    {/* <!-- End F.A.Q Section -->

        <!-- ======= Contact Section ======= --> */}
                    <section id="contact" class="contact">
                        <div class="container">

                            <div class="section-title" data-aos="fade-up">
                                <h2>Contact</h2>
                                <p>Contact Us</p>
                            </div>

                            <div class="row">

                                <div class="col-lg-4" data-aos="fade-right" data-aos-delay="100">
                                    <div class="info">
                                        <div class="address">
                                            <i class="bi bi-geo-alt"></i>
                                            <h4>Location:</h4>
                                            <p>Ayodhya Nagar, Near Aditya Park Mumbai</p>
                                        </div>

                                        <div class="email">
                                            <i class="bi bi-envelope"></i>
                                            <h4>Email:</h4>
                                            <p>rapidrental123@gmail.com</p>
                                        </div>

                                        <div class="phone">
                                            <i class="bi bi-phone"></i>
                                            <h4>Call:</h4>
                                            <p>+91 1234567899</p>
                                        </div>

                                    </div>

                                </div>

                                <div class="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">

                                    <form action="http://localhost:5555/contact_us" method="POST" role="form"
                                        class="php-email-form">
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <input type="text" name="first_name" class="form-control" id="name"
                                                    placeholder="Your First Name" required />
                                            </div>
                                            <div class="col-md-6 form-group mt-3 mt-md-0">
                                                <input type="text" name="last_name" class="form-control" id="name"
                                                    placeholder="Your Last Name" required />
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6 form-group">
                                                <input type="text" name="phone" class="form-control" id="name"
                                                    placeholder="Your Phone" required />
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <input type="email" class="form-control" name="email" id="email"
                                                    placeholder="Your Email" required />
                                            </div>
                                        </div>
                                        <div class="form-group mt-3">
                                            <input type="text" class="form-control" name="subject" id="subject"
                                                placeholder="Subject" required />
                                        </div>
                                        <div class="form-group mt-3">
                                            <textarea class="form-control" name="message" rows="5" placeholder="Message"
                                                required></textarea>
                                        </div>
                                        <div class="my-3">
                                            <div class="loading">Loading</div>
                                            <div class="error-message"></div>
                                            <div class="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div class="text-center"><button type="submit">Send Message</button></div>
                                    </form>

                                </div>

                            </div>

                        </div>
                    </section>
                    {/* <!-- End Contact Section --> */}

                </main>
                <Footer />
            </React.Fragment>

        )
    }
}

export default Home