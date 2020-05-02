import React, { Component } from "react";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import Header from "./Components/Header";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Portfolio from "./Components/Portfolio";
import Modal from "./Components/Modal/Modal";
import data from "./store/settings";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import "./App.css";


class App extends Component {
  state = {
    sideDrawerOpen: false,
    modalOpen: false,
    projectId: 0,
    done: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ done: true });
    }, 1000);
  }

  // Modal 

  modalToggleClick = projectId => {
    this.setState(prevState => {
      document.body.classList.add("no-scroll");
      return {
        modalOpen: !prevState.modalToggleClick,
        projectId
      };
    });
  };

  modalCloseClick = () => {
    document.body.classList.remove("no-scroll");
    this.setState({ modalOpen: false });
  };

  // Modal

  // Nav sidebar

  drawerToggleClickHandler = () => {
    document.body.classList.add("no-scroll");
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    document.body.classList.remove("no-scroll");
    this.setState({ sideDrawerOpen: false });
  };

  // Nav sidebar

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    let modal;
    if (this.state.modalOpen) {
      backdrop = <Backdrop click={this.modalCloseClick} />; // click=close modal
      modal = (
        <Modal
          project={data.portfolio[this.state.projectId]}
          close={this.modalCloseClick}
        />
      );
    }
    let stylePreloader = {
      display: "flex",
      height: "100vh",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgb(26, 25, 25)"
    };
    return (
      <>
        {!this.state.done ? (
          <Loader
            style={stylePreloader}
            type="Triangle"
            color="#f1636c"
            height={200}
            width={200}
            timeout={3000}
          />
        ) : (
          <>
            {backdrop}

            {modal}

            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />

            <SideDrawer
              show={this.state.sideDrawerOpen}
              click={this.backdropClickHandler}
            />

            <Header/>

            <Experiences />

            <About />

            <Portfolio click={this.modalToggleClick} />

            <footer className="footer">
              Teri Fash {new Date().getFullYear()}
            </footer>
          </>
        )}
      </>
    );
  }
}

export default App;
