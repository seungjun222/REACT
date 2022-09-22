import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BlueButton } from "./BlueButton";
import { Progress } from "./Progress";
import { next, mbti } from "../store/modules/score";

export function Quiz(){
    const dispatch = useDispatch();
    const quiz = useSelector(state => state.score.quizs);
    const page = useSelector(state => state.score.page);

    return(
        <>
          <h1>{quiz[page - 1].q}</h1>
{/* 
          {quiz[page - 1].img && <img src={quiz[page-1].img}></img>} */}

          {quiz[page - 1].a.map((item)=>{
            return <BlueButton 
            text={item.text} 
            key={item.text}
            clickEvent={()=>{
                // mbti
                dispatch(mbti({num : item.num}));
                // 다음 페이지로 이동
                dispatch(next());
            }}
            />
          })}
          
          <Progress page={page} maxPage={quiz.length}/>
        </>
    )
};