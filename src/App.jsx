import { useState } from 'react';
import handShake from './assets/images/HandShake.svg';
import questions from './assets/images/Questions.svg';
import brain from './assets/images/Brain.svg';
import peoplesActivity from './assets/images/PeoplesActivity.png';
import instagram from './assets/images/Instagram_logo_2016 1.svg';
import whatsapp from './assets/images/WhatsApp_logo-color-vertical 1.png'
import telegram from './assets/images/Telegram_logo 1.svg'

import './App.css';

function App() {
  //  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <h2 className='about-title'>О компании</h2>
        </div>


        <div className="about-paragraph">
          <div>
            Почти 3 года в Faject мы занимаемся разработкой и дизайном для компаний по всему миру. Мы помогаем компаниям создавать сервисы и сайты для людей. Делаем бизнес комфортным и удобным в общении с клиентами так, чтобы это было выгодно.
          </div>
          <div style={{ display: "inline-block" }}>
            <img src={handShake} alt="Hand Shake" />
          </div>
        </div>
        <div className="about-paragraph">
          <div>
            <img src={questions} alt="questions" />
          </div>

          <div className="text-right"> В своей работе мы активно работаем с заказчиком, чтобы обеспечить наилучший результат и совместное творчество
          </div>

        </div>
        <div className="about-paragraph">
          <div>Для оптимизации всех процессов и экономии средств клиента на начальных этапах разработки мы используем неройнные сети. Так, мы внесколько раз ускоряем подбор стиля иллюстраций, чтобы заказчик мог выбрать, что ему больше по душе.
          </div>
          <div>
            <img src={brain} alt="brain" />
          </div>
        </div>

        <div className="about-paragraph">
          <div>
            <img src={peoplesActivity} alt="Peoples activity" />
          </div>
          <div className="text-right">
            На этапе разработки технического задания мы изучаем потребности и цели вашей компании. Мы предлагаем наилучшие решения, экономя средства заказчика и избавляясь от лишних функций. Наша главная задача - предоставить удобный функционал и эффективный инструмент маркетинга для вашего бизнеса.
          </div>
        </div>
        <div className='about-counters-section'>
          <div className='about-counter-box'>
            <div className='about-counter'>+150</div>
            <div className='about-counter-subtitle'>Проектов</div>
          </div>
          <div className='about-counter-box'>
            <div className='about-counter'>&#9002;&#8288;1000&nbsp;000</div>
            <div className='about-counter-subtitle'>Проектов</div>
          </div>
          <div className='about-counter-box'>
            <div className='about-counter'>+17</div>
            <div className='about-counter-subtitle'>Профессионалов в международной команде</div>
          </div>
        </div>
        <div className='about-footer'>
          <div>
            <div>Условия & Положения</div>
            <div>Политика конфиденциальности</div>
            <div>©2018—2023 Faject</div>
          </div>
          <div>
            <div>мы здесь</div>
            <div style={{ display: "flex", gap: "10px" }}>
              <img src={instagram} alt="instagram logo" />
              <img src={telegram} alt="telegram logo" />
              <img src={whatsapp} alt="whatsapp logo" />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
