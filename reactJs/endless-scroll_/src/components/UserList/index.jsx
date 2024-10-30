import { useContext } from "react";
import { Container } from "./styles";
import { UserContext } from "../../context/UserContext";

const UserList = () => {
  const { users, loading, getUsers, error } = useContext(UserContext);

  return (
    <Container>
      {loading ? (
        <h2>Carregando...</h2>
      ) : (
        <div>
          <button onClick={getUsers} disabled={loading}>
            {loading ? "Buscando..." : "Buscar Novos Usuários"}
          </button>
          {error && <p className="error">{error}</p>}
          <ul>
            {users.map((user) => (
              <li key={user.login.uuid}>
                <img
                  src={user.picture.thumbnail}
                  alt={`${user.name.first} ${user.name.last}`}
                />
                <p>
                  {user.name.first} {user.name.last}
                </p>
                <p>{user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default UserList;
