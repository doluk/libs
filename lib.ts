type version = 6 | 7 | 8 | 9 | 10 | string
export type LinkableString = string | { text: string; url: string }

export interface Lib {
	name: string
	url: string
	language: string
	loginWithToken: string
	loginWithEmail: string
	dynamicIP: string
	troopInformation: string
	events: string
	clans_CurrentWar_Leaguegroup: string
	clans_clannwarleagues_wars: string
	clans_warlog: string
	clan_search: string
	clans_current_war: string
	clans: string
	clans_members: string
	players: string
	players_verify: string
	leagues: string
	leagues_season_ranking: string
	league_info: string
	leagues_seasons: string
	warleagues: string
	warleague_info: string
	locations_rankings_clans: string
	locations_rankings_players: string
	locations_rankings_clan_builderbase: string
	locations_rankings_player_builderbase: string
	locations: string
	location_info: string
	goldpass: string
	labels_player: string
	labels_clan: string
	note: string
}
