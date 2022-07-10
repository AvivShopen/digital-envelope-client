import React from 'react'
import api from '../api'

type Props = {}

const ShowEvents = (props: Props) => {
  
  
  const fetchEvents =async()=>{
    const {data} = await  api.events().getEventsByUser(1);
  }

  return (
    <div>My events</div>
  )
}

export default ShowEvents