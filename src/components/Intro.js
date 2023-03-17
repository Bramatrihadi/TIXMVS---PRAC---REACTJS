import React from "react";
import romanceBg from "../assets/images/bg/romance.jpg";
import everythingBg from "../assets/images/bg/everything.jpg";
import rpoBg from "../assets/images/bg/rpo.jpg";
import Carousel from "react-bootstrap/Carousel";

const Intro = () => {
  return (
    <div className="carouselIntro">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={romanceBg}
            alt="First slide"
          />
          <Carousel.Caption className="title">
            <h1>WATCH MOVIES</h1>
            <h2>AND CHILL</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={everythingBg}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="titleCarousel">EVERYTHING EVERYWHERE ALL AT ONCE</h3>
            <p>
              The futuristic film from the studio A24 won seven awards at the
              2023 OSCARS, including for best picture, directing and in three of
              the four acting categories.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImage"
            src={rpoBg}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="titleCarousel">READY PLAYER ONE</h3>
            <p>
              Ready Player One is a 2011 science fiction novel, and the debut
              novel of American author Ernest Cline.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Intro;
