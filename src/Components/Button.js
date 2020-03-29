import React, { useState } from "react"
import "./button.css"

export const Button = (props) => (
  <button className={props.className}>{props.title}</button>
)