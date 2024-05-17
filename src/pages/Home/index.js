import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import People from '../../assets/people.svg';
import Seta from '../../assets/seta.svg';

import H1 from '../../components/title';
import ContainerItems from '../../components/containerItens';
import  Button from '../../components/button';

import {
  Container,
  Image,
  LabelInput,
  Input,
} from './styles';

function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef();
  const inputAge = useRef();
  async function addNewUsers() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    }); 
    setUsers([...users, newUser])
    history.push('/usuarios')
  }
  return (
    <Container>
      <Image src={People} alt='logo-img' />
      <ContainerItems>
        <H1>Olá</H1>

        <LabelInput>Nome</LabelInput>
        <Input ref={inputName} placeholder='Nome' />
        <LabelInput>Idade</LabelInput>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUsers}>
          Cadastrar <img src={Seta} alt='logo-seta' />
        </Button>
      </ContainerItems>
    </Container>
  )
}
export default App;

