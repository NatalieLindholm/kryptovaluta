import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export default async function Home() {
  return (
    <div className="body">
      <div className="sidebar">
        <div className="titel">
          <h1>Crypto</h1>
          <h1>Currency</h1>
          <h1>App</h1>
        </div>

        <div className="buttons">
          <Link href={"/trade"}>
            <button>Trade</button>
          </Link>
          {/* <Link href={"/cryptos"}>
            <button>Cryptos</button>
          </Link> */}
        </div>
      </div>

      <div>{/* Your bought crypto here */}</div>
      <div className="portfolio">
        <h2>BTC</h2>
        <p>Time Bought: 10:23</p>
        <p>Units: 1</p>
        <p>Price Bought: 232323</p>
        <h3>Current Price: 4545</h3>
        <FaArrowUp />
      </div>
    </div>
  );
}
