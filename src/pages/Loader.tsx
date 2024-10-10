import { LOADING_LABEL } from '@constants'

import BasicLayout from '@layouts/BasicLayout'
import Box from '@elements/Box'
import CircularProgress from '@elements/CircularProgress'
import Typography from '@elements/Typography'

export const Loader = () => {
	return (
		<BasicLayout>
			<Box
				sx={{
					width: '100%',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant='h1'>
					<CircularProgress size='35px' sx={{ color: 'secondary.contrastText' }} />
					{LOADING_LABEL}
				</Typography>
			</Box>
		</BasicLayout>
	)
}

export default Loader
