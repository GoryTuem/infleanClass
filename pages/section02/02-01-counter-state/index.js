import { useState } from "react";

export default function NewableFunction(){
    const [count, setCount] = useState(0)

    function up(){
        setCount(count+1)
    }

    function down(){
        setCount(count-1)

    }
    return(
        <>
            <div>{count}</div>
            <button onClick={up}>카운트 올리기</button>
            <button onClick={down}>카운트 내리기</button>
        </>
    )
}