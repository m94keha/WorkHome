
import './App.css';
import Buttons from './proects/buttons';
import Modalwindiws from './proects/modalindows';
import Start from "./proects/oprosStart";
import {Question} from "./proects/oprosQuestion";
import Result from "./proects/oprosResult";
import store from './proects/oprosStore';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  let [answer, setAnswer] = useState(a = 0);
  let [flag, setFlag] = useState(a = 0);
  let [result, setresult] = useState(a = 0);

  let questionsArray = store.questions.map((elem) =>
    <Question
      questionNumber={elem.questionNumber}
      question={elem.question}
      var1={elem.var1}
      var2={elem.var2}
      var3={elem.var3}
      value1={elem.value1}
      value2={elem.value2}
      value3={elem.value3}
      path={elem.path}
      next={elem.next}
    />
  )

  return (
    <div className="App">
      Счетчик
      <Buttons></Buttons>
      <p></p>
      <hr></hr>
      Модальное окно
      <Modalwindiws></Modalwindiws>
      <script src='modalindows'></script>
      <p></p>
      <hr></hr>
      Опросник
      <div className='Opros'>
        <BrowserRouter>
          <div className='container'>
            <h1 className='test-title'>CSS TEST</h1>
            <Route exact path='/'><Start /></Route>
            {questionsArray}
            <Route exact path='/Result'>  <Result /></Route>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
