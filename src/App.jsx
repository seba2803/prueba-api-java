import { useEffect, useState } from 'react';
import fetchToServer from './fetchToServer';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchToServer().then((data) => setData([...data]));
  }, []);

  return (
    <div className='card'>
      <table>
        <caption>Usuarios</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>D.N.I</th>
            <th>Email</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Contraseña</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            return (
              <tr>
                <td>{val.id}</td>
                <td>{val.dni}</td>
                <td>{val.email}</td>
                <td>{val.nombre}</td>
                <td>{val.tel}</td>
                <td>{val.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
