import React from "react";

import htmlToImage from "html-to-image";
import download from "downloadjs";
import axios from "axios";

import ImgDisplay from "../ImgDisplay/ImgDisplay";

class ImgGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      image:null,
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
      image : files[0],
    });
  };

  //Add random image
  handleRandom = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allTextImgs.length);
    const randTextImg = this.state.allTextImgs[randNum].url;
    this.setState({ randomImg: randTextImg });
  };

  //Download PNG image
  handlePng = () => {
    htmlToImage
      .toPng(document.getElementById("my-img"))
      .then(function (dataUrl) {
        download(dataUrl, "text-img.png");
      });
  };
 //Download PNG image
  handleRemoveBg= () => {
    console.log(this.state)
     const fd = new FormData();
    fd.append("image", file, file.name);
    axios
      .post(
        "https://inpixio-remove-bg-zceht2uy2q-ey.a.run.app/image/remove_bg",
        fd
      )
      .then((res) => /*setLink("data:image/png;base64," + res.data.image)*/ this.setState({
      randomImg: URL.createObjectURL(res.data.image),
      image : files[0],
    });)
      .then(() => console.log(link));
  };
  // Download JPEG image
  handleJpeg = () => {
    htmlToImage
      .toJpeg(document.getElementById("my-img"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "text-img.jpeg";
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
        handleRemoveBg={this.handleRemoveBg}
        handleJpeg={this.handleJpeg}
        handleUpload={this.handleUpload}
        data={this.state}
      />
    );
  }
}

export default ImgGenerator;
