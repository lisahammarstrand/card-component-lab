import React, { useState } from 'react'
import { Card } from "./Components/Card"
import { LightPart } from "./Components/Card"
import { Button } from "./Components/Button"

export const App = () => {
  return (
    <main>
      <Card heading="Lemon" emoji="🍋" className="lemon-card-top" />
      <LightPart subtitle="This is a really tasty fruit" className="lemon-light-part" />
      <Button title="Order now" className="lemon-button" />
    </main>
  )
}


