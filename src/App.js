import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import db from './firebase'
import { useEffect } from "react";
import { useState } from "react";


function App() {
  const [rooms, setRooms] = useState([])
  const [chats, setChats] = useState([])

  const getChats = () => {
    db.collection('chatMessages').onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
            imgUrl: doc.data().imgUrl,
            chatDate: doc.data().chatDate,
            chatText:doc.data().chatText,
          }
        })

      )
    })
  }

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name
          }
          // return doc.data()
        })
      )
      
    })
  }
  
  
  useEffect(() => {
    console.log('HELLO useEffect() - Get Channels')
    getChannels()
  }, [])
  
  useEffect(() => {
    console.log('HELLO useEffect() - Get Chats')
    getChats()
  }, [])

  console.log('XXXX ROOMS', rooms)
  console.log('XXXX CHATS', chats)


  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar 
              rooms={rooms}
            />
            <Switch>
              <Route path="/room">
                <Chat chats={chats} />
              </Route>

              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
