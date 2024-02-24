"use client";
import { useParams, useSearchParams } from "next/navigation";
import { players } from "@/app/data/playerAPI";
import Link from "next/link";
import styles from "/app/page.module.css";

const PlayerInfo = () => {
  const { id } = useParams();

  const player = players.find(
    (player) => player.number === parseInt(id as string)
  );

  return (
    <div className="playerInfo">
      {player ? (
        <>
          <h1
            style={{
              textAlign: "center",
              marginTop: "100px",
              fontSize: "100px",
            }}
          >
            {player.name}
          </h1>
          <h2 style={{ textAlign: "center", fontSize: "70px" }}>
            Number: {player.number}
          </h2>
          <h3 style={{ textAlign: "center", fontSize: "50px" }}>
            Position: {player.position}
          </h3>
          <img
            style={{
              maxHeight: "500px",
              maxWidth: "500px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "50px",
            }}
            src={player.img}
            alt={`${player.name}'s Image`}
          />
          <div className={styles.homePageLink}>
            <Link href="/teamRoster">Back to roster</Link>
          </div>
        </>
      ) : (
        <div>
          <p>Player not found</p>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default PlayerInfo;
