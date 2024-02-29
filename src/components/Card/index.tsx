import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LogoCard from "../../assets/Portal-image.png";
import { INFO_EPISODE } from "../../querys/index";
import { Episode } from "../../interfaces/interface";

const CardInfo: React.FC<{ episodes: Episode }> = ({ episodes }) => {
  const { id, name, episode, air_date } = episodes;

  const { data } = useQuery(INFO_EPISODE, { variables: { id } });

  return (
    <Card
      sx={{
        maxWidth: { xs: 150, md: 200 },
        overflow: "hidden",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" image={LogoCard} alt="logoRick" />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            sx={{
              fontSize: "0.9rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "0.8rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {episode}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {format(new Date(air_date), "dd/MM/yyyy")}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.8rem" }}
          >
            Personagens: {data?.episode?.characters.length}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardInfo;
