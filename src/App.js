import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

// npm install react-transition-group --save
// npm install --save react@^16.6.0 react-dom@^16.6.0
class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

        <Transition
          in={this.state.showBlock}
          timeout={3000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("On enter")}
          onEntering={() => console.log("On entering")}
          onEntered={() => console.log("On entered")}
          onExit={() => console.log("On exit")}
          onExiting={() => console.log("On exiting")}
          onExited={() => console.log("On exited")}
        >
          {(state) => <h3>{state}</h3>}
        </Transition>

        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
