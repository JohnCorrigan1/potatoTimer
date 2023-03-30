import SignIn from "./SignIn";
import { auth } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import ThemePicker from "./ThemePicker";
import Link from "next/link";


const NavBar: React.FC = () => {

  const [user] = useAuthState(auth);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link  href="/" className="btn btn-ghost normal-case text-xl">Potato Timer</Link>
      </div>
<Link href="/leaderboard"><button className="btn btn-ghost normal-case text-xl ml-5">leaderboard</button></Link>
<ThemePicker />
      {!user ? (
      <label htmlFor="my-modal-6" className=" ml-5 btn btn-ghost btn-seconday">
        Sign In
      </label>) : (
      <div className="flex-none gap-2 ml-5">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/potatoman.png" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/profile" className="justify-between">
                Profile
                <span className="badge">potato</span>
              </Link>
            </li>
            <li>
              <a onClick={() => auth.signOut()}>Logout</a>
            </li>
          </ul>
        </div>
      </div> )}
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <SignIn />
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Nice Potato
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
