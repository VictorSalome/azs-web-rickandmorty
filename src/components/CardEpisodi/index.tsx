import React from "react";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Tooltip } from "@mui/material";
import LogoCard from "../../../public/assets/portalimage.png";
import { INFO_EPISODE } from "../../querys/index";
import { Episode } from "../../interfaces/interface";

export const CardEpisodi: React.FC<{ episodes: Episode }> = ({ episodes }) => {
  const { id, name, episode, air_date } = episodes;

  const { data } = useQuery(INFO_EPISODE, { variables: { id } });

  return (
    <Tooltip title={name} arrow>
      <Card
        sx={{
          maxWidth: { xs: 200, md: 200 },
          overflow: "hidden",
          marginLeft: { xs: "-20px", md: "0px" },
        }}
      >
        <CardActionArea>
          <CardMedia component="img" image={LogoCard} alt="logoRick" />
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontSize: "1rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontWeight: "bold",
                fontFamily: "'Patrick Hand', cursive",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              color="text.secondary"
            >
              {episode}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              color="text.secondary"
            >
              {format(new Date(air_date), "dd/MM/yyyy")}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.9rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              color="text.secondary"
            >
              Personagens: {data?.episode?.characters.length}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Tooltip>
  );
};
