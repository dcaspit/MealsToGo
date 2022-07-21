import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

//StatusBar.currentHeight is android feature;
//therefore this peace of code will be null with ios.
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;
