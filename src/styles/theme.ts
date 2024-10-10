import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
	palette: {
		primary: {
			main: '#e6e6e6',
			dark: '#262626',
			contrastText: '#ffffff',
			light: '#ffffff',
		},
		secondary: {
			main: '#737373',
			dark: '#404040',
			light: '#bfbfbf',
			contrastText: '#8a0a16',
		},
		background: {
			default: '#E8EAEB',
			paper: '#ffffff',
		},
		text: {
			primary: '#262626',
			secondary: '#000000',
		},
		action: {
			disabledBackground: 'rgba(232, 234, 235, 0.7)',
			disabled: '#ffffff',
		},
	},
	typography: {
		fontFamily: ['Rubik', 'Rubik Mono One'].join(','),
		h1: {
			fontFamily: 'Rubik Mono One',
			fontSize: '2.9em',
		},
		h2: {
			fontFamily: 'Rubik',
			fontSize: '1.8rem',
		},
		h6: {
			fontSize: '1rem',
			lineHeight: '1.2',
		},
		body1: {
			fontSize: '.9rem',
		},
		body2: {
			fontSize: '.7rem',
		},
		subtitle2: {
			fontFamily: 'Rubik',
			fontWeight: 200,
			fontSize: '.8rem',
			lineHeight: '1',
		},
		caption: {
			fontFamily: 'Rubik',
			fontWeight: 200,
			fontStyle: 'italic',
			fontSize: '.7rem',
			lineHeight: '1.2',
			color: '#737373',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					color: '#e6e6e6',
					backgroundColor: '#262626',
					border: '1px solid #262626',
					outline: 'none',
					borderRadius: '2px',
					padding: '0.4em 1em 0.3em',
					'&:hover': {
						backgroundColor: '#e6e6e6',
						color: '#262626',
						border: '1px solid #262626',
					},
					'&:disabled': {
						backgroundColor: '#737373',
						color: '#ffffff',
						border: '1px solid #737373',
					},
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: '#262626',
				},
			},
		},
	},
}

export default responsiveFontSizes(createTheme(themeOptions))
