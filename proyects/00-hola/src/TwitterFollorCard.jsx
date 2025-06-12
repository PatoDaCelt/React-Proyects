export function TwitterFollorCard({ formatUserName, userName, name, isFollowing }) {
    const imageSrc = `https://unavatar.io/x/${userName}`

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-fllowCard-avatar' alt="Avatar de pat_amg" src={imageSrc} />
                <div className='tw-fllowCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-fllowCard-info-user'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className='tw-fllowCard-info-button'>Seguir</button>
            </aside>
        </article>
    )
}