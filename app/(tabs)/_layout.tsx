import { View } from "react-native";
import Greet from "../CoreComponents/Greet"; 
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    <Greet name="osmaan dheere " />
    <Greet name="mr biin" />
    </View>
  );
}
 