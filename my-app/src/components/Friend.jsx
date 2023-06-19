import React from 'react'



import Button from './Button'



const Friend = ({friend,onSelection,selectedFriend}) => {

  const isSelected = selectedFriend?.id === friend.id

  return (
    <div>

        <li className={isSelected ? "selected" : ""}>
           <img src={friend.image} alt={friend.name}/>

           <h3>{friend.name}</h3> 

           {friend.balance < 0 && (
           <p className='red'>You owe {friend.name} {Math.abs(friend.balance)}</p>
           )}

          {friend.balance > 0 && (
           <p className='green'>Owes you {friend.name} {Math.abs(friend.balance)}</p>
           )}

          {friend.balance === 0 && (
           <p>You and {friend.name} are even</p>
           )}

           <Button onClick={() => onSelection(friend)}>
           {isSelected ? "Close" : "Select"}
           </Button>
        </li>
    </div>
  )
}

export default Friend