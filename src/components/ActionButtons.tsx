import { ACTION_BUTTONS, LOCAL_ICONS_PATH } from '@constants'

import Button from '@elements/Button'

import getIconPath from '@helpers/getIconPath'

interface ActionButtonsProps {
	downloadCVLink: string
}


const ActionButtons = ({ downloadCVLink }: ActionButtonsProps) => {
	const { DOWNLOAD_TEXT } = ACTION_BUTTONS[0]

	const downloadIconPath = getIconPath(LOCAL_ICONS_PATH.COMMON, 'download')

	const DownloadIcon = () => (
		<img style={{ width: '16px', height: '16px' }} src={downloadIconPath} alt={DOWNLOAD_TEXT} />
	)

	return (
		<Button
			variant='contained'
			startIcon={<DownloadIcon />}
			href={downloadCVLink}
			target='_blank'
			rel='noopener noreferrer'
		>
			{DOWNLOAD_TEXT}
		</Button>
	)
}

export default ActionButtons
