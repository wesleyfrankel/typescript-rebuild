import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <h1 style={{ textAlign: "center", marginTop: "100px" }}>
            Welcome to the Barcelona Website!
          </h1>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "29px",
            marginTop: "50px",
            textDecoration: "underline",
          }}
        >
          <Link href="./teamRoster">Roster</Link>
        </div>
        <div>
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "900px",
            }}
            src="https://preview.redd.it/ayc894mkm4c91.jpg?width=640&crop=smart&auto=webp&s=4e171ca525c78c2ee9016e492f596cc6dbddfa24"
          />
        </div>
      </div>
    </main>
  );
}
