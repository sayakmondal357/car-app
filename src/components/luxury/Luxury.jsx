import React from 'react'
import styles from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={styles.luxury}>
      <div className={styles.heading}>
        <h1>Luxury Selection</h1>
        <div className={styles.text_bg}>
          <p>
            <span>Select from the top luxury vehicles to roll in style</span>
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
          <div className={styles.content}>
            <h3>Rolls Royce</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/12997736/pexels-photo-12997736.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
          <div className={styles.content}>
            <h3>Maserati</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1620157206955-5d8ebca0df95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
          <div className={styles.content}>
            <h3>Range Rover</h3>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
          <div className={styles.content}>
            <h3>Porshe</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Luxury
