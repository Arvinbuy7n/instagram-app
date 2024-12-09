"use client";

import { redirect } from "next/navigation";
import { useUser } from "./hooks/useAuth";

export default function Home() {
  const { isSignedIn, setIsSignedIn, isLoaded } = useUser();

  if (!isSignedIn) {
    redirect("/signin");
    return null;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      INSTAGRAM APP
      <button
        onClick={() => {
          setIsSignedIn(false);
        }}
      >
        signout
      </button>
    </>
  );
}
