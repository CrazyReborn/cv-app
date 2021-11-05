import React from "react";

class GeneralInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: 'Vladislav',
            secondName: 'Kuznetsov',
            title: 'Front End Developer',
            email: 'example@gmail.com',
            editing: false,
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEdit() {
        this.setState({
            editing: !this.state.editing,
        });
    }
    handleChange(e) {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            editing: !this.state.editing,
        });
    }
    render() {
        const { firstName, secondName, title, email, editing } = this.state;
        return (
            <div>
                {editing
                ? <form onSubmit={this.handleSubmit}>
                    <label for="firstName"></label>
                    <input onChange={this.handleChange} type="text" name="firstName" value={firstName}></input>
                    <label for="secondName"></label>
                    <input onChange={this.handleChange} type="text" name="secondtName" value={secondName}></input>
                    <label for="title"></label>
                    <input onChange={this.handleChange} type="text" name="title" value={title}></input>
                    <label for="email"></label>
                    <input onChange={this.handleChange} type="text" name="email" value={email}></input>
                    <input type="submit"></input>
                </form>
                : <div><h2>{firstName + ' ' + secondName}</h2>
                  <p>{title}</p>
                  <p>{email}</p>
                  <button onClick={this.handleEdit}>Edit</button>
                  </div>
                }
            </div>
        )
    }
}


export default GeneralInfo