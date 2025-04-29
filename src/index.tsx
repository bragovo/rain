import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import "./index.css";
import { HomePage } from "./pages/home/index.tsx";
import { AboutPage } from "./pages/about/index.tsx";
import { Layout } from "./layout/index.tsx";

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
