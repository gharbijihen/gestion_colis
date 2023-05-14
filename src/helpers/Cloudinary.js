// Import the Cloudinary classes. 
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from '@cloudinary/url-gen';
import { View } from "react-native";

const myImage = new CloudinaryImage('sample', { cloudName: 'dvn2ctxwu' }).resize(fill().width(100).height(150));


// Render the image in a React component.
return (
  <View>
    <AdvancedImage cldImg={myImage} />
  </View>

)
