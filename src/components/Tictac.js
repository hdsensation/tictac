import React, {useState} from 'react'
import './Tictac.css'

function Tictac() {

    const [turn, setturn] = useState('x');
    const [cells, setcells] = useState(Array(9).fill(''));
    const [winner, setwinner] = useState()

    const WinnerCheck=(square)=>{
        let combox = {
        arr1:[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
        ],
      arr2:[
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            ],

       arr3:[
            [0, 4, 8],
            [2, 4, 6],
        ],
    }
    
    

    for(let combos in combox){
        combox[combos].forEach((pattern)=>{
            if(
                square[pattern[0]] === '' ||
                square[pattern[1]] === '' ||
                square[pattern[2]] === '' 
            ){}
            else if(square[pattern[0]]===square[pattern[1]] && square[pattern[1]]===square[pattern[2]]){
                setwinner(square[pattern[0]])
            }
        });
    }
    }

    const handleClick=(num)=>{
        if(cells[num] !==''){
            alert('Dost already clicked')
            return;
        }
        let square=[...cells];

        if(turn === 'x'){
            square[num]='x'
            setturn('o')
        }
        else{
            square[num]='o'
            setturn('x')
        }

        WinnerCheck(square);
        setcells(square);
        console.log(square);
    }
    const Cell =( {num} )=>{

    return <td onClick={()=> handleClick(num)}>{cells[num]}</td> 

    }
    return (
        <div className='container'>
            <table>
            <h3>Turn :{turn}</h3>
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
                <h2>Winner is :{winner}</h2>
            </table>
        </div>
    )

}

export default Tictac
