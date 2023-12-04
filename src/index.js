/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultPassword: 'k~@Y*kAV1]',
    }
    this.getRandomUnicode = this.getRandomUnicode.bind(this)
    this.copyContent = this.copyContent.bind(this)
  }
  getRandomUnicode() {
    let password = ''
    let mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let symbols = ['@','#', '$', '%', '&', '?', '-', '+', '.', '*', ':',]
    let specialCharacters = ['!', '"', "'", '(', ')', ',', '/',  ';', '<', '=', '>', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']
    let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let i = 0
    let f = 0
    document.getElementById('numberLetters').value ? f = document.getElementById('numberLetters').value : f = 10
    while (i < f) {
      let randomWord = String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33)
      if (document.getElementById('mayus').checked === false && mayus.includes(randomWord)) {
        randomWord = ''
        i--
      }
      if (document.getElementById('specialCharacters').checked === false && specialCharacters.includes(randomWord)) {
        randomWord = ''
        i--
      }
      if (document.getElementById('number').checked === false && number.includes(randomWord)) {
        randomWord = ''
        i--
      }
      if (document.getElementById('symbols').checked === false && symbols.includes(randomWord)) {
        randomWord = ''
        i--
      }
      password += randomWord
      i++
    }
    this.setState(prevState => ({
      defaultPassword: password,
    }));
  }
  //copy to clipboard section//
  copyContent() {
    let text = document.getElementById('password').innerHTML;
    try {
      navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  render() {
    return (
      <div className='container-password'>
        <h1>This is a password generator</h1>
        <div className='password-display'>
          <h3 id='password'>{this.state.defaultPassword}</h3>
          <span>
            <a onClick={this.copyContent} className="btn btn-outline-success"><i className="bi bi-clipboard"></i></a>
            <a onClick={this.getRandomUnicode} className="btn btn-outline-success" ><i className="bi bi-arrow-clockwise"></i></a>
          </span>
        </div>
        <div className='button-seccion'>
          <div className='button-display'>
            <label htmlFor ='number'>How many letters <input type ='number' id='numberLetters'></input></label>
            <label htmlFor ='number'>Mayus <input type ='checkbox' id='mayus'></input></label>
            <label htmlFor ='number'>Minus <input type ='checkbox' id='minus'></input></label>
          </div>
          <div className='button-display'>
            <label htmlFor ='number'>Number <input type ='checkbox' id='number'></input></label>
            <label htmlFor ='number'>Special characters <input type ='checkbox' id='specialCharacters'></input></label>
            <label htmlFor ='number'>Symbols <input type ='checkbox' id='symbols'></input></label>
          </div>
        </div>
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 Ignacio Taborda</p>
                <ul className="social-icons">
                    <li><a href="https://github.com/El-nachio"><i className="bi bi-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/ignacio-taborda-26a2b321b/"><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/taborda__ignacio/"><i className="bi bi-instagram"></i></a></li>
                </ul>
            </div>
        </footer>
      </div>
    )
  }
}

ReactDOM.render(<PasswordGenerator />, document.getElementById('root'))
