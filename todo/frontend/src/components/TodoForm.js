import React from "react";


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                user: [],
                project: [],
                text: '',
                is_active: true,
        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )

    }


    handleSubmit(event) {
        this.props.createTodo(this.state.user, this.state.project, this.state.text, this.state.is_active)

        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="login">user     </label>
                    <input type="text" className="form-control" name="user" value={this.state.user}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="login">project     </label>
                    <input type="text" className="form-control" name="project" value={this.state.project}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="login">text     </label>
                    <input type="text" className="form-control" name="text" value={this.state.text}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div>
                    <label htmlFor="login">is_active     </label>
                    <input type="checkbox" className="form-control" name="is_active" value={this.state.is_active}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <input type="submit" value="Save"/>
            </form>
        )
    }
}

export default TodoForm

