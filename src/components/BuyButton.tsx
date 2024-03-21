"use client";
import { addTranscation } from "@/app/actions";

function buy(symbol: string, price: string) {
  const count = prompt("How many?");
  addTranscation(Number(count), symbol, price);
}

export default async function BuyButton(props: {
  symbol: string;
  price: string;
}) {
  return (
    <div>
      <button className="buy" onClick={() => buy(props.symbol, props.price)}>
        Buy
      </button>
    </div>
  );
}
