
import './App.css';

export default function Write(){
    return(
        <div className="write">
            <form>
                <div className="writeForm">
                    <input type="text" placeholder="Title" className="GiveInput"/>
                </div>
                <div className="writeFormGroup">
                <textarea className="writeInput" placeholder="Tell your story..."type="text" /> 
                </div>
                <button className="Submit" type="submit">
          Save
        </button>
            </form>
        </div>
    )
}