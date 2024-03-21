'use server'
import { db } from "@/utils/db";

export async function addTranscation(count: number, symbol: string, price: string) {
    console.log("buying", count, "of", symbol);
  
    try {
      await db.query("INSERT INTO transaction (units, symbol, purchaseprice) VALUES ($1, $2, $3)", [count, symbol, price])
      return 'Saved Successfully'
    } catch (error) {
      console.log(error);
      return 'Didnt save'
    }
  }