import { useState } from "react"
import styles from './StartingPage.module.scss'

const StartingPage = () => {
    const [users, setUsers] = useState("");
    const [usersKept, setUsersKept] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [user, setUser] = useState('');
    const [list, setList] = useState([])
    const [usersEntered, setUsersEntered] = useState(false)
    const submitForm = (e) => {
      e.preventDefault();
      alert(JSON.stringify(users))
      setAllUsers(users.split(", "))
      setUsers([])
      setUsersEntered(true)
    }
    const generateCouple = (e) => {
      e.preventDefault();
      const randomNumber = Math.floor(Math.random() * (usersKept.length));
      const couple = allUsers[randomNumber];
      try {
        if(!usersKept.find(couple => couple === user)){
          alert("This user is not registered")
        } else if(list.find(el => el[0] === user)) {
          alert("This participant selected already")
        } else {
          if(randomNumber > allUsers.length-1 || user === couple){
            generateCouple(e)
          } else {
            if(couple === undefined){
              alert("Participants are over. Happy New Year!")
            }
            console.log(allUsers)
          setAllUsers(allUsers.filter(user => user !== couple))
          setList([...list, [user, couple]])
          alert(user + ', siz ' + couple + ' ga sovga berasiz')
          }
          
        }
      } catch (error) {
        alert(error)
      }
    }
  return (
    <div className={styles.starting__page}>
      <div className={styles.list}>{list.map(el => <p key={el}><span>{el[0]}</span> ={">"} <span>{el[1]}</span></p>)}</div>
        {!usersEntered ? <form action="" onSubmit={(e) => submitForm(e)}>
            <textarea value={users} onChange={(e) => {
              setUsers(e.target.value)
              setUsersKept(e.target.value.split(", "))
              }} placeholder="Enter participants with ," name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">Start generating</button>
        </form> : null}
        {usersEntered ? <form action="" onSubmit={(e) => generateCouple(e)}>

<input type="text" onChange={e => setUser(e.target.value)} name="" id="" />
<button type="submit">Start generating</button>
</form> : null}
    </div>
  )
}

export default StartingPage
// Xurshid, AbduRahmonjon, Sunbula, Dildora, Mehribon, Xumoyun Mamasoliyev, Humoyunmirzo Murodullayev, Tomaris, Gulirano, Nigina, Shaxnoza, Mehribon, Jaxongir, MuhammadYusuf