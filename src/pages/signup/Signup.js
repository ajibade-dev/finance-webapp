import styles from './Signup.module.css'
import { useSignup } from '../../hooks/useSignup'
import React, {useState} from 'react'


function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()


  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>SignUp</h2>
      <label>
        <span>Email:</span>
        <input
        type='text'
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        />
      </label>

      <label>
        <span>Password:</span>
        <input 
        type='password'
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        />
      </label>

      <label>
        <span>Display Name:</span>
        <input 
        type='text'
        value={displayName} 
        onChange={(e) => {setDisplayName(e.target.value)}}
        />
      </label>
      { !isPending &&<button className='btn'>Signup</button>}
      {error && <p>{error}</p>}
      {isPending && <button className='btn' disabled>Loading</button>}
      </form>
  )
}

export default Signup