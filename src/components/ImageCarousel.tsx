import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Component_Styles/images.css";

const images = import.meta.glob('../assets/ImageCarousel/*.{jpeg,jpg,png,gif}');

const shuffleImages = (arr: string[]): string[] => {
  return arr.sort(() => Math.random() - 0.5);
};

const ImageCarousel: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  useEffect(() => {
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
    slidesToShow: 5, // Default number of slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1440, // Large screens like desktops
        settings: {
          slidesToShow: 7,
        },
      },

      {
        breakpoint: 1280, // Laptops and large tablets
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // Small laptops and large tablets
        settings: {
          slidesToShow: 3.1
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 600, // Large smartphones
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small smartphones
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 375, // Very small devices (e.g., iPhone SE)
        settings: {
          slidesToShow: 1.3,
        },
      },
    ],
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
