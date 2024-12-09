"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useUser } from "../hooks/useAuth";

export default function SigninPage() {
  const { signIn, isSignedIn } = useUser();

  if (isSignedIn) {
    redirect("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const credential = e.target.credential.value.trim();
    const password = e.target.password.value;
    signIn(credential, password);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          Credential
          <input name="credential" type="text" className="text-black" />
        </label>
        <label className="flex flex-col">
          Password
          <input name="password" type="password" className="text-black" />
        </label>
        <button type="submit" className="text-black bg-white">
          Signin
        </button>
      </form>
      <div className="my-4">
        Don&rsquo;t have an account? <Link href="/signup">Sign up</Link>
      </div>
    </div>
  );
}
