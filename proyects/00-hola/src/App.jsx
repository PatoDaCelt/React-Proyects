import './App.css'
import { TwitterFollorCard } from './TwitterFollorCard'

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className='Card'>
            <TwitterFollorCard
                formatUserName={format}
                userName="pat_amg"
                name="Patricio Milán"
                isFollowing={true}
            />
            <TwitterFollorCard
                formatUserName={format}
                userName="nba"
                name="NBA"
                isFollowing={false}
            />
            <TwitterFollorCard
                formatUserName={format}
                userName="guille04as"
                name="Guillermo Atilano"
                isFollowing={false}
            />
        </section>
    )
}