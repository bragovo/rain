import type { Accessor, Setter } from "solid-js";
import s from "./index.module.css";

import NavImg from "./nav.svg";

export const Nav = ({ setActive }: { setActive: Setter<boolean> }) => {
  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div class={s.root}>
      <button class={s.nav} onClick={handleClick} type="button">
        <NavImg />
      </button>
    </div>
  );
};
