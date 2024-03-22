import Link from "next/link";
import BuyButton from "@/components/BuyButton";

export default async function home() {
  const res = await fetch("https://api.coincap.io/v2/assets");

  const data = await res.json();

  type crypto = {
    id: string;
    symbol: string;
    name: string;
    priceUsd: string;
    changePercent24hr: string;
  };
  return (
    <div className="body">
      <div className="sidebar">
        <div className="titel">
          <h1>Crypto</h1>
          <h1>Currency</h1>
          <h1>App</h1>
        </div>

        <Link href={"/trade"}>
          <button>Trade</button>
        </Link>
      </div>

      <div>{/* Your bought crypto here */}</div>
      <div className="displayBox">
        {data.data.map((crypto: crypto) => (
          <div className="box" key={crypto.id}>
            <div className="text">
              <h2 className="font-bold">{crypto.name}</h2>
              <h3>{crypto.symbol}</h3>
            </div>
            <p>Price: ${parseFloat(crypto.priceUsd).toFixed(2)}</p>
            <BuyButton
              symbol={crypto.symbol}
              price={crypto.priceUsd}
            ></BuyButton>
          </div>
        ))}
      </div>
      <div className="portfolio">
        <h2>
          <b>BTC</b>
        </h2>
        <p>
          Time Bought: <b>10:23</b>
        </p>
        <p>
          Units: <b>1</b>
        </p>
        <p>
          Price Bought: <b>232323</b>
        </p>
        <h3>
          Current Price: <b>4545</b>
        </h3>
      </div>
    </div>
  );
}
