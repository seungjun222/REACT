import { combineReducers } from 'redux';
import score from "./modules/score";

export default combineReducers({
    
    // 서브 리듀서 ... (서비스가 작으면 굳이 필요없다)
    score
})