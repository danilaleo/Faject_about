// import { useState } from 'react';
import handShake from './assets/images/HandShake.svg';
import questions from './assets/images/Questions.svg';
import brain from './assets/images/Brain.svg';
import peoplesActivity from './assets/images/PeoplesActivity.png';

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
          <div style={{ display: "inline-block" }}>
            <img src={handShake} alt="Hand Shake" />
          </div>
          <div>
            Почти 3 года в Faject мы занимаемся разработкой и дизайном для компаний по всему миру. Мы помогаем компаниям создавать сервисы и сайты для людей. Делаем бизнес комфортным и удобным в общении с клиентами так, чтобы это было выгодно.
          </div>
        </div>
        <div className="about-paragraph">
          <div className="text-right"> своей работе мы активно работаем с заказчиком, чтобы обеспечить наилучший результат и совместное творчество</div>
          <div>
            <img src={questions} alt="questions" />
          </div>
        </div>
        <div className="about-paragraph">
          <div>
            <img src={brain} alt="brain" />
          </div>
          <div>Для оптимизации всех процессов и экономии средств клиента на начальных этапах разработки мы используем неройнные сети. Так, мы внесколько раз ускоряем подбор стиля иллюстраций, чтобы заказчик мог выбрать, что ему больше по душе. </div>
        </div>
        <div className="about-paragraph">
          <div className="text-right">
            На этапе разработки технического задания мы изучаем потребности и цели вашей компании. Мы предлагаем наилучшие решения, экономя средства заказчика и избавляясь от лишних функций. Наша главная задача - предоставить удобный функционал и эффективный инструмент маркетинга для вашего бизнеса.
          </div>
          <div>
            <img src={peoplesActivity} alt="Peoples activity" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
