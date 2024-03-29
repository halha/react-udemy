import React, { Component } from "react";
import PropTypes from "prop-types";

import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";
import classes from "./Person.module.css";

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log("[Person.js] rendering...");
        return (
            <Auxiliary>
                {this.context.authenticated ? (
                    <p>Authenticated</p>
                ) : (
                    <p>Please log in</p>
                )}
                <p onClick={this.props.click}>
                    I'am {this.props.name} and I am {this.props.age}
                </p>
                <p>{this.props.children}</p>
                <input
                    // ref={e => { this.inputElement = e; }}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);

// IMPORTANT NOTE
// ERROR HANDLER (PART 6)
// const rnd = Math.random();

// if (rnd > 0.7) {
//     throw new Error("Something went wrong");
// }
