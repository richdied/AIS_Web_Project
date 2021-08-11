import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
	${reset}

	*{
		box-sizing:border-box;
	}

	body{
		font-size:20px;
		background-color: ${(props) => props.theme.primary};
		color: ${(props) => props.theme.secondary};
	}

	a{
		text-decoration:none;
		color:${(props) => props.theme.secondary};
	}
`;
