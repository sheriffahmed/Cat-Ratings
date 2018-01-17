import React from "react";
import { render } from "react-dom";

class Select extends React.Component {
  render() {
    return(
    <div>
    </div>
    )
  }
}

const InlineRadioGroup = (props) => {
  const { likeRadioOptions} = props;

  return (
    <div>
    <p>From 1-5, How much do you like Cats?</p>
    {likeRadioOptions.map( ele => ( 
     <label> {ele} 
     <input name='rate' type="radio" value= {ele}  
      /> </label>
      ))}

    </div>

  );
};

class App extends React.Component {
  constructor() {
    super();

    this.likeRadioOptions = ["1", "2", "3", "4", "5"];
    this.isCatValues = ["yes", "no", "maybe"];

    this.state = {
      email: "",
      confirmEmail: "",
      likesCatsInput: "",
      isCatSelect: "",
      submitted: false
    };
  }

  validateInput = () => {
    const {
      email,
      confirmEmail,
      isCatSelect,
      likesCatsInput,
      submitted
    } = this.state;

    const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    // if (emailValid.includes(6) {
      // return true
      // email is vaild
      // this.setState({ emailValid: true })

    // } else{
    //   return false
    // }
  };

  handleInputChange = e => {

  };

  handleRadioChange = e => {

  };

  handleSubmit = () => {
    alert("You chose " + this.state.email);
  };

  render() {
    const {
      email,
      confirmEmail,
      likesCatsInput,
      isCatSelect,
      submitted
    } = this.state;

    const errors = this.validateInput();

    return (
      <div>
      

        <p>
          <InlineRadioGroup likeRadioOptions={this.likeRadioOptions} />
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));