import { cookies } from "next/headers";

import { Button } from "@/components/ui/button";

export default async function Home() {
  const cookiesStore = await cookies();

  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      Cookie: cookiesStore.toString(),
    },
    cache: "no-store",
  });

  const session = await res.json();
  console.log(session);

  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
