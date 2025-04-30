import { Route, Router } from "@solidjs/router";
import { render } from "solid-js/web";

import "./index.css";
import { Layout } from "./layout/index.tsx";
import { AboutPage } from "./pages/about/index.tsx";
import { HomePage } from "./pages/home/index.tsx";

const root = document.getElementById("root");

if (!root) {
  throw "!!!";
}

render(
  () => (
    <Router root={Layout}>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Router>
  ),
  root,
);
