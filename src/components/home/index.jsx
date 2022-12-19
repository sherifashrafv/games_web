import React from "react";
import styles from "./index.module.scss";
import nutro from "../../Assets/images/nutro.jpg";
import pic1 from "../../Assets/images/game2.jpg";
import pic2 from "../../Assets/images/game3.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className={`${styles.jumbotron} text-center`}>
        <div className="container mb-n2">
          <h1 className={`${styles.jumbotron_heading}`}>
            Find &amp; track the best
            <span className={`${styles.ftg_blue}`}> free-to-play</span> games!
          </h1>
          <p className="lead text-muted">
            Track what you've played and search for what to play next! Plus get
            free premium loot!
          </p>
          <p>
            <Link
              role="button"
              className="btn btn-outline-secondary btn-md ml-0"
              to="/all"
            >
              Browse Games
            </Link>
          </p>
        </div>
      </section>
      <section>
        <div className="container my-5">
          <h3 className="text-white" style={{ color: "#aaaaaa" }}>
            <i class="fas fa-robot mr-2 "></i>Personalized Recommendations
          </h3>
          <div className="row">
            <div className="col-md-4">
              <div className="game mb-4 grow shadow">
                <div className="game-img mt-2">
                  <img className="w-100 h-100 border-0 " src={nutro} />
                </div>
                <div
                  class={`${styles.game_body} d-flex justify-content-between align-items-center p-3`}
                >
                  <h4 class="card-title text-truncate">Genshin Impact</h4>
                  <span
                    class={`badge ${styles.badge_ftg} py-2 px-2 float-right`}
                  >
                    FREE
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="game mb-4 grow shadow">
                <div className="game-img mt-2">
                  <img className="w-100 h-100 border-0 " src={pic1} />
                </div>
                <div
                  class={`${styles.game_body} d-flex justify-content-between align-items-center p-3`}
                >
                  <h4 class="card-title text-truncate">Genshin Impact</h4>
                  <span
                    class={`badge ${styles.badge_ftg} py-2 px-2 float-right`}
                  >
                    FREE
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="game mb-4 grow shadow">
                <div className="game-img mt-2">
                  <img className="w-100 h-100 border-0 " src={pic2} />
                </div>
                <div
                  class={`${styles.game_body} d-flex justify-content-between align-items-center p-3`}
                >
                  <h4 class="card-title text-truncate">Genshin Impact</h4>
                  <span
                    class={`badge ${styles.badge_ftg} py-2 px-2 float-right`}
                  >
                    FREE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
