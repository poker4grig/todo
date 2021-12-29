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

    handleUserChange(event) {
        if (!event.target.selectedOptions) {

            this.setState({
                'user': []
            })
            return;
        }
        let users = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            users.push(event.target.selectedOptions.item(i).value)
        }
        this.setState({
            'user': users
        })
    }

    handleProjectChange(event) {
        if (!event.target.selectedOptions) {

            this.setState({
                'project': []
            })
            return;
        }
        let projects = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            projects.push(event.target.selectedOptions.item(i).value)
        }
        this.setState({
            'project': projects
        })
    }

    handleSubmit(event) {
        this.props.createTodo(this.state.user, this.state.project, this.state.text, this.state.is_active)

        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div style={{margin: 10}}>
                    <label htmlFor="login">user
                    <select name="user" multiple onChange={(event) => this.handleUserChange(event)}>
                        {this.props.users.map((item) => <option value={item.id}>{item.firstName}</option>)}
                    </select>
                    </label>
                </div>
                <div style={{margin: 10}}>
                    <label htmlFor="login">project      </label>
                    <select name="project" multiple onChange={(event) => this.handleProjectChange(event)}>
                        {this.props.projects.map((item) => <option value={item.id}>{item.name}</option>)}
                    </select>
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

