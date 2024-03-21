import Link from "next/link";
import BuyButton from "@/components/BuyButton";

export default async function crypto() {
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
    <div className="tradeBody">
      <div className="sidebar fixed">
        <Link href={"/."}>
          <button>Back</button>
        </Link>
      </div>

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
    </div>
  );
}
