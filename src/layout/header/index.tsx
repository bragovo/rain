import cc from "classcat";

import s from "./index.module.css";

import { Booking } from "./booking";
import { Logo } from "./logo";
import { Nav } from "./nav";
import { Menu } from "./menu";
import { createSignal } from "solid-js";

export const Header = () => {
  const [active, setActive] = createSignal(false);

  return (
    <header class={cc([s.root, { [s.active]: active() }])}>
      <div class={s.cont}>
        <div class={s.logo}>
          <Logo />
        </div>

        <div class={s.nav}>
          <Nav setActive={setActive} />
        </div>

        <div class={s.menu}>
          <Menu />
        </div>

        <div class={s.booking}>
          <Booking />
        </div>
      </div>
    </header>
  );
};
