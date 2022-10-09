import React, { useState, useEffect } from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import MusicPlayer from "./MusicPlayer";
import Songs from "./Song";
const AudioList = () => {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImage] = useState(Songs[0].imgSrc);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");
    songs.forEach((element) =>
      element.addEventListener("click", () => {
        songs.forEach((element) => element.classList.remove("active"));
        element.classList.add("active");
      })
    );
  }, []);
  const chngeFavouite = (id) => {
    Songs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...Songs]);
  };

  const setMainSong = (songSrc, ingSrc) => {
    setSong(songSrc);
    setImage(ingSrc);
  };

  return (
    <div className="AudioList">
      <h2 className="title">
        The list <span>{`${Songs.length} songs`}</span>
      </h2>
      <div className="songsContainer">
        {songs &&
          songs.map((song, i) => (
            <div
              className="songs"
              key={i}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count">#0{song.id}</div>
              <div className="song">
                <div className="imgBox">
                  <img src="" alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {" "}
                    {song.songName}
                    <span className="songSpan">{song.artist}</span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      {" "}
                      <i>
                        <FaHeadphones />
                      </i>{" "}
                      95,490,102
                    </p>
                    <p className="duration">
                      {" "}
                      <i>
                        <FaRegClock />
                      </i>{" "}
                      03.04
                    </p>
                    <div
                      className="favourite"
                      onClick={() => chngeFavouite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <MusicPlayer song={song} imgSrc={img}/>
    </div>
  );
};

export default AudioList;
