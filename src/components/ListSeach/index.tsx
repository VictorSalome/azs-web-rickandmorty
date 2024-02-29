import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { INFO_EPISODES } from "../../querys";
import { Link } from "react-router-dom";
import CardInfo from "../CardEpisodi";
import { Episode } from "../../interfaces/interface";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

// Instalando os componentes necessários do Swiper
SwiperCore.use([Navigation]);

export const ListSearch = () => {
  const { loading, data } = useQuery(INFO_EPISODES);
  const episodes: Episode[] | undefined = data?.episodes?.results;

  const [episodesList, setEpisodesList] = useState<Episode[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");

  useEffect(() => {
    const filteredData = episodes?.filter((item: Episode) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setEpisodesList(filteredData || []);
  }, [searchItem, episodes]);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="text-black relative w-4/5 mx-auto">
      <div className="max-w-8xl mx-auto px-3 sm:px-7 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Episódios
          </h1>
          <div className="ml-auto flex items-center">
            <input
              type="text"
              className="py-1 mr-2 rounded-md border border-gray-300"
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <FaMagnifyingGlass className="text-white text-2xl" />
          </div>
        </div>
        <Swiper
          spaceBetween={10}
          navigation
          className="mySwiper pt-10 "
          breakpoints={{
            // Configurações para dispositivos móveis
            640: {
              slidesPerView: 1,
            },
            // Configurações para desktop/web
            1024: {
              slidesPerView: 7,
            },
          }}
        >
          <div className="flex justify-center">
            {" "}
            {/* Centralizando os cards */}
            {episodesList?.map((episode) => (
              <SwiperSlide key={episode.id}>
                <Link to={`/episode/${episode.id}`}>
                  <div className="sm:w-full md:w-1/3 lg:w-full ml-16 md:ml-1">
                    <CardInfo episodes={episode} />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};
