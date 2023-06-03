import { getServerSession } from "next-auth";
import SignInButton from "@/components/auth/buttons/SignInButton";
import SignOutButton from "@/components/auth/buttons/SignOutButton";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Page() {

  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="m-2">Notes</h1>
      <hr />
      <div className="m-2">
        {!session ? <SignInButton /> : (
          <>
            <p>
              {session.user?.name}
            </p>
            <SignOutButton />
          </>
        )}
      </div>
    </div>
  );
}