import { useState } from 'react'
import handShake from './assets/images/HandShake.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    <h2 class='about-title'>О компании</h2>
    <p>
      <div><handShake style='width: 100px; height: 100px'/></div>

      <div class='about-paragraph'>
      Почти 3 года в Faject мы занимаемся разработкой и дизайном для компаний по всему миру. Мы помогаем компаниям создавать сервисы и сайты для людей. Делаем бизнес комфортным и удобным в общении с клиентами так, чтобы это было выгодно. 
      </div>
      
      </p>   
      </div>

    </>
  )
}

export default App
