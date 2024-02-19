import React from "react";
import { Link } from "react-router-dom";

function Avatar() {
  const developers = [
    {
      name: "Ryan PINA-SILASSE",
      Age: "23 ans",
      imageUrl: "https://avatars.githubusercontent.com/u/52971403?v=4",
      linkUrl: "https://github.com/N95Ryan",
      title: "Développeur front-end",
    },
    {
      name: "Yamil ISSA",
      Age: "22 ans",
      imageUrl: "https://avatars.githubusercontent.com/u/84101935?v=4",
      linkUrl: "https://github.com/yamil-issa",
      title: "Développeur back-end",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:space-x-[6rem]">
      {developers.map((developer, index) => (
        <div key={index} className="flex flex-col items-center mb-4 md:mb-0">
          <Link to={developer.linkUrl}>
            <img
              className="w-48 md:w-72 rounded-full border-4 border-white mb-4 animate-jump-in animate-once"
              src={developer.imageUrl}
              alt={developer.title}
            />
          </Link>

          <div className="text-center mb-4 animate-fade-up animate-once animate-normal">
            <p className="text-lg md:text-xl text-white font-bold">{developer.name}</p>
            <Link to={developer.linkUrl}>
              <p
                to={developer.linkUrl}
                className="text-blue-500 hover:text-white transition duration-200 ease-in-out"
              >
                {developer.title}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Avatar;