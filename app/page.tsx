import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import coffee from "@/public/images/coffee.jpeg";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
    </main>
  );
}
