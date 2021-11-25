import React, { Component } from "react";
import { navigate } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";

class MailchimpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      message: "Subscribe to our mailing list!",
      result: "",
      errMessage: "",
      name: "",
      action: "signed up to our mailing list",
    };
  }

  changeEmailHander = (e) => {
    this.setState({ email: e.target.value });
  };
  changeNameHandler = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(this.state.email, {
      FNAME: this.state.name,
    })
      .then((data) => {
        this.setState({
          result: data.result,
        });
        const successInfo = {
          action: this.state.action,
          name: this.state.name,
        };
        this.state.result === "error"
          ? console.log(data.result)
          : navigate("/success/mailchimp-success", {
              state: { successInfo },
            });
      })
      .catch(() => {});
    this.setState({ email: "" });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{
            width: `100%`,
            color: `white`,
            padding: `1rem`,
          }}
        >
          <div className="row">
            <div className="input-field col s12">
              <h4>Subscribe</h4>

              {this.state.result === "error" ? (
                <p>Please enter a valid email address</p>
              ) : null}
              <input
                type="text"
                value={this.state.name}
                onChange={this.changeNameHandler}
                name="name"
                id="name"
                className="validate"
                placeholder="Enter Name Here"
                style={{
                  background: `white`,
                  padding: `0 1rem`,
                  width: `92%`,
                }}
              />
              <input
                type="email"
                value={this.state.email}
                onChange={this.changeEmailHander}
                name="email"
                id="email"
                className="validate"
                placeholder="Enter Email Here"
                style={{
                  background: `white`,
                  padding: `0 1rem`,
                  width: `92%`,
                }}
              />
              <button
                type="submit"
                className="btn-flat btn-medium white z-index-0"
                style={{
                  fontSize: `1rem`,
                  float: `right`,
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MailchimpForm;
