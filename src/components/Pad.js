import { useEffect } from "react";
import { connect } from "react-redux";

import { keyPressed } from "../store/actions";
import keys from "../store/reducers/keysArray";

const mapDispatchToProps = dispatch => ({
    keyPressed: e => dispatch(keyPressed(e))
});

const Pad = props => {

    function handleKey(key){
        props.keyPressed(key);
    }

    let Buttons = keys.map(key => <li key={key.keyCode}>
        <button className={`key`}
            id={`button-${key.keyCode}`}
            onClick={() => handleKey(key)}>{key.keyName}</button>
        </li>);

    useEffect(() => {
        keys.map(key => {
            let keyButton = document.getElementById(`button-${key.keyCode}`);
            keyButton.ontransitionend = () => { keyButton.classList.remove("button-hit"); }
        });
    });
    
    return (
        <div>
            <ul className="keyboard">{Buttons}</ul>     
        </div>
    );
}
export default connect(null, mapDispatchToProps)(Pad);