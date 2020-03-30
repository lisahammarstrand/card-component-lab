import React, { useState } from 'react'
import { Card } from "./Components/Card"

import "./app.css"

export const App = () => {
  return (
    <main>
      <Card
        heading="Lemon"
        headingColor="#166F39"
        emoji="🍋"
        primary="#8CFFBA"
        secondary=" #CFFFE2"
        subtitle="This is a really tasty fruit"
        buttonColor=" #FCED84"
        buttonText="ORDER NOW"
        buttonTextColor="#000000" />
      <Card
        heading="Rocket"
        headingColor="#0B0C11"
        emoji="🚀"
        primary="#A6CFE2"
        secondary="#C2DCE9"
        subtitle="Join us into the outer space!"
        buttonColor="#0B0C11"
        buttonText="BOOK SEAT"
        buttonTextColor="#FFD600" />
      <Card
        heading="Doggy"
        headingColor="#502F7E"
        emoji="🐶"
        primary="#EEB200"
        secondary="#FFE086"
        subtitle="Adopt this cute puppy"
        buttonColor="#FFFFFF"
        buttonText="ADOPT ME"
        buttonTextColor="#502F7E" />
    </main>
  )
}

