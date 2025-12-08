import { View,Text } from "react-native-web";

export default function Greet({ name }){
    return(
       <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
         <Text>Hello, {name}</Text>
        </View>
    );
}