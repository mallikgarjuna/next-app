import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello world</h1>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <a href="/users">Users anchor</a>
      <Link href="/users">Users Link</Link>
      <ProductCard />
    </main>
  );
}
