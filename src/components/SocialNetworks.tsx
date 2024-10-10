import { LOCAL_ICONS_PATH } from '@constants'
import type Socials from '@type/Socials'

import Avatar from '@elements/Avatar'
import AvatarGroup from '@elements/AvatarGroup'
import Link from '@elements/Link'

import getIconPath from '@helpers/getIconPath'

interface SocialNetworksProps {
	socials: Socials
}

const SocialNetworks = ({ socials }: SocialNetworksProps) => {
	const socialNames = Object.keys(socials)

	const getSocialIconPath = (social: string) => getIconPath(LOCAL_ICONS_PATH.SOCIALS, social)

	return (
		<AvatarGroup spacing={2}>
			{socialNames.map((social: string) => (
				<Link key={social} href={socials[social]} target='_blank' rel='noreferrer'>
					<Avatar
						sx={{ width: 30, height: 30 }}
						variant='rounded'
						src={getSocialIconPath(social)}
						alt={social}
					/>
				</Link>
			))}
		</AvatarGroup>
	)
}

export default SocialNetworks
