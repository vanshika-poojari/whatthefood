
import React, { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Home = () => {
  const sliderRef = useRef(null);
  const [shadowClass, setShadowClass] = useState('');
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '0px',
  });




  const handleShadow = (current) => {
    if (!sliderRef.current) return;
  
    const slideCount = sliderRef.current.innerSlider.state.slideCount;
  
    if (current === 0) {
      setShadowClass('no-shadow-left');
    } else if (current === slideCount - sliderSettings.slidesToShow) {
      setShadowClass('no-shadow-right');
    } else {
      setShadowClass('');
    }
  };
   useEffect(() => {
    const updateSettings = () => {
      if (window.innerWidth < 768) {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 1,
          slidesToScroll: 1,
        }));
      } else {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 3,
          slidesToScroll: 3,
        }));
      }
    };
    updateSettings(); // Set initial settings
    window.addEventListener('resize', updateSettings); // Update settings on resize

    return () => {
      window.removeEventListener('resize', updateSettings);
    };
  }, []);

  const testimonials = [
    {
      id: "first", 
      name: "Savannah",
      videoSrc: "https://www.youtube.com/embed/HwZQxvuICjM?si=8YdW_mBS7iXMB9TU&amp;start=2",
      quote: "As a student with irregular schedules, What The Food's easy-to-follow meal plans have kept me energized and balanced, even during exams.",
      author: "Malik Shkraba",
      position: "COO of Friday"
    },
    {
      id: "second", 
      name: "Damon",
      videoSrc: "https://www.youtube.com/embed/HwZQxvuICjM?si=8YdW_mBS7iXMB9TU&amp;start=2",
      quote: "As a student with irregular schedules, What The Food's easy-to-follow meal plans have kept me energized and balanced, even during exams.",
      author: "Jane Doe",
      position: "Nutrition Specialist"
    },
    {
      id: "third", 
      name: "Srishty",
      videoSrc: "https://www.youtube.com/embed/HwZQxvuICjM?si=8YdW_mBS7iXMB9TU&amp;start=2",
      quote: "As a student with irregular schedules, What The Food's easy-to-follow meal plans have kept me energized and balanced, even during exams.",
      author: "John Smith",
      position: "Health Coach"
    },
    {
      id: "fourth", 
      name: "Aryan",
      videoSrc: "https://www.youtube.com/embed/HwZQxvuICjM?si=8YdW_mBS7iXMB9TU&amp;start=2",
      quote: "As a student with irregular schedules, What The Food's easy-to-follow meal plans have kept me energized and balanced, even during exams.",
      author: "Emily Johnson",
      position: "Fitness Trainer"
    },
    {
      id: "fifth", 
      name: "Lily",
      videoSrc: "https://www.youtube.com/embed/HwZQxvuICjM?si=8YdW_mBS7iXMB9TU&amp;start=2",
      quote: "As a student with irregular schedules, What The Food's easy-to-follow meal plans have kept me energized and balanced, even during exams.",
      author: "Michael Brown",
      position: "Dietitian"
    }
  ];
  return (

    <div className="homediv">

      <h2 className="text1">What The Food</h2>
      <div className="homediv2">
        <h1 className="text2"><span className="transforming">Transforming </span> <span className="lives"> Lives</span></h1>
        <h1 className="text3"> <span className="through">Through</span> <span className="nutrition">Nutrition</span></h1>

      </div>

      <br />
      <h3 className="text4">Revolutionizing food and nutrition with AI</h3>
      <br />
      <h3 className="text4" style={{ fontWeight: 'normal', color: 'grey'}} >We bring personalized meal plans and nutrition insights right to your finger tips</h3>

      <div className="divbtn">

        <button className="btn1">Coming Soon</button>
        <button className="btn2">Learn More</button>
        
      
        


      </div>
      {/* <img src = "src/assets/wheel.png " alt =  "img" className = "img"></img> */}

      <div className="div"> Health Specialists</div>

      <div className = "hear1">
        <h1 className="hear">Hear it directly from <span className="nut">nutrition</span></h1>
        <h1 className="spec">specialists</h1>
      </div>
      <h3 className="h3">Hear from Health Specialists: Our testimonials showcase the positive impact and <br /> satisfaction from those working closely with us</h3>

      <Slider
        className={`sliders ${shadowClass}`}
        {...sliderSettings} ref={sliderRef} afterChange={handleShadow}
        
      >
        {testimonials.map((testimonial, index) => (
          <div id={testimonial.id} className="child-div" key={index}>
            <iframe
              className="yt1"
              width="320"
              height="190"
              src={testimonial.videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h2 className="heading">{testimonial.name}</h2>
            <p className="textdiv">"{testimonial.quote}"</p>
            <p className="textpara">{testimonial.author} <br /> {testimonial.position}</p>
          </div>
        ))}
      </Slider>

      
    
     
     

    </div>

  )
}

export default Home