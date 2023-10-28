import { redirect } from "next/navigation";
import GoogleSignInButton from "./components/GoogleSignInButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="p-8">
      <GoogleSignInButton />
    </div>
  );
}
