import React, { useState } from 'react';



import './App.css';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
import {initialFriends} from './data';


function App() {

  const [showAddFriend, setShowAddFriend] = useState(true)
  const [friends, setFriends] = useState([initialFriends])
  const [selectedFriend, setSelectedFriend] = useState(null);


  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show)
  }

  const handleAddFriend = (friend) => {
   
    setFriends((friends) => [...friends, friend])
    
  }

  const handleSelection = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className='app'>

      <div className='sidebar'>
      <FriendsList friends={friends} selectedFriend={selectedFriend}  onSelection={handleSelection}/>
      {showAddFriend && <FormAddFriend  onAddFriend={handleAddFriend}/>}
      <Button onClick={handleShowAddFriend}>
      {showAddFriend ? "Close" : "Add friend"}
      </Button>
      </div>

      {selectedFriend && <FormSplitBill 
                          onSplitBill={handleSplitBill} 
                          selectedFriend={selectedFriend}
                          key={selectedFriend.id}/> }
    </div>
  );
}

export default App;
