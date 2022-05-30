import {Lib, LinkableString} from "./lib";

// the data powering the chart
// please keep in the same order as Discord's docs (https://discord.dev/topics/community-resources#libraries-discord-libraries):
// sort language alphabetically and then name alphabetically

export const libs: Lib[] = [
	{
		name: 'CocApi',
		url: 'https://github.com/devhl-labs/CocApi',
		language: 'C#',
		loginWithToken: 'Yes',
		loginWithEmail: 'Yes',
		dynamicIP: 'No',
		troopInformation: 'Yes',
		events: 'Yes',
		note: ''
	},
	{
		name: 'clash.js',
		url: 'https://github.com/ryansyn/clash.js',
		language: 'JavaScript',
		loginWithToken: 'Yes',
		loginWithEmail: 'Yes',
		dynamicIP: 'Yes',
		troopInformation: 'No',
		events: 'No',
		note: ''
	},
	{
		name: 'clashofclans.js',
		url: 'https://github.com/clashperk/clashofclans.js',
		language: 'JavaScript',
		loginWithToken: 'Yes',
		loginWithEmail: 'Yes',
		dynamicIP: 'No',
		troopInformation: 'Yes',
		events: 'Yes',
		note: 'TypeScript Support'
	},
	{
		name: 'coc.py',
		url: 'https://github.com/mathsman5133/coc.py',
		language: 'Python',
		loginWithToken: 'Yes',
		loginWithEmail: 'Yes',
		dynamicIP: 'No',
		troopInformation: 'Yes',
		events: 'Yes',
		note: ''
	},
	{
		name: 'cocRb',
		url: 'https://github.com/Crusader500/cocRb',
		language: 'Ruby',
		loginWithToken: 'Yes',
		loginWithEmail: 'Yes',
		dynamicIP: 'No',
		troopInformation: 'Yes',
		events: 'Yes',
		note: ''
	}
]
