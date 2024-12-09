"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useUser } from "../hooks/useAuth";

export default function SignupPage() {
  const { signUp, isSignedIn } = useUser();

  if (isSignedIn) {
    return redirect("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const credential = e.target.credential.value;
    const password = e.target.password.value;
    const fullname = e.target.fullname.value;
    const username = e.target.username.value;

    signUp(credential, password, fullname, username);
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
        <label className="flex flex-col">
          Full Name
          <input name="fullname" type="text" className="text-black" />
        </label>
        <label className="flex flex-col">
          Username
          <input name="username" type="text" className="text-black" />
        </label>
        <button className="text-black bg-white">Signup</button>
      </form>
      <div className="my-4">
        Already have an account? <Link href={"/signin"}>Sign in</Link>
      </div>
    </div>
  );
}
