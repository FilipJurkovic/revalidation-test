import { getTime } from "@/data/api";
import Image from "next/image";

export default async function RoutePage() {
  const time = await getTime();

  console.log(time);
  return (
    <div className="bg-white h-screen w-screen p-10">
      <h1 className="m-10 font-medium text-black">{time}</h1>
    </div>
  );
}
