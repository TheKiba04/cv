import Institution from './Institution'
import Socials from './Socials'
import Work from './Work'

type UserData = {
	name: string
	surname: string
	speciality: string
	location: string
	email: string
	downloadCVLink: string
	socials: Socials
	about: string
	education: Institution[]
	experience: Work[]
	skills: string[]
	avatar?: string
}

export default UserData
