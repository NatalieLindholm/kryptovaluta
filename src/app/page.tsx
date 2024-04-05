import Slide from "@/components/Slide";
import BuyButton from "@/components/BuyButton";
import Transactions from "@/components/Transactions";

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
        <div>
          <h1>Crypto</h1>
          <h1>Currency</h1>
          <h1>App</h1>
        </div>
      </div>

      <div className="content">
        <div>
          <Slide>
            {data.data.map((crypto: crypto) => (
              <div className="box" key={crypto.id}>
                <h2 className="font-bold">{crypto.name}</h2>
                <h3>{crypto.symbol}</h3>
                <p>Price: ${parseFloat(crypto.priceUsd).toFixed(2)}</p>
                <BuyButton
                  symbol={crypto.symbol}
                  price={crypto.priceUsd}
                ></BuyButton>
              </div>
            ))}
          </Slide>
        </div>

        <div>
          <Transactions api={data.data} />
        </div>
      </div>
    </div>
  );
}
{
}
