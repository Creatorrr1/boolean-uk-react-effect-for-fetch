import { useEffect, useState } from "react";
import MaterialArts from "./materialArt";

function ArtList() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((art) => {
        setArt(art.data);
      });
  }, []);

  console.log(art);
  return (
    <ul className="art-list">
      {art.map((art, index) => (
        <li key={index}>
          <div className="frame">
            {art.image_id && (
              <img
                src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                alt=""
              />
            )}
            <h3>{art.title}</h3>
            <p>Artist: {art.artist_titles}</p>
            <h4>Artistic Subjects:</h4>
            <MaterialArts material={art.material_titles} />
            {/* <ul>
                {art.material_titles.map((materialTitles, index) => (
                  <li key={index}>
                    <p>{materialTitles}</p>
                  </li>
                ))}
              </ul> */}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ArtList;
