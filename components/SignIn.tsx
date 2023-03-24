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
    <div>
        <p>Sign in</p>
  <button
          className="bg-zinc-200 rounded-md p-2 flex gap-8 items-center shadow-sm border w-full text-black justify-center active:scale-95"
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
