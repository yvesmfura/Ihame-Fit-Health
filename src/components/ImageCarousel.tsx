import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Component_Styles/images.css";

// Dynamically import all images from the ImageCarousel directory
const images = import.meta.glob('../assets/ImageCarousel/*.{jpeg,jpg,png,gif}');

const shuffleImages = (arr: string[]): string[] => {
  return arr.sort(() => Math.random() - 0.5);
};

const ImageSlider: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = await Promise.all(
        Object.values(images).map(async (importFn) => {
          const module = await importFn();
          return (module as { default: string }).default;
        })
      );
      const shuffledImages = shuffleImages(imageModules);
      setImageUrls(shuffledImages);
    };

    loadImages();
  }, []);

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="image-slider-wrapper">
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index} className="slick-slide">
            <img src={url} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
