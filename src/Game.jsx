import { useState } from "react";

let data = ["","","","","","","","",""];

const Game = () => {
    let [count, setCount] = useState(0);

    let toggle = (w,num) =>{

    }
    
    return (
        <div className="max-w-screen-2xl mx-auto p-3 bg-[#0f1B21] h-screen text-white text-center">
            <h1 className="text-center text-5xl text-rose-800 font-bold">Tic Tac Toe</h1>
            <div className="flex h-[550px] w-[550px] m-auto ">
                <div className="row1">
                    <div className="flex h-44 w-44 bg-[#1f3540] cursor-pointer border-4 border-solid border-[#0f1B21] rounded-xl"></div>
                    <div className="flex h-44 w-44 bg-[#1f3540] cursor-pointer border-4 border-solid border-[#0f1B21] rounded-xl"></div>
                    <div className="flex h-44 w-44 bg-[#1f3540] cursor-pointer border-4 border-solid border-[#0f1B21] rounded-xl"></div>
                </div>
                <div className="row2">
                    <div className="flex h-44 w-44 bg-[#1f3540] cursor-pointer border-4 border-solid border-[#0f1B21] rounded-xl"></div>
                    <div className="flex h-44 w-44 bg-[#1f3540] cursor-pointer border-4 border-solid border-[#0f1B21] rounded-xl"></div>
                    <div className="flex h-44 w-44 bg-[#1f3540] cursor-pointer border-4 border-solid border-[#0f1B21] rounded-xl"></div>
                </div>
                <div className="row3">
                    <div className="flex h-44 w-44 bg-[#1f3540] cursor-pointer border-4 border-solid border-[#0f1B21] rounded-xl"></div>
                    <div className="flex h-44 w-44 bg-[#1f3540] cursor-pointer border-4 border-solid border-[#0f1B21] rounded-xl"></div>
                    <div className="flex h-44 w-44 bg-[#1f3540] cursor-pointer border-4 border-solid border-[#0f1B21] rounded-xl"></div>
                </div>
            </div>
            <button className="btn rounded-[50px] bg-[#1f3540] border-none outline-none cursor-pointer text-2xl px-5 py-3 text-cyan-500 font-semibold">Reset Game</button>
        </div>
    )
}
export default Game;