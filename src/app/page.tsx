import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default async function Home() {
  return (
    <div className="body">
      <div className="sidebar">
        <div className="titel">
          <h1>Crypto</h1>
          <h1>Currency</h1>
          <h1>App</h1>
        </div>
        {/*
        <Link href={"/trade"}>
          <button>Trade</button>
        </Link> */}

        <Drawer>
          <DrawerTrigger className="DrawerTrigger">Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <div>{/* Your bought crypto here */}</div>
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
