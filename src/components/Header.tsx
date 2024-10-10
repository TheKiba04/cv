import UserData from '@type/UserData'

import Box from '@elements/Box'
import Grid from '@elements/Grid'
import Typography from '@elements/Typography'

import ActionButtons from './ActionButtons'
import Contacts from './Contacts'
import SocialNetworks from './SocialNetworks'

interface HeaderProps {
	user: UserData
}

const Header = ({ user }: HeaderProps) => {
	const { name, surname, speciality, socials, location, email, downloadCVLink } = user

	return (
		<Box pt={3} pb={4}>
			<Grid
				container
				borderBottom='1px solid'
				borderColor='primary.contrastText'
				paddingBottom={2}
				spacing={1}
			>
				<Grid container item xs={12} md={9}>
					<Grid item xs={12} container spacing={1} pb={1}>
						<Grid item xs={12} sm='auto'>
							<Typography variant='h1' color='secondary.contrastText'>
								{name}
							</Typography>
						</Grid>
						<Grid item xs={12} sm='auto'>
							<Typography variant='h1' component='span' color='secondary.dark' gutterBottom>
								{surname}
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={12} pb={2}>
						<Typography variant='h5' color='secondary.contrastText'>
							{speciality}
						</Typography>
					</Grid>
					<Grid item xs='auto' container pb={1}>
						<Grid item>
							<SocialNetworks socials={socials} />
						</Grid>
						<Grid item>
							<Contacts location={location} email={email} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={3} textAlign='right'>
					<ActionButtons downloadCVLink={downloadCVLink} />
				</Grid>
			</Grid>
		</Box>
	)
}

export default Header
