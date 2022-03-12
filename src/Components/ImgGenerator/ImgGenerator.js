import React from "react";

import htmlToImage from "html-to-image";
import download from "downloadjs";

import ImgDisplay from "../ImgDisplay/ImgDisplay";

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
    const randNum = Math.floor(Math.random() * this.state.allImgImgs.length);
    const randImgImg = this.state.allImgImgs[randNum].url;
    this.setState({ randomImg: randImgImg });
  };

  //Download PNG image
  handlePng = () => {
    htmlToImage
      .toPng(document.getElementById("my-Img"))
      .then(function (dataUrl) {
        download(dataUrl, "my-Img.png");
      });
  };

  // Download JPEG image
  handleJpeg = () => {
    htmlToImage
      .toJpeg(document.getElementById("my-Img"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-Img.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  render() {
    return (
      <ImgDisplay
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
