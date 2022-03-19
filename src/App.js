import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'; 
import User from "./components/User";
import {userAction} from './Redux/actions/userActions';

function App() {
  const dispatch = useDispatch()
  const usersList = useSelector(state => state.usersList)
  const {loading,users,error}= usersList
  useEffect (()=>{
    dispatch(userAction())
  },[dispatch])
  return (
    <div className="App">
      <h1 style={{color:"blue"}}>Redux Thunk</h1>
      {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3>:
      <User users={users}/>}
    </div>
  );
}

export default App;
