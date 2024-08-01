import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <li><Link to="/users">Procurar Usuários</Link></li>
        </div>
    )
}

export default Navigation