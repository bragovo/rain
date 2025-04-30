import type { Accessor, Setter } from "solid-js";
import { A } from "@solidjs/router";
import { For } from "solid-js";

import s from "./index.module.css";

export const Menu = ({
  active,
  setActive,
}: { active: boolean; setActive: Setter<boolean> }) => {
  const menu: { href?: string; title: string }[] = [
    {
      href: "/about",
      title: "Пространство",
    },
    {
      title: "Услуги",
    },
    {
      href: "/works",
      title: "Работы",
    },
    {
      href: "/team",
      title: "Команда",
    },
    {
      href: "/career",
      title: "Вакансии",
    },
    {
      title: "Ценности",
    },
  ];

  return (
    <nav class={s.root}>
      <ul class={s.list}>
        <For each={menu}>
          {({ href, title }, _) => (
            <li class={s.item}>
              {href && (
                <A class={s.a} href={href}>
                  {title}
                </A>
              )}

              {!href && <span class={s.a}>{title}</span>}
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
};
