import React from "react";
import { useQuery } from "@apollo/client";
import { INFO_CHARACTER } from "../../querys";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);

interface Character {
  name: string;
  species: string;
  gender: string;
  image: string;
  id: string;
}

export const CardCharacter: React.FC = () => {
  const { loading, error, data } = useQuery(INFO_CHARACTER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {data?.characters?.results.map((character: Character) => (
        <SwiperSlide key={character.id}>
          <div
            className="character bg-gray-800 rounded-lg p-4 text-white"
            key={character.id}
          >
            <img
              src={character.image}
              alt="person"
              className="mx-auto w-32 h-32 rounded-full mb-4"
            />
            <p className="text-center">
              Nome: <span className="font-semibold">{character.name}</span>
            </p>
            <p className="text-center">
              Espécie:{" "}
              <span className="font-semibold">{character.species}</span>
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
