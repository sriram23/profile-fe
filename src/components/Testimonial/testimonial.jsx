import { Carousel } from 'react-responsive-carousel';
import './testimonial.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import MozAppreciation from "../../assets/testimonials/mozilla-appreciation.png"
import MozDojo from "../../assets/testimonials/mozilla-dojo.png"
import MozWebCompat from "../../assets/testimonials/mozilla-web-compat.png"
import MozWebsite from "../../assets/testimonials/mozilla-website.png"
import MozSpotlight from "../../assets/testimonials/spotlight.png"
import SquashAward from "../../assets/testimonials/quickest-fe-er.png"

const Testimonial = () => {
    const testimonials = [
        {id:6, image: SquashAward, desc: "Awarded as \"Quickest Front-End Engineer\" by Squash Apps on September 2020"},
        {id:2, image: MozDojo, desc: "My contributions published in Mozilla TN Blog"},
        {id:3, image: MozWebCompat, desc: "Received Tshirt for reporting few web compatibility issues to the Mozilla Team"},
        {id:4, image: MozWebsite, desc: "Appreciation for contributing to Mozilla TN website"},
        {id:5, image: MozSpotlight, desc: "Recognized as \"Spotlight of the month Feb'17\""},
        {id:1, image: MozAppreciation, desc: "Received Appreciation letter from Mozilla India"},
    ]
    return(
        <div className="testimonial-container" id='testimonial'>
            <h2>Testimonials</h2>
            <div className="carousel">
                <Carousel autoPlay infiniteLoop stopOnHover useKeyboardArrows>
                    {testimonials.map(tm => (
                        <div key={TextMetrics.id}>
                            <figure className="carousel-image">
                                <img src={tm.image} alt=""/>
                            </figure>
                            <p className="legend">{tm.desc}</p>
                        </div>
                    ))}
                </Carousel>
            </div>

        </div>
    )
}

export default Testimonial