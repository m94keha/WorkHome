import React from 'react' //6.9k (qzipped: 2.7k)

function Modalwindiws() {

    let modal = document.querySelector(".modal");
    function Btn() {modal.style.display = 'flex'};
    function closeBTn() {modal.style.display = 'none'};

    return (
        <div>
            <button onClick={Btn} className="buttonMod">Click me</button>
            <div className="modal">
                <div class="modal-wrapper">
                    <div className="modal-header">
                        <span onClick={closeBTn} className="closeBtn">&times;</span>
                        <h3>I am modal!</h3>
                    </div>
                    <div className="modal-body">
                        <p>Добрый день. Мой прект Модального окна.</p>
                    </div>
                    <div className="modal-footer">
                        <h3>Hi! I AM YOUR FOOTER!</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modalwindiws
