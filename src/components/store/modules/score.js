// 퀴즈 풀면 정답 --> 점수 획득
// 오답 --> 점수 획득 x

// 상태 : 사용자의 현재 점수 (score)
// 액션 : 정답인지 아닌지 판별, 정답 --> 점수 ++;

// 액션 타입(문자열)
const NEXT_PAGE = "score/NEXTT_PAGE";
const RESET = "score/RESET";
const MBTI = 'score/MBTI';

// 액션 생성 함수
export function next(){
    return{
        type: NEXT_PAGE
    }
}

export function reset(){
    return{
        type: RESET
    }
}

export function mbti({num}){
    return{
        type: MBTI,
        payload: {num}
    }
}

// 초기 상태
const initialState = {
    page : 0,  // 0 : 인트로 페이지, 1~quizs.length : 퀴즈 페이지, n+1 : 마지막 페이지
    mbti_num : '',
    // 퀴즈 목록
    quizs : [
        {
            q: "당신이 평소 성격은?",
            // img: "/images/us.jpg",
            a: [
                {
                text: "내성적",
                num: '1'
                },
                {
                text: "외향적",
                num: '2'
                },
                {
                text: "반반",
                num: '3'
                },        
        ]
        },
        {
            q: "당신이 평소 성격은?",
            // img: "/images/us.jpg",
            a: [
                {
                text: "착한 편이다",
                num: '1'
                },
                {
                text: "까칠한 편이다",
                num: '2'
                },
                {
                text: "반반",
                num: '3'
                },        
        ]
        },
        {
            q: "당신의 평소 성격은?",
            // img: "/images/us.jpg",
            a: [
                {
                text: "본인에게 자유로운 편이다",
                num: '1'
                },
                {
                text: "본인에게 엄격한 편이다",
                num: '2'
                },
                {
                text: "반반",
                num: '3'
                },        
        ]
        }]
}

// 리듀서
export default function score(state = initialState, action){
    switch(action.type){
        case NEXT_PAGE:
            return{
                ...state,
                page: state.page + 1,
            }
        case RESET:
            return{
                ...state,
                page: 0,
                mbti_num: ''
            }
        case MBTI:
            
            return{
                ...state,
                mbti_num : state.mbti_num + action.payload.num,
            }

        default:
            return state;
    }
}