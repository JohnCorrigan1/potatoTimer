import Image from "next/image";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";
import toast from "react-hot-toast";
//import { useAuthState } from "react-firebase-hooks/auth";


const SignIn: React.FC = () => {
      const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
    toast.success("Signed in with Google");
  };
return (
    <div className="flex flex-col items-center justify-center gap-5">

    <p className="text-xl font-bold ">Sign in</p>
      <Image
      src="/potatoman.png"
      alt="potatoman"
      width={300}
      height={300}
      className="rounded-lg shadow-xl"/>

  <button
          className="bg-zinc-200 max-w-[300px] rounded-md p-2 flex gap-8 items-center shadow-sm border w-full text-black justify-center active:scale-95"
          onClick={signInWithGoogle}
        >
          <Image
            src="/google.png"
            alt="Google sign in"
            width={30}
            height={30}
          />{" "}
          Sign in with Google
        </button>
    </div>
)
}

export default SignIn;
