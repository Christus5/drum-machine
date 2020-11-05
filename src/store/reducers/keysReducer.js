import { KEY_PRESSED } from "../actions";
import initialState from "./keysArray";

const keysReducer = (state = initialState, action) => {
    switch(action.type){
        case KEY_PRESSED:
            let audio = state[state.findIndex(val => val.keyCode === action.key.keyCode)];
            console.log(audio);
            try{
                document.getElementById(`button-${action.key.keyCode}`).classList.add("button-hit");
                audio.sound.currentTime = 0;
                audio.sound.play();
            }
            catch (error){
                console.log(error);
            }

            return state;
        default:
            return state;
    }
} 

export default keysReducer;