export default async function crypto() {
  const res = await fetch("https://api.coincap.io/v2/assets");

  const data = await res.json();
  console.log(data);

  type crypto = {
    id: string;
    symbol: string;
    name: string;
    priceUsd: string;
    changePercent24hr: string;
  };

  return (
    <div className="cryptoBody">
      <div className="sidebar">
        <button>Back</button>
      </div>

      {data.data.map((crypto: crypto) => (
        <div className="box" key={crypto.id}>
          <h2>{crypto.name}</h2>
          <p>Symbol: {crypto.symbol}</p>
          <p>Price: ${parseFloat(crypto.priceUsd).toFixed(2)}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
}
