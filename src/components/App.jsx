import React from "react";
// import Ring from "./ring";
import HeroNote from "./hero_note";
import Navbar from "./navbar";
import CornerOrnamental from "./corner_ornamental";
import FlutteringFlowers from "./fluttering_flowers";
import Avatar from "./rounded_picture";
import Countdown from "./countdown";


function App() {

  return (
    <div>
      <CornerOrnamental />

      <Navbar />

      <div className="hero">
        <img 
          src={process.env.PUBLIC_URL+"/Images/6.JPG"}
          alt="hero-img"
        />
        <div className="hero-header">
          <h3>We're getting married!</h3>
        </div>
      </div>

      <HeroNote />

      <div className="avatar_board">
        <div className="line1">
          <Avatar 
            img = {process.env.PUBLIC_URL+"/Images/7.JPG"}
          />
          <div className="line_text">
            <h2>Ikechukwu Udochukwu Adindu</h2>
            <h6 className="couple">groom</h6>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
          </div>
        </div>
        <FlutteringFlowers
          top="" 
          side="48%"
        />
        <div className="line1">
          <div className="line_text">
            <h2>Chisomeje Roseline Nwatu</h2>
            <h6 className="couple">bride</h6>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
          </div>
          <Avatar 
            img = {process.env.PUBLIC_URL+"/Images/9.JPG"}
          />
        </div>
      </div>
      
      <div className="article">
        <img src={process.env.PUBLIC_URL+"/vectors/background.png"} alt="article-img" />
        <div className="article-note">
          <Countdown />
        </div>
      </div>

      <div className="event_header">
        <h2>EVENT DETAILS</h2>
        <h6>When & Where</h6>
      </div>

      <div className="event_section">
        <div className="column1">
            <img src={process.env.PUBLIC_URL+"/vectors/ceremony.svg"} alt="ceremony-img" />
            <h3>CEREMONY</h3>
            <h4>September 24, 2022</h4>
            <h4><b>11am</b></h4>
            <br />
            <h4>ASSEMBLIES OF GOD CHURCH, Pinnock Estate, By Jakande Roundabout, Off Lekki-Epe Expressway, Lagos.</h4>
        </div>
        <div className="map">
        <iframe
          title="google-map" 
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15858.367351378822!2d3.510442328117321!3d6.446418725378918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x103bf797783c75a3%3A0xde47183fb38044b1!2sAssemblies%20of%20God%20Church%2C%20Pinnock%20Beach%20Estate%2C%20FG47%2B549%2C%20Lavender%20Rd%2C%20Lekki%20Penninsula%20II%20106104%2C%20Lagos!3m2!1d6.455400999999999!2d3.5128475!4m5!1s0x103bf7ef3ef62d1d%3A0x2dec484ca593e1d5!2sNovatel%20Hotel%2C%20Auto%20drive%2C%20Dr.%20Udo%20Wogu%20Drive%2C%20Lekki!3m2!1d6.4400628!2d3.526094!5e0!3m2!1sen!2sng!4v1660764339602!5m2!1sen!2sng" 
          width="80%" 
          height="450" 
          style={{border:"0"}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
        <div className="column1">
            <img src={process.env.PUBLIC_URL+"/vectors/reception.svg"} alt="recepption-img" />
            <h3>RECEPTION</h3>
            <h4>September 24, 2022</h4>
            <h4><b>Follows Immediately</b></h4>
            <br />
            <h4>Novatel Hotel, Plateau Hall (6th Floor), Cherry View Estate, By Chevron Roundabout, Off Lekki-Epe Expressway, Lagos.</h4>
        </div>

      </div>

      <div className="footer">
        <img src={process.env.PUBLIC_URL+"vectors/floral_footer.svg"} alt="floral_footer" />
      </div>

    </div>
  );
}

export default App;
