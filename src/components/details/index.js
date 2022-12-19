import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";

export default function Details() {
  const [game, setGameDetails] = useState({});
  const params = useParams();

  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
    params: { id: params.id },
    headers: {
      "X-RapidAPI-Key": "0293d7b7b3msh738d797c34a2381p186167jsneb50b6cf8513",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let getItemsDetails = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setGameDetails(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log(params);
  };
  useEffect(() => {
    getItemsDetails();
  }, []);
  return (
    <div className="container my-5">
      <div className="row text-white ">
        <div className="details_game">
          <div
            style={{ backgroundImage: `url(${game.thumbnail})` }}
            className={`${styles.game_background}`}
          >
            <div className={`${styles.gameprofile_gradient}`}></div>
          </div>
        </div>
        <div className="col-4">
          <div className="sidebar control-box">
            <div
              style={{ background: "transparent" }}
              className=" text-white rounded"
            >
              <img
                className="img2  card-img-top progressive replace"
                src={game.thumbnail}
              />
            </div>
            <div class="d-flex align-items-center gap-2 mt-3">
              <span class={`"btn ${styles.btn_dark2} mb-3"`}>FREE</span>
              <a
                type="button"
                name="playnow"
                class={`btn w-100 ${styles.btn_ftg_blue} btn-block`}
                href={`${game.game_url}`}
                rel="nofollow"
                target="_blank"
              >
                <strong>PLAY NOW </strong>
                <i class="fas fa-sign-out-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div style={{ color: "#aaaaaa" }} className="col-6">
          <h3>{game.title}</h3>
          <p>
            <span className="me-2">Description:</span>
            {game.description}...
          </p>
          <p className="m-0">platform : {game.platform}</p>
          <p>publisher : {game.publisher}</p>
        </div>
      </div>
    </div>
  );
}
