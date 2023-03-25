import { useEffect } from "react";
import { themeChange } from "theme-change";
import { Button } from 'react-daisyui'


const ThemePicker: React.FC = () => {

useEffect(() => {
        themeChange(false);
      }, []);
   return (

<div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1 btn-ghost normal-case text-xl">Themes</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li data-set-theme="light"><a>Light</a></li>
    <li data-set-theme="dark"><a>Dark</a></li>
    <li data-set-theme="cupcake"><a>Cupcake</a></li>
    <li data-set-theme="cmyk"><a>cmyk</a></li>
  </ul>
</div>
   )
}

export default ThemePicker;
