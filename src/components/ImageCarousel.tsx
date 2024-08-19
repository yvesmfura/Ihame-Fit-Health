import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Component_Styles/images.css";

// Dynamically import all images from the assets directory
const images = import.meta.glob('../assets/ImageCarousel/*.{jpeg,jpg,png,gif}');

const shuffleImages = (arr: string[]): string[] => {
  return arr.sort(() => Math.random() - 0.5);
};

const ImageCarousel: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    // Convert the imported images into an array of URLs
    const loadImages = async () => {
      const imageUrls = await Promise.all(
        Object.values(images).map(async (image) => {
          const mod = await image();
          return (mod as { default: string }).default;
        })
      );
      setLoadedImages(shuffleImages(imageUrls).slice(0, 20));
    };
    loadImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {loadedImages.map((image: string, index: number) => (
        <div key={index} className="carousel-slide">
          <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
