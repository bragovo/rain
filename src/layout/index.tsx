import type { ParentComponent } from "solid-js";

export const Layout: ParentComponent = (props) => {
	return (
		<>
			<div>LAYOUT</div>

			{props.children}
		</>
	);
};
