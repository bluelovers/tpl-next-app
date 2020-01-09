import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import NoSsr from '@material-ui/core/NoSsr';
//import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss';
import { createMuiTheme, darken, fade } from '@material-ui/core/styles';

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

const StyledButton2 = styled.button`
  ${({ theme }) => `
  padding: 8px 12px;
  border: 1px solid;
  cursor: pointer;
  outline: 0;
  border-radius: ${theme.shape.borderRadius}px;
  color: ${theme.palette.primary.contrastText};
  background-color: ${theme.palette.primary.main};
  border-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'box-shadow'])};
  font-family: ${[
	'-apple-system',
	'BlinkMacSystemFont',
	'"Segoe UI"',
	'Roboto',
	'"Helvetica Neue"',
	'Arial',
	'sans-serif',
	'"Apple Color Emoji"',
	'"Segoe UI Emoji"',
	'"Segoe UI Symbol"',
].join(',')};
  &:hover {
    background-color: ${darken(theme.palette.primary.main, 0.1)};
    border-color: ${darken(theme.palette.primary.main, 0.2)};
  }
  &:active {
    background-color: ${darken(theme.palette.primary.main, 0.2)};
    border-color: ${darken(theme.palette.primary.main, 0.3)};
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem ${fade(theme.palette.primary.main, 0.5)};
  }
  font-size: 18px;
  ${theme.breakpoints.up('md')} {
    font-size: 16px;
  }
  `}
`;

export default function StyledComponents() {
	return (
		<main>
			<div>
				<Button>Material-UI</Button>
				<StyledButton>Styled Components</StyledButton>
				<StyledButton2>Styled Components 2</StyledButton2>
			</div>
		</main>
	);
}
