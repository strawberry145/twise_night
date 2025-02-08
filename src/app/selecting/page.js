"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CitySelection.module.css";

const CitySelection = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  const handleMouseEnter = (city) => {
    setHoveredCity(city);
  };

  const handleMouseLeave = () => {
    setHoveredCity(null);
  };

  const backgroundImage = "/assets/selector_background.png";
  const titleImage = "/assets/selector_title.png";

  const cities = [
    {
      name: "SEOUL",
      image: "/assets/seoul.png",
      altImage: "/assets/seoul_faded.png",
    },
    {
      name: "BUSAN",
      image: "/assets/busan.png",
      altImage: "/assets/busan_faded.png",
    },
    {
      name: "JEONJU",
      image: "/assets/jeonju.png",
      altImage: "/assets/jeonju_faded.png",
    },
    {
      name: "JEJU",
      image: "/assets/JEJU.png",
      altImage: "/assets/JEJU_faded.png",
    },
  ];

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Image
        src={titleImage}
        alt="Select Your City"
        width={1100}
        height={300}
        className={styles.titleImage}
      />
      <div className={styles.grid}>
        {cities.map((city) => (
          <Link href="/map" key={city.name} passHref>
            <div
              className={styles.cityCard}
              onMouseEnter={() => handleMouseEnter(city.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={
                  hoveredCity && hoveredCity !== city.name
                    ? city.altImage
                    : city.image
                }
                alt={city.name}
                width={4500}
                height={250}
                className={styles.cityImage}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CitySelection;
