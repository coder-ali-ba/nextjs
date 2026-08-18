import Link from "next/link";
import { Card } from "./components/Card";
import someAction from "./actions/something";

export default function Home() {
  return (
    <>
      
        {/* <Card cardName="Card 1" cardDescription="This is Card One"/> */}
      <button onClick={someAction} className="bg-yellow-400">click</button>
    </>
  );
}
