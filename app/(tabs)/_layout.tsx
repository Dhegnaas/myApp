import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'
const logoImg = require ("../../assets/images/splash-icon.png")

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
      <Image source={logoImg} style={{ width:300, height:300 }} />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Natus molestias quod sit expedita cupiditate quos eligendi 
        neque possimus repellat inventore sed incidunt, et iusto 
        tenetur hic consectetur dicta. Dolor, praesentium!
      </Text>
       <Image source={logoImg} style={{ width:300, height:300 }} />
       </ScrollView>
    </View>
  );
}
 