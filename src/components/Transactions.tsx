import { getTransactions } from "@/utils/handledb";

function calcResult(oldPrice: number, newPrice: number) {
  return ((newPrice - oldPrice) / oldPrice) * 100;
}

export default async function Transactions(props: any) {
  const data = await getTransactions();

  return (
    <div className="row">
      <div className="zekken">
        <div className="column">
          <h1>
            <b>Crypto</b>
          </h1>
          {data.map((transaction: any) => (
            <span>{transaction.symbol}</span>
          ))}
        </div>

        <div className="column">
          <h1>
            <b>Units</b>
          </h1>
          {data.map((transaction: any) => (
            <span>{transaction.units}</span>
          ))}
        </div>

        <div className="column">
          <h1>
            <b>Paid Price</b>
          </h1>
          {data.map((transaction: any) => (
            <span>
              {Number(transaction.purchaseprice).toLocaleString("fi-FI", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          ))}
        </div>

        <div className="column">
          <h1>
            <b>Profit</b>
          </h1>
          {data.map((transaction: any) => (
            <span>
              {calcResult(
                transaction.purchaseprice,
                props.api.filter(
                  (crypto: any) => crypto.symbol === transaction.symbol
                )[0].priceUsd
              ).toFixed(2)}
              %
            </span>
          ))}
        </div>
      </div>

      {/* {data.map((transaction: any) => (
        <div key={transaction.id}>
          <div>
            <p>Crypto</p>
            <span>{transaction.symbol}</span>
          </div>
          <div>
            <p>Units</p>
            <span>{transaction.units}</span>
          </div>
          <div>
            <p>Paid Price</p>
            <span>
              {Number(transaction.purchaseprice).toLocaleString("fi-FI", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
          <div>
            <p>Profit</p>
            <span>
              {calcResult(
                transaction.purchaseprice,
                props.api.filter(
                  (crypto: any) => crypto.symbol === transaction.symbol
                )[0].priceUsd
              ).toFixed(2)}
              %
            </span>
          </div>
        </div>
      ))} */}
    </div>
  );
}
