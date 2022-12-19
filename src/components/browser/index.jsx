import axios from "axios";
import React, { useEffect, useState } from "react";
import { slice } from "lodash";
import X from "../../Assets/images/x_render.jpg";
import C from "../../Assets/images/circle_render.jpg";
import S from "../../Assets/images/square_render.jpg";
import T from "../../Assets/images/triangle_render.jpg";
import Styles from "./index.module.scss";
import { Link } from "react-router-dom";
export default function Browser() {
  const [games, setGames] = useState([]);
  const [index, setIndex] = useState(20);
  const initialGames = slice(games, 0, index);
  const [loading, SetLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  useEffect(() => {
    getAll();
  }, []);
  const loadMore = () => {
    setIndex(index + 5);
    console.log(index);
    if (index >= games.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    params: { platform: "browser" },
    headers: {
      "X-RapidAPI-Key": "0293d7b7b3msh738d797c34a2381p186167jsneb50b6cf8513",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let getAll = async () => {
    await axios
      .request(options)
      .then(function (response) {
        setGames(response.data);
        SetLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <section>
      {loading ? (
        <div className={`${Styles.loading_animation}`}>
          <img className={Styles.one} src={X} />
          <img className={Styles.two} src={C} />
          <img className={Styles.three} src={S} />
          <img className={Styles.four} src={T} />
        </div>
      ) : (
        <div className="container my-5">
          <div className="row mt-5 g-4 justify-content-center">
            {initialGames.map((game) => (
              <Link
                key={game.id}
                className="col-md-3 text-decoration-none"
                to={`/details/${game.id}`}
              >
                <div className="game mb-4 grow shadow">
                  <div className="game-img">
                    <img className="w-100" src={game.thumbnail} />
                  </div>
                  <div className={`${Styles.game_body} p-3`}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className={`${Styles.card_title} text-truncate`}>
                        {game.title}
                      </h4>
                      <span
                        className={`badge ${Styles.badge_ftg} py-2 px-2 float-right`}
                      >
                        FREE
                      </span>
                    </div>
                    <p className="text-muted">
                      {game.short_description.slice(0, 20) + "..."}
                    </p>
                    <div className="d-flex justify-content-between">
                      <i className="fas fa-plus-square"></i>
                      <div className="d-flex mb-n2 justify-content-between align-items-center">
                        <span
                          className={`bg bg-secondary text-dark ${Styles.badge_genre} me-2`}
                        >
                          {game.genre}
                        </span>
                        <i
                          title="Available on Windows"
                          className="fab fa-windows text-muted stretched-link"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="d-flex justify-content-center mt-3 mb-5">
              {isCompleted ? (
                <button
                  onClick={loadMore}
                  type="button"
                  className="btn btn-danger disabled"
                >
                  That's It
                </button>
              ) : (
                <button
                  onClick={loadMore}
                  type="button"
                  className="btn btn-outline-secondary text-white py-2 pt-1 more-btn"
                >
                  More Games >
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
