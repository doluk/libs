type version = 6 | 7 | 8 | 9 | 10 | string
export type LinkableString = string | { text: string; url: string }

export interface Lib {
	name: string
	url: string
	language: string
	loginWithToken: version
	loginWithEmail: version
	dynamicIP: LinkableString
	troopInformation: LinkableString
	events: LinkableString
	note: string
}
