import React from "react";

import htmlToImage from "html-to-image";
import download from "downloadjs";

import MemeDisplay from "./MemeDisplay";

class ImgGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      randomImg: "https://assets.imgix.net/unsplash/motorbike.jpg",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //Add local image
  handleUpload = (event) => {
    event.preventDefault();
    const { files } = event.target;
    const uploadFile = URL.createObjectURL(files[0]);
    this.setState({
      randomImg: uploadFile,
    });
  };

  //Add random image
  handleRandom = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  };

  //Download PNG image
  handlePng = () => {
    htmlToImage
      .toPng(document.getElementById("my-meme"))
      .then(function (dataUrl) {
        download(dataUrl, "my-meme.png");
      });
  };

  // Download JPEG image
  handleJpeg = () => {
    htmlToImage
      .toJpeg(document.getElementById("my-meme"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-meme.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  render() {
    return (
      <MemeDisplay
        handleChange={this.handleChange}
        handleRandom={this.handleRandom}
        handlePng={this.handlePng}
        handleJpeg={this.handleJpeg}
        handleUpload={this.handleUpload}
        data={this.state}
      />
    );
  }
}

export default ImgGenerator;
