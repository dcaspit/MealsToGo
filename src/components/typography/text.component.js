import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

//Those are objects on the object itself (variants)
const variants = {
  //Equal to say body: ()=>{} / or any thing else
  //Its a ref to the body from up there ^
  body,
  label,
  caption,
  error,
  hint,
};

//For this new styled component text we having 2 dynamic properties
//We using ${} inside this formated string for the properties to be dynamic
//And then we passing a lambda that will exectue.
//If we had <Text variant="something"/> we could (props)=>variants[props.varinant](theme)
//we did a destructure
export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
