import { LOCAL_ICONS_PATH } from '@constants'

import Avatar from '@elements/Avatar'
import Box from '@elements/Box'
import Typography from '@elements/Typography'

import getIconPath from '@helpers/getIconPath'

interface ContactsProps {
	location: string
	email: string
}

const Contacts = ({ location, email }: ContactsProps) => {
	const LOCATION_ICON = getIconPath(LOCAL_ICONS_PATH.CONTACTS, 'location')

	const EMAIL_ICON = getIconPath(LOCAL_ICONS_PATH.CONTACTS, 'email')

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '4px',
				borderLeft: '1px solid',
				borderColor: 'secondary.main',
				paddingLeft: '8px',
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
				<Avatar variant='square' src={LOCATION_ICON} sx={{ width: 15, height: 15 }} />

				<Typography variant='caption'>{location}</Typography>
			</Box>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
				<Avatar variant='square' src={EMAIL_ICON} sx={{ width: 15, height: 15 }} />
				<Typography variant='caption'>{email}</Typography>
			</Box>
		</Box>
	)
}

export default Contacts
