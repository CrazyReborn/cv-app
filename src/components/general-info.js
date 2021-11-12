import React, {useState} from "react";
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GeneralInfo (props) {
    
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [title, setTitle] = useState('Writer');
    const [email, setEmail] = useState('example@gmail.com');
    const [editing, setEditing] = useState(false)

    function handleEditRequest() {
        setEditing(!editing);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEditing(!editing);
    }
        return (
            <div className="geranalInfo">
                {editing 
                ? <form className="geranalInfo" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                    <label htmlFor="title">Job Title</label>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="submit"></input>
                </form>
            : <div>
                <h2>{firstName + ' ' + lastName}</h2>
                <p>{title}</p>
                <p>{email}</p>
                <button onClick={handleEditRequest}><FontAwesomeIcon icon={faPen} /> Edit</button>
                </div>}
            </div>
            
        )
}

export default GeneralInfo