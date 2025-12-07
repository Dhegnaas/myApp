import { View, Text, Image, ImageBackground, Pressable, Button } from 'react-native'
const logoImg = require ("../../assets/images/splash-icon.png")

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="press"
        onPress={() => console.log ("Button pressed")} 
        color="midnightblue"
       />
      <Pressable onPress={() => console.log("Image pressed")}>
      <Image source={logoImg} style={{ width:300, height:300 }} />
      </Pressable>
      <Pressable onPress={() => console.log("Text pressed")}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Natus molestias quod sit expedita cupiditate quos eligendi 
        neque possimus repellat inventore sed incidunt, et iusto 
        tenetur hic consectetur dicta. Dolor, praesentium!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Natus molestias quod sit expedita cupiditate quos eligendi 
        neque possimus repellat inventore sed incidunt, et iusto 
        tenetur hic consectetur dicta. Dolor, praesentium!
      </Text>
      </Pressable>
      <Pressable onPress={() => console.log("Text pressed")}>
       <Image source={logoImg} style={{ width:300, height:300 }} />
      </Pressable>
    </View>
  );
}
 