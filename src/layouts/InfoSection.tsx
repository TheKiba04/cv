import { ReactNode } from 'react'

import Box from '@elements/Box'
import Typography from '@elements/Typography'

interface InfoSectionProps {
	title: string
	rightSide?: boolean
	children: ReactNode
}

const InfoSection = ({ title, rightSide, children }: InfoSectionProps) => (
	<Box
		component='section'
		textAlign={rightSide ? 'center' : 'left'}
		sx={{ bgcolor: 'action.disabledBackground' }}
		p={1}
		mb={4}
	>
		<Typography variant='h2' gutterBottom>{title}</Typography>
		{children}
	</Box>
)

export default InfoSection
