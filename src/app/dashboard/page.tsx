import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/[...nextauth]/route"

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return <div>Welcome {session.user?.email}</div>;
}
