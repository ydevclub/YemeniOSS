import React from 'react'
import TwitterLogo from './twitter-logo'
import SmallBox from './small-box'

export default function Contributer({ name, github, website, emoji, twitter, description, projects }) {
  const websiteText = website.split('//')[1]
  const avatar = `https://avatars.githubusercontent.com/${github}`
  const twitterAccount = `https://twitter.com/${twitter}`

  return (
    <div style={{
      flex: '0 1 320px',
      padding: '1rem',
      border: '1px solid #e8b718',
      boxShadow: '4px 4px #e8b718',
      marginLeft: 5,
      marginRight: 5,
      marginBlockEnd: '1rem',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ width: 50, height: 50, borderRadius: 999, backgroundColor: '#000', overflow: 'hidden', marginInlineEnd: 20 }}>
            <img
              src={avatar}
              loading="lazy"
              width="50"
              height="50"
              alt={name}
            />
          </div>
          <div>
            <h2 style={{ fontSize: 18, marginBottom: 5 }}>
              <a style={{ textDecoration: 'none', color: 'inherit' }} target="blank" href={`https://github.com/${github}/`}>
                {name}
                {' '}
                {emoji}
              </a>
            </h2>
            <a style={{ fontSize: 14 }} href={website} target="blank" rel="noopner">{websiteText}</a>
          </div>
        </div>
        <div style={{ alignSelf: 'flex-end' }}>
          <a href={twitterAccount} target="blank" rel="noopner">
            <TwitterLogo />
          </a>
        </div>
      </div>
      <div>
        <p style={{ marginTop: 15 }}>{description}</p>
        <div>
          <a href={`https://twitter.com/${twitter}`} target="blank" rel="noopner">{}</a>
        </div>
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {projects.map((project) => (
              <SmallBox>
                <a style={{ color: 'inherit' }} title={project.description} href={project.url}>{project.name}</a>
              </SmallBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
