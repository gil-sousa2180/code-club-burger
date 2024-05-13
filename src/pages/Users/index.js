import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import axios from 'axios';

import avatar from '../../assets/avatar.svg';
import Seta from '../../assets/seta.svg';
import Lixeira from '../../assets/lixeira.svg';

import H1 from '../../components/title';
import ContainerItems from '../../components/containerItens';
import Button from '../../components/button';

import {
  Container,
  Image,
  User,
} from './styles';

function Users() {
  //const users = [];
  const [users, setUsers] = useState([]);
  const history = useHistory()

  //const [ name, setName ] = useState();
  // const [ age, setAge ] = useState(); 
  useEffect(() => {
    async function fetchUser() {
      const { data: newUsers } = await axios.get("http://localhost:3002/users",);
      setUsers(newUsers);
    }

    fetchUser()
  }, []);

  function useGobackPages() {

    history.push('/')
  }


  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3002/users/${userId}`)
    const newUser = users.filter(user => user.id !== userId)

    setUsers(newUser);

  }
  /* function changeInputName(event) {
     setName(event.target.value)
   }
   function changeInputAge(event) {
     setAge(event.target.value)
 }*/
  return (
    <Container>
      <Image src={avatar} alt='logo-img' />
      <ContainerItems isBlur={true}>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Lixeira} alt='logo-lixeira' />
              </button>
            </User>
          ))}
        </ul>
        <Button isBack={true} onClick={useGobackPages}>
          <img src={Seta} alt='logo-seta' /> Voltar
        </Button>

      </ContainerItems>
    </Container>
  )

}


export default Users;
