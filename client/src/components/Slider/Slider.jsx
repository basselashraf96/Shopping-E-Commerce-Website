import { useState } from "react";

import "./Slider.css";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import styled from "styled-components";

import { sliderData } from "../../data";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  transition: all 1.2s ease;
`;
const SliderCard = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #${(props) => props.bg};
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };

  return (
    <div id="slider-container">
      <div className="arrowleft" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </div>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderData.map((item) => {
          return (
            <SliderCard key={item.id} className="slider" bg={item.bg}>
              <div className="slider-img">
                <img src={item.img} />
              </div>
              <div className="slider-desc">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <Link to="/products">
                  <button>
                    Shop Now <ArrowRightIcon />
                  </button>
                </Link>
              </div>
            </SliderCard>
          );
        })}
      </Wrapper>

      <div className="arrowright" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default Slider;
