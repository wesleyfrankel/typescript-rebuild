"use client";
import { useSearchParams } from "next/navigation";
import { players } from "@/app/data/playerAPI";
import Link from "next/link";

const PlayerInfo = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const player = players.find((p) => p.number === parseInt(id as string, 10));

  return (
    <div>
      <h1>{player?.name}'s Info</h1>
      <p>Number: {player?.number}</p>
      <p>Position: {player?.position}</p>
      <img style={{ maxHeight: "300px", maxWidth: "300px" }} src="player.img" />
      <div>
        <Link href="/">Back to roster</Link>
      </div>
    </div>
  );
};

export default PlayerInfo;
