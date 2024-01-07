import { createTheme } from '@mui/material/styles';

export const PRIMARY_COLOR = '#D11715';
export const SECONDARY_COLOR = '#333333';
export const OFF_BLACK = '#605C5C';
export const GREY = '#f6f6f6';
export const DARK_GREY = '#AAAAAA';
export const LIGHT_GREY = 'rgba(0, 0, 0, 0.12)';
export const WHITE = '#FFFFFF';
export const TEXT_COLOR = '#636363';
export const LINK_COLOR = '#2973b7';

export const theme = createTheme({
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				disableRipple: true,
				disableFocusRipple: true,
				disableTouchRipple: true
			}
		},
    },
	palette: {
		primary: {
			light: '#df3c3a',
			main: PRIMARY_COLOR,
			dark: '#990300'
		},

		secondary: {
			main: SECONDARY_COLOR
		}
	},

	breakpoints: {
		values: {
			xs: 0,     // Up to 480px
			sm: 481,   // 481px to 767px
			md: 769,   // 768px to 1023px
			lg: 1025,  // 1024px to 1279px
			xl: 1281   // 1280px and above
		}
	},

	typography: {
		fontFamily: 'inherit',
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		// fontWeightBold: 600,
		fontWeightBold: 700,

        button: {
            borderRadius: '25px'
        }
	}
});