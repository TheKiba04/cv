import Box from '@elements/Box'
import Typography from '@elements/Typography'

interface FooterProps {
	name: string
	surname: string
	location: string
}

const Footer = ({ name, surname, location }: FooterProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '16px',
				bgcolor: 'action.disabledBackground',
			}}
		>
			<Typography variant='caption' color='secondary.contrastText'>
				&#169; {name} {surname} &#8226; {location}
			</Typography>
		</Box>
	)
}

export default Footer
