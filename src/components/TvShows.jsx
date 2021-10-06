import MyRow from "./MyRow";
import React from "react";
import Search from "./Search"

class Body extends React.Component {

    render() {
    return (
      <>
        <div className="container-fluid overflow-hidden p-0 pt-3">
          {/*--genres*/}
          <div className="row header sticky-top">
            <h2 className="tv-shows pr-5">TV Shows</h2> 
            <div className="genreDiv mt-2">
              <div
                className="btn button-gn dropdown-toggle genrebtn text-light"
                href="#"
                role="button"
                id="dropdownGenre"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="d-inline-block background genreSpan mr-4">Genres</span>
              </div>
              <div
                className="dropdown-menu background"
                aria-labelledby="dropdownGenre"
              >
                <a className="dropdown-item background" href="#">
                  Romance
                </a>
                <a className="dropdown-item background" href="#">
                  Comedy
                </a>
                <a className="dropdown-item background" href="#">
                  Fantasy
                </a>
              </div>
            </div>
            <div className="ml-auto d-flex  pb-1">
                <div className="border">  
                <button className="btn button-gl borderbtn text-light">
                    <img src="./assets/rows.png" style={{ width: 14 }} />
                </button>
                </div>
                <div className="border">
                <button className="btn button-gl borderbtn text-light">
                    <img src="./assets/grid.png" style={{ width: 14 }} />
                </button>
                </div>
            </div>
          </div>
            <Search />

          <h4 className="pt-1 mb-3 text-left">Popular on AlexFlix  <span className="xplore">Explore All</span><img src="./assets/arrow-right.png" width={18} alt="" className="arrow-right"/></h4>
          <div id="action" className="d-flex">
            <MyRow query={"batman"} />
          </div>

          <h4 className="pt-4 mb-3 text-left">Continue Watching for Alexander <span className="xplore">Explore All</span><img src="./assets/arrow-right.png" width={18} alt="" className="arrow-right"/></h4>
          <div id="horror" className="d-flex">
            <MyRow query={"funny"} />
          </div>

          <h4 className="pt-5 mb-3 text-left">Trending Now <span className="xplore">Explore All</span><img src="./assets/arrow-right.png" width={18} alt="" className="arrow-right"/></h4>
          <div id="comedy" className="d-flex">
            <MyRow query={"trending"} />
          </div>

          <h4 className="pt-5 mb-3 text-left">Sci-Fi <span className="xplore">Explore All</span><img src="./assets/arrow-right.png" width={18} alt="" className="arrow-right"/></h4>
          <div id="comedy" className="d-flex">
            <MyRow query={"fiction"} />
          </div>

          <h4 className="pt-5 mb-3 text-left">Award-Winning Documentaries <span className="xplore">Explore All</span><img src="./assets/arrow-right.png" width={18} alt="" className="arrow-right"/></h4>
          <div id="comedy" className="d-flex">
            <MyRow query={"documentary"} />
          </div>

          <h4 className="pt-5 mb-3 text-left">New releases <span className="xplore">Explore All</span><img src="./assets/arrow-right.png" width={18} alt="" className="arrow-right"/></h4>
          <div id="comedy" className="d-flex">
            <MyRow query={"new"} />
          </div>

          <h4 className="pt-5 mb-3 text-left">TV Comedies <span className="xplore">Explore All</span><img src="./assets/arrow-right.png" width={18} alt="" className="arrow-right"/></h4>
          <div id="comedy" className="d-flex">
            <MyRow query={"comedy"} />
          </div>
        </div>    
      </>
    );
  }
}

export default Body;
