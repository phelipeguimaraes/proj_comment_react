import { Link } from "react-router-dom"

import './Footer.css'

const Footer = () => {
  return (
    <div className="box-footer">
        <p>Criado por <Link to={"https://www.linkedin.com/in/phelipe-guimar%C3%A3es-8bb80a215/"} target="_blank">Phelipe Vieira Guimarães (LinkedIn)</Link></p>
        <p><Link to={"https://github.com/phelipeguimaraes"} target="_blank">GitHub</Link></p>
    </div>
  )
}

export default Footer