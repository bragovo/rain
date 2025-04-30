import { Booking } from "./booking";
import { Logo } from "./logo";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header>
      <div>
        <Logo />
      </div>

      <div>
        <Nav />
      </div>

      <div>
        <Booking />
      </div>
    </header>
  );
};
