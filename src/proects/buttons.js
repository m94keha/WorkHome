import React from 'react' //6.9k (qzipped: 2.7k)

export default function Buttons() {
  
    const [count, setCount] = React.useState(0); // Хук useState - для сохранения данных в React
    
    const onClickPlus = () => {
        setCount(count + 1);
    }
    const onClickMinus = () => {
        setCount(count - 1);
    }
    return (
        <div className="buttons">
            <div>
                <h2>Счетчик:</h2>
                <h1>{count}</h1>
                <div>
                    <button onClick={onClickMinus} className="minus">- Минус</button>
                    <button onClick={onClickPlus} className="plus">Плюс +</button>
                </div>
            </div>
        </div>

    )
}