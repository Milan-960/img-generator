import React from "react";

function ImgDisplay(props) {
  return (
    // main div
    <div className="jumbotron bg-info">
      {/* main container */}
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="row border overflow-hidden mb-4">
              <div className="col-lg-8 p-2 d-lg-block">
                {/* This id is defined for downloading images */}
                <div id="my-img" className="DisplayImg">
                  <img
                    src={props.data.randomImg}
                    className="img-fluid img-thumbnail"
                    alt=""
                    width="100%"
                  />
                  <h2 className="topText">{props.data.topText}</h2>
                </div>
              </div>

              <div className="col-lg-4 p-2 d-flex flex-column position-static">
                {/* input form for adding text into img */}
                <form>
                  <div className="shadow-lg p-3 mb-3 bg-white rounded">
                    <p className="text-muted">Add image</p>
                    <div className="input-group">
                      <div className="custom-file">
                        <input
                          onChange={props.handleUpload}
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile04"
                          aria-describedby="inputGroupFileAddon04"
                          accept="image/x-png,image/gif,image/jpeg"
                        />
                        <label
                          className="custom-file-label border-info"
                          for="inputGroupFile04"
                        >
                          Choose local image
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="shadow-lg p-3 mb-3 bg-white rounded">
                    <p className="text-muted">Remove background</p>
                    <input
                      className="form-control border-info mb-2"
                      type="text"
                      name="topText"
                      placeholder="Top phrase"
                      value={props.data.topText}
                      onChange={props.handleChange}
                    />
                    
                  </div>

                  <div className="shadow-lg p-3 mb-3 bg-white rounded text-center">
                    <div
                      className="btn-group btn-group-md "
                      role="group"
                      aria-label="Download type"
                    >
                      <button
                        type="button"
                        s
                        className="btn btn-outline-info"
                        onClick={props.handlePng}
                      >
                        Download PNG
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-info"
                        onClick={props.handleJpeg}
                      >
                        Download JPEG
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgDisplay;
