import React, { useEffect, useState } from "react";
import "../styles/Quote.css";
import axios from "axios";

interface Quote {
  id: string;
  tags: string[];
  content: string;
  author: string;
  authorSlug: string;
}

const QuoteApp: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);

  const quoteURL = "https://api.quotable.io/random";

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get(quoteURL);
      setCurrentQuote(response.data);
    } catch (error) {
      console.error(`Error fetching quote: ${error}`);
    }
  };

  return (
    <>
      {currentQuote && (
        <div className="quote-container">
          <blockquote className="quote">{currentQuote.content}</blockquote>
          <p className="author">- {currentQuote.author}</p>
        </div>
      )}
      <button className="button" onClick={fetchRandomQuote}>
        Generate Random Quote
      </button>
    </>
  );
};

export default QuoteApp;
