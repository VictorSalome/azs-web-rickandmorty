import React from "react";

import { CardCharacter } from "../CardCharacter";

export const CharacterCarousel: React.FC = () => {
  return (
    <div className="text-black relative w-4/5 mx-auto ">
      <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8">
        <div>
          <h2 className="w-full mb-5 mt-6 text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Personagens Principais
          </h2>
          <CardCharacter />
        </div>
      </div>
    </div>
  );
};
