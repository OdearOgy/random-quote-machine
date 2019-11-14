import React from 'react'
import '../styles/quote.css';
import { fetchQuote } from '../helpers/fetchHelper'

export function Quote() {



  const handleTweetclick = (event) => {
    const aElm = event.target.closest('a');
    let quoteText = document.querySelector('#text');
    aElm.href += quoteText.textContent;
  }

  const handleQuoteFetch = (event) => {
    let quotesStorage = window.localStorage.getItem('quotes');
    let quotes = [];
    let qText = document.querySelector('#text');
    let qAuthor = document.querySelector('#author');

    // checking local storage for the quotes
    if (quotesStorage !== null ) { 
      quotes = JSON.parse(quotesStorage).quotes
    } else {
      fetchQuote(() => {
        try {
          quotes = JSON.parse(window.localStorage.getItem('quotes')).quotes
        } catch(err) {
          window.localStorage.removeItem('quotes')
        }
      });
    }


    setTimeout(() => {
      qText.textContent = `${quotes[returnRandom(quotes)]['quote']}`
      qAuthor.textContent = `${quotes[returnRandom(quotes)]['author']}`
    }, 100)
    
  }

  const returnRandom = (quotes) => {
    return Math.floor(Math.random() * (quotes.length) - 0) + 0
  }


  return (
    
    <div className="QuoteParent" id="quote-box" >

      <div className="QuoteBody">
        <h3 id="text">Hello, World</h3>
        <h5 id="author">Newbie Programmer</h5>
      </div>
      {/* <div className="QuoteImg"></div> */}


      <div className="QuoteBtnParent">
        <button className="QuoteBtn" onClick={handleQuoteFetch} id="new-quote">Get More Quotes</button>
        
        <a id="tweet-quote" href="https://twitter.com/intent/tweet?text=" onClick={handleTweetclick} target="_blank">
          <button className="QuoteBtn" >
              Tweet quote
          </button>
        </a>
      </div>
    </div>



  )
}