import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { UserContext } from "../contexts/UserContext";

export const useUser = () => {
  const { isSignedIn, setIsSignedIn, isLoaded, setIsLoaded } =
    useContext(UserContext);
  const router = useRouter();

  const signIn = async ({ credential, password }) => {
    setIsLoaded(true);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API}/signin`, {
        credential,
        password,
      });
      toast.success("Successfully signed in");
      setIsSignedIn(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred");
    } finally {
      setIsLoaded(false);
    }
  };

  const signup = async ({ credential, password, fullname, username }) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API}/signup`, {
        credential,
        password,
        fullname,
        username,
      });

      toast.success("Та амжилттай бүртгүүллээ!");
      router.push("/signin");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return {
    signIn,
    signup,
    setIsSignedIn,
    isSignedIn,
    isLoaded,
  };
};
