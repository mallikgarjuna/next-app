import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <a href="/users">Users anchor</a>
      <Link href="/users">Users Link</Link>
      <ProductCard />
    </main>
  );
}
