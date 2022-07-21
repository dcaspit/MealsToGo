import React, { useContext } from "react";
import styled from "styled-components/native";
import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { View, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

// Like we getting the props from the outside for the any component we write
// styled component gets props also. in this case styled(View)
// gets ejected with the style theme automatically.
const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

// Apply to each child. #131 video on the course.
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restuarant={item} />
            </Spacer>
          );
        }}
        //contentContainerStyle is applied to the holistic content inside the container.
        //That is why you need to wrap the `Spacer` component around the rendered item.
      />
    </SafeArea>
  );
};
