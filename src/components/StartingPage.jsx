import { useEffect, useState } from "react"
import styles from './StartingPage.module.scss'

const StartingPage = () => {
    const [users, setUsers] = useState("Xurshid, AbduRahmonjon, Sunbula, Dildora, Mehribon, Xumoyun Mamasoliyev, Humoyunmirzo Murodullayev, Tomaris, Gulirano, Nigina, Shaxnoza, Jaxongir, MuhammadYusuf");
    const [usersKept, setUsersKept] = useState('Xurshid, AbduRahmonjon, Sunbula, Dildora, Mehribon, Xumoyun Mamasoliyev, Humoyunmirzo Murodullayev, Tomaris, Gulirano, Nigina, Shaxnoza, Jaxongir, MuhammadYusuf'.split(", "));
    const [allUsers, setAllUsers] = useState('Xurshid, AbduRahmonjon, Sunbula, Dildora, Mehribon, Xumoyun Mamasoliyev, Humoyunmirzo Murodullayev, Tomaris, Gulirano, Nigina, Shaxnoza, Jaxongir, MuhammadYusuf'.split(", "));
    const [user, setUser] = useState('');
    const [list, setList] = useState([])
    const [usersEntered, setUsersEntered] = useState(false)
    // const submitForm = (e) => {
    //   e.preventDefault();
    //   alert(JSON.stringify(users))
    //   setAllUsers(users.split(", "))
    //   setUsers([])
    //   setUsersEntered(true)
    // }
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
        alert('Bir kishi ozi bilan ozi qoldi. Qayta generatsiya qiling!!!')
      }
    }
    // useEffect(() => {
    //   const groupConfirm = window.confirm('Are you a student of 114-20 group of TUIT?');
    //   if(groupConfirm){
    //     setGroup(true)
    //     setUsers('Xurshid, AbduRahmonjon, Sunbula, Dildora, Mehribon, Xumoyun Mamasoliyev, Humoyunmirzo Murodullayev, Tomaris, Gulirano, Nigina, Shaxnoza, Jaxongir, MuhammadYusuf');
    //     setAllUsers('Xurshid, AbduRahmonjon, Sunbula, Dildora, Mehribon, Xumoyun Mamasoliyev, Humoyunmirzo Murodullayev, Tomaris, Gulirano, Nigina, Shaxnoza, Jaxongir, MuhammadYusuf'.split(', '))
    //     setUsersEntered(true)
    //     console.log(allUsers)
    //   } else {
    //     setGroup(false)
    //   }
    // }, [allUsers])
  return (
    <div className={styles.starting__page}>
      {/* <div className={styles.list}>{list.map(el => <p key={el}><span>{el[0]}</span> ={">"} <span>{el[1]}</span></p>)}</div> */}
        {/* {!usersEntered || !group ? <form action="" onSubmit={(e) => submitForm(e)}>
            <textarea value={users} onChange={(e) => {
              setUsers(e.target.value)
              setUsersKept(e.target.value.split(", "))
              }} placeholder="Enter participants with ," name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">Start generating</button>
        </form> : null} */}
        <form action="" onSubmit={(e) => generateCouple(e)}>
<select onChange={e => setUser(e.target.value)}>
  <option value="Xurshid">Xurshid</option>
  <option value="AbduRahmonjon">AbduRahmonjon</option>
  <option value="Sunbula">Sunbula</option>
  <option value="Dildora">Dildora</option>
  <option value="Xumoyun Mamasoliyev">Xumoyun Mamasoliyev</option>
  <option value="Humoyunmirzo Murodullayev">Humoyunmirzo Murodullayev</option>
  <option value="Tomaris">Tomaris</option>
  <option value="Gulirano">Gulirano</option>
  <option value="Nigina">Nigina</option>
  <option value="Mehribon">Mehribon</option>
  <option value="Shaxnoza">Shaxnoza</option>
  <option value="Jaxongir">Jaxongir</option>
  <option value="MuhammadYusuf">MuhammadYusuf</option>
</select>
{/* {!group ? <input type="text" onChange={e => {
  setUser(e.target.value)
  console.log(e.target.value)
  }} name="" id="" /> : null} */}
<button type="submit">Start generating</button>
</form>
    </div>
  )
}

export default StartingPage
// Xurshid, AbduRahmonjon, Sunbula, Dildora, Mehribon, Xumoyun Mamasoliyev, Humoyunmirzo Murodullayev, Tomaris, Gulirano, Nigina, Shaxnoza, Jaxongir, MuhammadYusuf
// Davlat, Artyom, Xusniddin, Alixon, Gozal, Ogiljon, Shaxrizoda, Ayshe, Vazira, Hadicha, Iroda, Sevinch, Muxlisa, Farangiz