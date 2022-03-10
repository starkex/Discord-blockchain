import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import ConversationList from '../components/ConversationList'



export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Sidebar/>
      {/*sidebar*/}
       <div className={styles.main}>
         <ConversationList/>
          hey lisa
         </div>
    </div>
  )
}
