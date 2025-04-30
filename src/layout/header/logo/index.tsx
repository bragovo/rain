import { A } from "@solidjs/router";

import s from "./index.module.css";

import LogoImg from "./logo.svg";

export const Logo = () => {
  return (
    <div>
      <A href="/" class={s.a}>
        <LogoImg />
      </A>
    </div>
  );
};
