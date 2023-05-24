import { Record, Tuple } from "@bloomberg/record-tuple-polyfill";
import { useState } from "react";

function App() {
  const [coorX, setcoorX] = useState(0);
  const [coorY, setcoorY] = useState(0);
  const [result, setResult] = useState("");

  var grid = new Map([
    [
      Record({
        x: 1,
        y: 0,
      }),
      "Ви вбили ворога!",
    ],
    [
      Record({
        x: 3,
        y: 5,
      }),
      "Ви влучили в стіну!",
    ],
    [
      Record({
        x: 2,
        y: 2,
      }),
      "Ви влучили в союзника!",
    ],
  ]);

  function Fire(xI, yI) {
    if (
      grid.get(
        Record({
          x: xI,
          y: yI,
        })
      )
    ) {
      setResult(
        grid.get(
          Record({
            x: xI,
            y: yI,
          })
        )
      );
    } else setResult("Промах!")
  }

  return (
    <div className="App">
      <p>Гра тир - вгадай координати x та y ворога та зроби постріл </p>
      <label>X:</label>
      <input
        defaultValue={0}
        onChange={(e) => setcoorX(parseInt(e.target.value))}
      ></input>
      <label>Y:</label>
      <input
        defaultValue={0}
        onChange={(e) => setcoorY(parseInt(e.target.value))}
      ></input>
      <button onClick={() => Fire(coorX, coorY)}>Постріл</button>
      <input disabled value={result}></input>
      <h1>Башманівський Максим</h1>
      <h2>Напрямок за яким планую розвиватись - full stack developer</h2>
      <h2>
        Персональна сертифікація, яку планую складати - AWS Certified Developer
      </h2>
      <p>
        -- Сертифікації AWS дуже цінні та популярні, покращу своє резюме і
        LinkedIn профіль
      </p>
      <p>
        -- Отримаю доступ до ексклюзивних переваг AWS Certified(цифровий значок
        і купон на знижку 50% на наступний екзамен)
      </p>
      <p>
        -- Після проходження, сподіваюсь, мої знання в цій області будуть
        структуровані
      </p>
      <p>
        -- Буду мати можливість працювати над проектами пов'язані з розробкою
        змарних рішень
      </p>
      <p>-- Попит на цю сертифікацію стрімко зростає</p>
      <p>
        -- Наявний вибір мови програмування для здачі екзамену(Java, Python або
        Node.js)
      </p>

      <header className="App-header"></header>
    </div>
  );
}

export default App;
