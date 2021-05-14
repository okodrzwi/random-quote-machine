import { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Paragraph from './components/Paragraph';
import Author from './components/Author';
import TweetQuote from './components/TweetQuote'
import { getQueriesForElement } from '@testing-library/dom';


class App extends Component {
constructor(props) {
  super(props);
  this.indexOfQuote = this.indexOfQuote.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.state = {
    quotes: [],
    indexOfQuote: null,
  };
}
  
  componentDidMount(){
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then(data => data.json())
      .then(data => this.setState({ quotes:data.quotes }, () => {
        this.setState({
          indexOfQuote: this.indexOfQuote()
        }
      )        
      })      
      
    )
      
  };
  indexOfQuote() {
    if (!this.state.quotes.length) {
      return undefined;
    }
      return Math.floor(Math.random() * this.state.quotes.length); 
  };
  handleClick() {
    this.setState({
      indexOfQuote: this.indexOfQuote()
    });
  };    
    get selectedQuote() {
      return this.state.quotes[this.state.indexOfQuote];
    
  };
  render() {
    console.log(this.state.indexOfQuote);
    return (

      <div id="quote-box" class="container">
        <Paragraph selectedQuote={this.selectedQuote}></Paragraph>
        	&nbsp;
        <Author selectedQuote={this.selectedQuote}></Author>
       <Button buttonDisplayName="Next Quote" handleClick={this.handleClick} />
        <TweetQuote></TweetQuote>
      </div>
    );
  }
}
export default App;
