import { auth } from "@/lib/auth";
import { User } from "@/lib/models/user.model";
import { redirect } from "next/navigation";

export default async function Home() {
  const { session, user } = await auth();
  if (!session) {
    return redirect("/auth/login");
  }

  const userData = await User.findById(user?.id);
  if (userData.role !== 'admin') return redirect('/')
  return (
    <div className=" max-w-5xl p-5 space-y-5">
      <h1 className="text-3xl text-primary">Admin page</h1>
      <h1 className=" text-7xl font-sans  capitalize">{userData.name}</h1>
    </div>
  );
}
