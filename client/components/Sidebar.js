import React from 'react'
import styles from '../styles/Sidebar.module.css'
import { useEffect,useState } from 'react'
import {useRouter} from 'next/router'
import RoomAvatar from './RoomAvatar'

import avatar1 from '../assets/sup.png'
import avatar2 from '../assets/sup.png'
import avatar3 from '../assets/sup.png'
import avatar4 from '../assets/sup.png'
import avatar5 from '../assets/sup.png'

const dummyChannels = [
  {
    id:1,
    name:'general',
    avatar:avatar1,
  },
  {
    id:2,
    name:'web3',
    avatar:avatar2,
  },
  {
    id:3,
    name:'metaboi',
    avatar:avatar3,
  },
  {
    id:4,
    name:'bhapki',
    avatar:avatar4,
  },
  {
    id:5,
    name:'csgo',
    avatar:avatar5,
  },
]

const Sidebar = () => {
  const router = useRouter()
  const [channels, setChannels] = useState(dummyChannels)
  return (
    <div className={styles.wrapper}>
      {channels.map((channel,index)=>(
        <RoomAvatar 
        key={index}
        id={channel.roomid}
        avatar={channel.avatar}
        name={channel.roomName}
        />
      ))}

    </div>
  )
}

export default Sidebar