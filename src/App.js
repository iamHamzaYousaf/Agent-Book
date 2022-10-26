import React, { Component, Fragment } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import TopRatedAgent from "./Components/TopRatedAgent";
import ChooseAgent from "./Components/ChooseAgent";
import MostRatedAgent from "./Components/MostRatedAgent";
import ConnectAgent from "./Components/ConnectAgent";
import ChatAgent from "./Components/ChatAgent";
import ArticleAgent from "./Components/ArticleAgent";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopRatedAgent />
        <ChooseAgent />
        <MostRatedAgent />
        <ConnectAgent />
        <ChatAgent />
        <ArticleAgent />
        <Footer />
      </div>
    );
  }
}

export default App;
