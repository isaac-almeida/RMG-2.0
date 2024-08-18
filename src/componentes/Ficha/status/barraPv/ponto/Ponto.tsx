import "./ponto.scss"
import { useState } from "react"
import { motion } from "framer-motion"

const pedacinhos = {
    0: "saudável",
    1: "contundente",
    2: "letal",
    3: "agravado"
}

const Ponto = ({tipo}) => {
  return (
    <div className={pedacinhos[tipo]}>
    </div>
  )
}

export default Ponto