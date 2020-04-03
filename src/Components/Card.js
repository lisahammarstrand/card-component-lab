import React, { useState } from "react"
import "./card.css"

// Passing and destructuring props
export const Card = ({
  heading,
  headingColor,
  emoji,
  primary,
  secondary,
  subtitle,
  subtitleColor,
  buttonColor,
  buttonText,
  buttonTextColor
}) => {
  // State takes care of which version of the card to render
  const [clicked, setClicked] = useState(false)

  // If the card is clicked render this
  if (clicked) {
    // Note className "card clicked-card" to tie the cards together
    return (
      <article className="card clicked-card">
        <section className="top-section" style={{ background: primary }}>
          <h1 style={{ color: headingColor }}>{heading}</h1>
        </section>
        <section className="light-part" style={{ background: secondary }}>
          <span role="img" aria-label="Emoji" className="emoji">{emoji}</span>
        </section>
      </article>
    )

  } else {
    // If card is not clicked render this
    return (
      <article className="card">
        <section className="top-section" style={{ background: primary }}>
          <h1 style={{ color: headingColor }}>{heading}</h1>
          <span role="img" aria-label="Emoji" className="emoji">
            {emoji}
          </span>
        </section>
        <section className="light-part" style={{ background: secondary }}>
          <h2 style={{ color: subtitleColor }}>{subtitle}</h2>
          <button
            type="button"
            style={{ background: buttonColor, color: buttonTextColor }}
            onClick={() => setClicked(!clicked)}>
            {buttonText}
          </button>
        </section>
      </article>
    )
  }
}

