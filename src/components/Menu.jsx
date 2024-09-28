import { Link } from "react-router-dom";

export default function Menu(){

    return (
        <div>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/servicos">Servicos</Link></li>
            <li><Link to = "/produtos">Produtos</Link></li>
        </ul>
        </div>
    )
}