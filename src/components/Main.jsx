import { Component } from "react";

class Main extends Component {
  render() {
    return (
      <main className="mx5">
        <h3 className="text-white mt-3 mb-3 mt-5">Trending Now</h3>
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6">
            <div className="col gx-1">
              <img src="assets/media/media0.webp" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media1.jpg" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media2.webp" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media3.webp" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media4.jpg" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media5.webp" alt="" className="w-100" />
            </div>
          </div>
        </div>
        <h3 className="text-white mt-3 mb-3">Watch It Again</h3>
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6">
            <div className="col gx-1">
              <img src="assets/media/media6.jpg" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media7.webp" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media8.webp" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media9.jpg" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media10.jpg" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media11.jpg" alt="" className="w-100" />
            </div>
          </div>
        </div>
        <h3 className="text-white mt-3 mb-3">New Releases</h3>
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6">
            <div className="col gx-1">
              <img src="assets/media/media12.jpg" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media13.jpg" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media14.webp" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media15.jpg" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media16.webp" alt="" className="w-100" />
            </div>
            <div className="col gx-1">
              <img src="assets/media/media17.jpg" alt="" className="w-100" />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
