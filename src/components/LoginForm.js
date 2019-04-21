import React, { Component } from "react";
// import { TextInput } from "react-native";
import { CustomButton, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
    // To handle the text input we need the state in the action
    state = { email: "", password: "" };
    render() {
        return (
        <Card>
        {/* For User ID */}
            <CardSection>
            {/* When the text input is not treated as a custom component 
            <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text: text })}
            style={{ height: 20, width: 100 }}
            /> */}
            <Input
            autoCorrect
            placeholder="user@email.com"
            label="Email: "
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
            </CardSection>
        {/* For Password */}
            <CardSection>
            <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            />
            </CardSection>
        {/* For the Login Button */}
            <CardSection>
            <CustomButton>Sign In</CustomButton>
            </CardSection>
        </Card>
        );
    }
}

export default LoginForm;