import { useLocation } from "react-router";
import { useQuery } from "@apollo/client";
import { INFO_EPISODE } from "../../querys/index";
import { Navbar } from "../../components/Navbar";
import { DetailsCard } from "../../components/DetailsCard/DetailsCard";

export const Details = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { loading, data } = useQuery(INFO_EPISODE, { variables: { id } });

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <DetailsCard details={data} />
    </>
  );
};
