import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

// If we dont set restuarant as an empty object here it will be undefiend
// So just { restuarant } doesnt help.
export const RestaurantInfoCard = ({ restuarant = {} }) => {
  // Destructring resuarant object. taking the proprties out of it
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://fearingsrestaurant.com/wp-content/uploads/2017/08/Deans-Kitchen_web.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restuarant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        style={{ padding: 16, backgroundColor: "white" }}
        source={{ uri: photos[0] }}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
