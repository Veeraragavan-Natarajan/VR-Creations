import data from '../data/Services/serviceFaq.json';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

function FaqSection() {
    const [faqs, setFaqs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null); 

    useEffect(() => {
        setFaqs(data);
    }, []);

    const toggleFaq = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="faq-section">
            <div className="container">
                <div className="hero-content">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
                        Frequently Asked Questions
                    </h2>
                    <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "0" }}>
                        Get answers to common questions
                    </p>
                </div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.question}
                                <ChevronDown
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        transform: activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s ease"
                                    }}
                                />
                            </button>
                            <div
                                className="faq-answer"
                                style={{
                                    maxHeight: activeIndex === index ? "500px" : "0",
                                    overflow: "hidden",
                                    transition: "max-height 0.3s ease, padding 0.3s ease",
                                    padding: activeIndex === index ? "0 1.5rem 1.5rem" : "0 1.5rem 0"
                                }}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
