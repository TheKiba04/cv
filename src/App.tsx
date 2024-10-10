import DataProvider from '@providers/DataProvider'
import StyledEngineProvider from '@providers/StyledEngineProvider'
import ThemeProvider from '@providers/ThemeProvider'

import Overview from '@pages/Overview'

import CssBaseline from '@elements/CssBaseline'

import theme from '@styles/theme'

const App = () => (
	<StyledEngineProvider injectFirst>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<DataProvider>
				<Overview />
			</DataProvider>
		</ThemeProvider>
	</StyledEngineProvider>
)

export default App
