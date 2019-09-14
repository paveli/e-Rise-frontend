import React from "react";

export const Heading = ({ tag, children, color }) => {
	const Htag = `h${tag}`;
	return <Htag style={{ color: color }}>{children}</Htag>;
};

export default Heading;
