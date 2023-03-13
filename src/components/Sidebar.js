import React from 'react';

function Sidebar({winner, turn, history, setHistory, setTurn, setStep}) {

    // List with moves
    const historyList = history.map((el, position) => {
        let newHistory = history.slice(0, position+1 ); 
        return   <li>
                    <button 
                        onClick={()=>{
                            setTurn(position % 2 === 0 ? 'X' : 'O');
                            setStep(position);
                            setHistory(newHistory);
                        }}
                    >
                        { position ? `Go to #${position}`  : `Go to start `}
                    </button>
                </li>
    });


    // Winner/ next player info
    let info;

    if (winner) {
        info = `The winner is ${winner}`;
    } else {
        info = `Next Player is ${turn} `;
    }



    return (
        <div className="sidebar">
            <div className="gameInfo">{info}</div>
            <ul className="history-dropdown"> Go to move {historyList}</ul>
        </div>
    );

};

 

  

 


  
  
export default Sidebar