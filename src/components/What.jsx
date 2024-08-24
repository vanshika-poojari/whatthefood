import React, { useState } from "react";
const faqs = [
    {
      question: "What is What The Food?",
      answer:
        "What The Food is a service that provides personalized meal plans...",
    },
    {
      question: "How does the personalized meal plan work?",
      answer:
        "Our personalized meal plans are tailored to your dietary needs and preferences...",
    },
    {
      question:
        "Is What The Food suitable for people with specific dietary restrictions?",
      answer:
        "Yes, we cater to various dietary restrictions including gluten-free, vegan, and more...",
    },
    {
      question: "How can What The Food help me achieve my fitness goals?",
      answer:
        "Our meal plans are designed to support your fitness goals by providing balanced nutrition...",
    },
    {
      question: "What kind of support can I expect from What The Food?",
      answer:
        "We offer support through our customer service team, available to help you with any questions...",
    },
    {
      question: "How do I get started with What The Food?",
      answer:
        "Getting started is easy! Just sign up on our website and fill out a brief questionnaire...",
    },
  ];
  
  
  const WellnessJourneySection = () => {
      return (
        <div className="wellness-journey-section">
          <h1 className="title">Ready to elevate</h1>
          <h2
          style={{
            textAlign: "center",
            color: "white",
            margin: "30px",
            fontSize: "50px",
          }}
        >
          your <span  style={{ color: "white" }}className="instrument-serif-regular-italic" >wellness journey?</span>
        </h2>
          {/* <h1 className="title italic">your wellness journey?</h1> */}
          <p className="description">
            If you want to revolutionize your health 
            with personalized nutrition
            and expert guidance, you've come to the right place.
          </p>
          <button className="coming-soon-btn">Coming Soon</button>
        </div>
      );
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function What() {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleToggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <div className="processButton">
          <span className="buttonText">What The FAQ?</span>
        </div>
  
        <h2
          style={{
            textAlign: "center",
            color: "black",
            margin: "30px",
            fontSize: "50px",
          }}
        >
          Got <span className="instrument-serif-regular-italic">Questions ?</span>
        </h2>
        <div style={{ maxWidth: "600px", margin: "auto" }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <button
                onClick={() => handleToggle(index)}
                style={{
                  width: "100%",
                  background: "black",
                  color: "white",
                  padding: "15px",
                  textAlign: "left",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                {faq.question}
                <span style={{ float: "right" }}>
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div
                  style={{
                    padding: "10px",
                    background: "black",
                    color: "#9fa19f",
                    border: "none",
                    borderRadius: "10px",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <WellnessJourneySection/>
        
      </div>
    );
  }
  
  export default What;
  