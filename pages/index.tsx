import Head from 'next/head'
import { LinkableString } from '../lib'

import { libs } from '../libs'

const langs = Array.from(new Set(libs.map(lib => lib.language).sort()))

const statusColors = {
	Yes: 'green',
	No: 'red'
}

const status = (status: LinkableString) => typeof status === 'string'
	? <td className={statusColors[status] ?? 'yellow'}>{status}</td>
	: <td className={statusColors[status.text] ?? 'yellow'}><a href={status.url} target="_blank" rel="noopener">{status.text}</a></td>

const versionColors = {
	6: 'red',
	7: 'red',
	8: 'yellow',
	9: 'green',
	10: 'green',
	'-': 'gray'
}

const version = (version: number | string) => <td className={versionColors[version] ?? 'yellow'}>{version}</td>

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Clash of Clans API Library Comparisons</title>
				<meta name="description" content="Compares Clash of Clans libraries and their features" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<main>
				<h1 id="title" className="title has-text-white mb-6">
					Clash of Clans API Library Comparisons
				</h1>

				{langs.map(lang => <div key={lang} className="mb-4 fw">
					<h2 id={lang.toLowerCase()} className="title is-4 mb-3 has-text-white"><a href={'#' + lang.toLowerCase()}>{lang}</a></h2>

					<div className="table-container">
						<table className="table is-bordered mb-4 has-text-centered has-text-white fw">
							<thead>
								<tr>
									<th>Library</th>
									<th>Login with Token</th>
									<th>Login with Email</th>
									<th>Dynamic IP address support</th>
									<th>Troops/spells/buildings/heroes information</th>
									<th>/clans/getClanWarLeagueGroup</th>
									<th>/clans/getClanWarLeagueWar</th>
									<th>/clans/getClanWarLog</th>
									<th>/clans/searchClans</th>
									<th>/clans/getCurrentWar</th>
									<th>/clans/getClan</th>
									<th>/clans/getClanMembers</th>
									<th>/players/getPlayer</th>
									<th>/players/verifyToken</th>
									<th>/leagues/getLeagues</th>
									<th>/leagues/getLeagueSeasonRankings</th>
									<th>/leagues/getLeague</th>
									<th>/leagues/getLeagueSeasons</th>
									<th>/leagues/getWarLeague</th>
									<th>/leagues/getWarLeagues</th>
									<th>/locations/getClanRanking</th>
									<th>/locations/getPlayerRanking</th>
									<th>/locations/getClanBuilderBaseRanking</th>
									<th>/locations/getPlayerBuilderBaseRanking</th>
									<th>/locations/getLocations</th>
									<th>/locations/getLocation</th>
									<th>/goldpass/getCurrentGoldPassSeason</th>
									<th>/labels/getPlayerLabels</th>
									<th>/labels/getClanLabels</th>
									<th>Events</th>
									<th>Note</th>
								</tr>
							</thead>
							<tbody>
								{libs.filter(lib => lib.language === lang).map(lib => 
									<tr key={lib.name}>
										<td><a href={lib.url} target="_blank" rel="noopener">{lib.name}</a></td>
										{status(lib.loginWithToken)}
										{status(lib.loginWithEmail)}
										{status(lib.dynamicIP)}
										{status(lib.troopInformation)}
										{status(lib.clans_CurrentWar_Leaguegroup)}
										{status(lib.clans_clannwarleagues_wars)}
										{status(lib.clans_warlog)}
										{status(lib.clan_search)}
										{status(lib.clans_current_war)}
										{status(lib.clans)}
										{status(lib.clans_members)}
										{status(lib.players)}
										{status(lib.players_verify)}
										{status(lib.leagues)}
										{status(lib.leagues_season_ranking)}
										{status(lib.league_info)}
										{status(lib.leagues_seasons)}
										{status(lib.warleague_info)}
										{status(lib.warleagues)}
										{status(lib.locations_rankings_clans)}
										{status(lib.locations_rankings_players)}
										{status(lib.locations_rankings_clan_versus)}
										{status(lib.locations_rankings_player_versus)}
										{status(lib.locations)}
										{status(lib.location_info)}
										{status(lib.goldpass)}
										{status(lib.labels_player)}
										{status(lib.labels_clan)}
										{status(lib.events)}
										{status(lib.note)}
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>)}
			</main>

			<footer className="has-text-centered has-text-white">
				Inspired by <a href="https://github.com/advaith1/libs" target="_blank" rel="noopener">github.com/advaith1/libs</a><br />
				<a href="https://github.com/doluk/libs" target="_blank" rel="noopener">Contribute data on GitHub</a>
			</footer>

			<style jsx>{`
				.container {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					max-width: 100%;
				}

				footer {
					width: 100%;
					height: 100px;
					justify-content: center;
					align-items: center;
				}

				#title {
					margin: 0;
					line-height: 1.15;
					font-size: 4rem;
				}

				#title,
				.description {
					text-align: center;
				}

				.logo {
					height: 1em;
				}

				.table th {
					color: white;
					font-weight: 500;
				}

				table {
					background: #32353b;
				}

				.fw {
					width: 100%;
				}

				@media (max-width: 768px) {
					#title {
						font-size: 3rem;
					}
				}
				
				h2 a {
					color: white;
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
					background: #36393f;
				}

				a {
					color: #00aff4;
				}

				a:hover {
					color: #00aff4;
					text-decoration: underline;
				}

				.table td, .table th {
					border-color: #4f545c;
				}

				.green {
					background-color: #2f834a;
				}

				.yellow {
					background-color: #6e5b0f;
				}

				.yellow a {
					color: #99e2ff
				}

				.red {
					background-color: #a82426;
				}

				.gray {
					background-color: #40444b;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	)
}
