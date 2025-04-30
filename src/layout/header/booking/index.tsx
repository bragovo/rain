import s from "./index.module.css";

import BookingImg from "./booking.svg";

export const Booking = () => {
  return (
    <div class={s.root}>
      <a href="https://n81206.yclients.com/company:95580" class={s.a}>
        <BookingImg />
      </a>
    </div>
  );
};
