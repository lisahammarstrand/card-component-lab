import React from "react"
import "./card.css"

export const Card = (props) => {
  const { heading, emoji, subtitle, className } = props

  return (
    <section className="card-container">
      <header className="top-section">
        <div className={className}>
          <h1 className="heading">{heading}</h1>
          <span role="img" aria-label="Emoji" className="emoji">{emoji}</span>
        </div>
      </header>
    </section>
  )
}

export const LightPart = (props) => {
  const { subtitle, className } = props
  return (
    <div className="light-part">
      <div className={className}>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  )
}
