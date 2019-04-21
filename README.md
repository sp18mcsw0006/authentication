Please follow the following steps to get your application integrated with Firebase Authentication Project:

1. Create the project
2. Create the new App.js in src
3. Make an auth project on firebase console with your gmail account
4. npm install --save firebase
5. Init Firebase in a Lifecycle method and test the app if everything is working fine
6. You can style the app as per your personal preference

App.js might look like this:
import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
class App extends Component {
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
apiKey: "AIzaSyBsaXqqEioMPhYrSdSrSd3mCwK0sUHUeAc",
authDomain: "auth-e7ac5.firebaseapp.com",
databaseURL: "https://auth-e7ac5.firebaseio.com",
projectId: "auth-e7ac5",
storageBucket: "auth-e7ac5.appspot.com",
messagingSenderId: "846221714758"
});
}
render() {
return (
<View>
<Text>A Firebase Integration Test Application</Text>
</View>
);
}
}

export default App;

****************************** Phase 2 
Now that we do have the firebase integrated let's make our interface ready to accept user input as userid and password with sign in button:

Following are the custom controls you can change and use:
import React from "react";
import { View } from "react-native";
const CardSection = props => {
return <View style={styles.containerStyle}>{props.children}</View>;
};
const styles = {
containerStyle: {
borderBottomWidth: 1,
padding: 5,
backgroundColor: "#fff",
justifyContents: "flex-start",
flexDirection: "row",
borderColor: "#ddd",
position: "relative"
}
};
// export default CardSection;
export { CardSection };

// Then Card
import React from "react";
import { View } from "react-native";
const Card = props => {
return <View style={styles.containerStyle}>{props.children}</View>;
};
const styles = {
containerStyle: {
borderWidth: 1,
borderRadius: 2,
borderColor: "#ddd",
borderBottomWidth: 0,
shadowColor: "#000",
shadowOffSet: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 2,
elevation: 1,
marginLeft: 5,
marginRight: 5,
marginTop: 10
}
};
// export default Card;
export { Card };

//CustomButton
import React from "react";
import { Text, TouchableOpacity } from "react-native";
const CustomButton = ({ onPress, children }) => {
const { buttonStyle, textStyle } = styles;
return (
// <TouchableOpacity onPress={() => console.log('pressed')} style={buttonStyle}>
<TouchableOpacity onPress={onPress} style={buttonStyle}>
<Text style={textStyle}>{children}</Text>
</TouchableOpacity>
);
};
const styles = {
buttonStyle: {
flex: 1,
alignSelf: "stretch",
backgroundColor: "#FFF",
borderRadius: 5,
borderWidth: 1,
borderColor: "#007aff",
marginLeft: 5,
magrinRight: 5
},
textStyle: {
alignSelf: "center",
color: "#007aff",
fontSize: 16,
fontWeight: "600",
paddingTop: 10,
paddingBottom: 10
}
};
// export default CustomButton;
export { CustomButton };

//Header Control
//Imports
import React from "react";
import { Text, View } from "react-native";
//Creation
const Header = props => {
const { textStyle, viewStyle } = styles;
return (
<View style={viewStyle}>
<Text style={textStyle}>{props.headerText}</Text>
</View>
);
};
//Defining the Styles
const styles = {
viewStyle: {
backgroundColor: "#F8F8F8",
justifyContents: "center",
alignItems: "center",
height: 50,
paddingTop: 15,
// shadowColor: 'yellow',
// shadowOffset: { width: 0, height: 2 },
// shadownOpacity: 0.2,
// elevation: 2,
position: "relative"
},
textStyle: {
fontSize: 20,
backgroundColor: "white"
}
};
//Availability to other parts
// export default Header;
export { Header };

//Most Important the Input Custom Control
import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = ({
placeholder,
label,
value,
onChangeText,
secureTextEntry
}) => {
// Destructure the Sytles Object
const { inputStyle, labelStyle, containerStyle } = styles;
return (
<View style={containerStyle}>
<Text style={labelStyle}>{label}</Text>
<TextInput
secureTextEntry={secureTextEntry}
placeholder={placeholder}
autoCorrect={autoCorrect}
value={value}
onChangeText={onChangeText}
style={inputStyle}
/>
</View>
);
};

const styles = {
inputStyle: {
color: "#000",
paddingRight: 5,
paddingLeft: 5,
fontSize: 18,
lineHeight: 23,
flex: 2
},
labelStyle: {
fontSize: 18,
paddingLeft: 20,
flex: 1
},
containerStyle: {
height: 40,
flex: 1,
flexDirection: "row",
alignItems: "center"
}
};

export { Input };


//Finally the index.js in order to improve how we import custom components:
export * from "./CustomButton";
export * from "./Card";
export * from "./CardSection";
export * from "./Header";
export * from "./Input";


******************************* End of Custom Controls for the App ***********************************

Now the main custom component using above custom components is our LoginForm.js

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

//App.js in src dir is using the Login Form and Header to set up the main UI for index.js at root for the App
import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import { Header } from "./components/common";
// Import our LoginForm component to be displayed on the screen
import LoginForm from "./components/LoginForm";

class App extends Component {
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
apiKey: "AIzaSyBsaXqqEioMPhYrSdSrSd3mCwK0sUHUeAc",
authDomain: "auth-e7ac5.firebaseapp.com",
databaseURL: "https://auth-e7ac5.firebaseio.com",
projectId: "auth-e7ac5",
storageBucket: "auth-e7ac5.appspot.com",
messagingSenderId: "846221714758"
});
}
render() {
return (
<View>
<Header headerText="Authentication" />
<LoginForm />
</View>
);
}
}

export default App;

Above App.js will be called from the index.js at root to run the application & we will be done with our Phase 1 of Firebase Authentication Application