import React, { Component } from "react";
import "./App.scss";
import { string } from "prop-types";
import logo from "./Media/abLight.svg";
import { Icon } from "@material-ui/core";

class App extends Component {
  state: {
    name: string;
    title: string;
    phone: string;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      title: "",
      phone: ""
    };
  }

  render() {
    return (
      <div id="app">
        <div id="formContainer">
          <form id="form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.target.value })}
            />
          </form>
        </div>

        <div id="cardContainer">
          <div id="card">
            <div id="logoContainer">
              <img src={logo} id="logo" />
            </div>
            <div id="subtext">Website Development</div>

            <div id="name" className="text">
              {this.state.name}
            </div>
            <div id="title" className="text">
              {this.state.title}
            </div>
            <div id="website" className="text">
              <Icon className="icon">language</Icon>ab-websites.com
            </div>
            <div id="info">
              <div id="phone" className="text">
                <Icon id="phoneIcon" className="icon">
                  phone
                </Icon>
                {this.state.phone}
              </div>

              <div id="email" className="text">
                <Icon className="icon">email</Icon>austinburkewebsites@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
