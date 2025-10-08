import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return <div>Welcome, {session.user?.email}</div>;
}
