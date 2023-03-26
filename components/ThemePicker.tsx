import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemePicker: React.FC = () => {

useEffect(() => {
        themeChange(false);
      }, []);
   return (

<div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1 btn-ghost normal-case text-xl">Themes</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 w-[350px] shadow bg-base-100 rounded-box  max-h-[500px]  overflow-y-scroll">
    <li data-set-theme="potato"><a>Potato</a></li>
    <li data-set-theme="light"><a>Light</a></li>
    <li data-set-theme="dark"><a>Dark</a></li>
    <li data-set-theme="cupcake"><a>Cupcake</a></li>
    <li data-set-theme="bumblebee"><a>Bumblebee</a></li>
    <li data-set-theme="emerald"><a>Emerald</a></li>
    <li data-set-theme="corporate"><a>Corporate</a></li>
    <li data-set-theme="synthwave"><a>Synthwave</a></li>
    <li data-set-theme="retro"><a>Retro</a></li>
    <li data-set-theme="cyberpunk"><a>Cyberpunk</a></li>
    <li data-set-theme="valentine"><a>Valentine</a></li>
    <li data-set-theme="halloween"><a>Halloween</a></li>
    <li data-set-theme="garden"><a>Garden</a></li>
    <li data-set-theme="forest"><a>Forest</a></li>
    <li data-set-theme="aqua"><a>Aqua</a></li>
    <li data-set-theme="lofi"><a>Lofi</a></li>
    <li data-set-theme="pastel"><a>Pastel</a></li>
    <li data-set-theme="fantasy"><a>Fantasy</a></li>
    <li data-set-theme="wireframe"><a>Wireframe</a></li>
    <li data-set-theme="black"><a>Black</a></li>
    <li data-set-theme="luxury"><a>Luxury</a></li>
    <li data-set-theme="dracula"><a>Dracula</a></li>
    <li data-set-theme="cmyk"><a>cmyk</a></li>
    <li data-set-theme="autumn"><a>Autumn</a></li>
    <li data-set-theme="business"><a>Business</a></li>
    <li data-set-theme="acid"><a>Acid</a></li>
    <li data-set-theme="lemonade"><a>Lemonade</a></li>
    <li data-set-theme="night"><a>Night</a></li>
    <li data-set-theme="coffee"><a>Coffee</a></li>
    <li data-set-theme="winter"><a>Winter</a></li>

      </ul>
</div>
   )
}

export default ThemePicker;
