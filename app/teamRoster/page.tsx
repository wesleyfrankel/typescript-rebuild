"use client";
import { useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { players, Player } from "@/app/data/playerAPI";

const Roster = () => {
  const [allPlayers, _] = useState<Player[]>(players);

  return (
    <main>
      <div>
        <h1 style={{ margin: "50px", textAlign: "center" }}>
          Welcome to the Roster Page!
        </h1>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
          Here is the starting 11:
        </h2>
        <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
          Click on a name for more info
        </h3>
        <ul>
          {allPlayers.map((player) => (
            <li key={player.number} className={styles.rosterList}>
              <Link href={`/teamRoster/${player.number}`}>
                #{player.number} {player.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.homePageLink}>
        <Link href="/">Back to home page</Link>
      </div>
    </main>
  );
};

export default Roster;
