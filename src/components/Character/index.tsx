import React from "react";
import { useQuery } from "@apollo/client";
import { INFO_CHARACTER } from "../../querys";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
} from "@mui/material";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

// Definindo a interface Character
interface Character {
  name: string;
  species: string;
  gender: string;
  image: string;
  id: string;
}

// Inicializando os módulos do Swiper
SwiperCore.use([Navigation]);

export const CharacterCarousel: React.FC = () => {
  const { loading, error, data } = useQuery(INFO_CHARACTER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="text-black relative w-4/5 mx-auto ">
      <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8">
        <div>
          <h2 className="w-full mb-5 mt-6 text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Personagens Principais
          </h2>
          <Grid container justifyContent="center">
            {/* Centraliza o Grid */}
            <Swiper
              spaceBetween={10}
              navigation
              className="mySwiper pt-10 pl-14"
              breakpoints={{
                // Configurações para dispositivos móveis
                640: {
                  slidesPerView: 2,
                },
                // Configurações para desktop/web
                1024: {
                  slidesPerView: 4, // Alterei para 4 para manter a consistência do layout
                },
              }}
            >
              {data?.characters?.results.map((character: Character) => (
                <SwiperSlide key={character.id}>
                  <Grid item xs={12} sm={7} md={4} lg={9}>
                    <div className="sm:w-full md:w-2/3 lg:w-full mr-14">
                      <Card>
                        <CardHeader
                          avatar={
                            <Avatar
                              src={character.image}
                              alt={character.name}
                              sx={{
                                width: { xs: 70, sm: 100 }, // Define 70 para telas menores (mobile) e 100 para telas maiores (web)
                                height: { xs: 70, sm: 100 }, // Define 70 para telas menores (mobile) e 100 para telas maiores (web)
                              }}
                            />
                          }
                          title={character.name}
                        />
                        <CardContent>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            component="p"
                            sx={{ fontSize: 16 }} // Ajustando o tamanho da fonte
                            align="center"
                          >
                            Species: {character.species}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            component="p"
                            sx={{ fontSize: 16 }} // Ajustando o tamanho da fonte
                            align="center"
                          >
                            Gender: {character.gender}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  </Grid>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </div>
      </div>
    </div>
  );
};
