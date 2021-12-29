import React from "react";


class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                user: [],
                repo: '',
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

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.user, this.state.repo)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="login">name     </label>
                    <input type="text" className="form-control" name="name" value={this.state.name}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div style={{margin: 10}}>
                    <label htmlFor="login">user      </label>
                    {/*<select className="form-control" name="user" onChange={(event) => this.handleChange(event)}>*/}
                    {/*    {this.props.users.map((item) =>*/}
                    {/*    <option value={item.id}>{item.firstName}*/}
                    {/*    </option>)}*/}
                    {/*</select>*/}
                    <select name="user" multiple onChange={(event) => this.handleUserChange(event)}>
                        {this.props.users.map((item) => <option value={item.id}>{item.firstName}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="login">repo     </label>
                    <input type="text" className="form-control" name="repo" value={this.state.repo}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <input type="submit" value="Save"/>
            </form>
        )
    }
}

export default ProjectForm

