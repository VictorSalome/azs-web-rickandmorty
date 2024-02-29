import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { INFO_EPISODES } from "../../querys";
import { Link } from "react-router-dom";
import CardInfo from "../Card";
import { Episode } from "../../interfaces/interface";

export const ListSearch = () => {
  const { loading, data } = useQuery(INFO_EPISODES);
  const episodes: Episode[] | undefined = data?.episodes?.results;

  const [episodesList, setepisodesList] = useState<Episode[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");

  useEffect(() => {
    const filteredData = episodes?.filter((item: Episode) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setepisodesList(filteredData || []);
  }, [searchItem, episodes]);

  if (loading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="text-black relative">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
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
            <FaMagnifyingGlass className="text-white text-2xl " />
          </div>
        </div>
        <div className="flex flex-wrap justify-start mt-4 gap-12">
          {episodesList?.map((episode) => (
            <Link to={`/episode/${episode.id}`} key={episode.id}>
              <CardInfo episodes={episode} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
