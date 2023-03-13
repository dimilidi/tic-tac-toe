import React, { useState } from 'react';
import { calculateWinner } from '../helpers/calculateWinner';
import Board from './Board'
import Sidebar from './Sidebar';


function Game() {


    // Hook States
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [turn, setTurn] = useState('X');
    const [step, setStep] = useState(0);
 
    //Calculate winner
    const winner = calculateWinner(history[step]);

    // Define squares
    const squares = history[history.length-1];
   
    //Handle Click
    function handleSquareClick(index){
        //Disable buttons when winner or occupied
        if (squares[index] !== null || winner) {
            return;
        }

        //Copy squares 
        const copySquares= [...squares]; 
        // Find current square value of the current squares array
        copySquares.splice(index, 1, turn); 
   
        setHistory([...history,[...copySquares]]); 
        setTurn(turn === "O" ? "X" : "O");
        setStep(history.length)
    }



    return (
        <div className='wrapper'>
            <Board squares= {squares}  onClick={handleSquareClick} />
            <Sidebar winner = {winner} history = {history} turn= {turn} setHistory = {setHistory} setTurn = {setTurn} setStep = {setStep} />
        </div>
    )
}

export default Game