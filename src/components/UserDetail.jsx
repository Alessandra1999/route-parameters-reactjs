import { useState } from 'react';
import axios from 'axios';

function UserDetail() {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [searched, setSearched] = useState(false);

    const handleInputChange = (event) => {
        setUserId(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${userId}`);
            setUser(response.data.data);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setError('Usuário não encontrado!');
            } else {
                setError('Erro: ' + error.message);
            }
        } finally {
            setSearched(true);
        } 
    };

    return (
        <div>
            <input type='text' placeholder='Digite o ID que deseja procurar' value={userId} onChange={handleInputChange} />

            <button onClick={handleSearch}>Pesquisar</button>

            {error && <p>Erro: {error}</p>}
            {!error && user && (
                <div>
                    <p>ID: {user.id}</p>
                    <p>Nome: {user.first_name} {user.last_name}</p>
                    <p>E-mail: {user.email}</p>
                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                </div>
            )}
            {searched && !user && !error && (
                <div>Usuário não encontrado!</div>
            )}
        </div>
    );
}

export default UserDetail