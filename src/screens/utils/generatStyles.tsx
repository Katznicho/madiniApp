import { Platform, StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";

export const generalStyles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.Lovato_Bold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryWhiteHex,
    alignItems: 'center',
  },
  flexStyles: {
    display: 'flex',
    flexDirection: 'row',
  },
  absoluteStyles: {
    position: 'absolute',
    zIndex: 20,
  },
  resideViews: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    margin: 2,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHairline: {
    borderBottomColor: COLORS.primaryOrangeHex,
    borderBottomWidth: 3,
    marginRight: 10,
    marginLeft: 20,
    width: 100,
    fontFamily: FONTFAMILY.Lovato_Regular,
  },
  authTitle: {
    fontSize: 20,
    fontFamily: FONTFAMILY.Lovato_Bold,
    color: COLORS.primaryOrangeHex,
    marginTop: 25,
    marginBottom: 8,
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 30,
  },
  textStyle: {
    fontFamily: FONTFAMILY.Lovato_Light,
    color: COLORS.primaryWhiteHex,
    fontSize: 15,
  },
  errorText: {
    color: COLORS.primaryRedHex,
    fontSize: 14,
    fontFamily: FONTFAMILY.Lovato_Regular,
  },
  InputContainer: {
    height: 42,
    borderWidth: 1,
    borderColor: COLORS.primaryLightGreyHex,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryDarkGreyHex,
    paddingLeft: 10,
    color: COLORS.primaryWhiteHex,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5,
    textAlign: "center",
    fontFamily: FONTFAMILY.Lovato_Regular,
  },
  loginContainer: {
    width: '70%',
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 25,
    padding: Platform.OS == "android" ? 10 : 15,
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',

  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginHorizontal: 20
  },
  forgotText: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.Lovato_Bold,
  },
  loginText: {
    color: COLORS.primaryBlackHex,
    fontFamily: FONTFAMILY.Lovato_Bold,
    fontSize: FONTSIZE.size_20
  },
  viewStyles: {
    marginHorizontal: 20,
    marginVertical: 10
  },

  formInput: {
    color: COLORS.primaryWhiteHex,
    fontSize: 15,
    fontFamily: FONTFAMILY.Lovato_Regular,
    paddingHorizontal: 0,
    paddingVertical: Platform.OS === 'android' ? 0 : 10,
    marginTop: 5,
    width:"100%",
    // marginHorizontal:10
  },
  formContainer: {
    marginVertical: Platform.OS === 'android' ? 5 : 10,
    marginHorizontal: 10
  },
  titleHeaderStyles: {
    fontSize: 25,
    fontFamily: FONTFAMILY.Lovato_Bold,

  },
  formInputTextStyle: {
    fontSize: 15,
    fontFamily: FONTFAMILY.Lovato_Bold,
    color: COLORS.primaryWhiteHex
  },
  headerStyle: {
    backgroundColor: COLORS.primaryOrangeHex
  },
  scrollViewContentPadding: {
    paddingBottom: 100
  },
  CardTitle: {
    fontFamily: FONTFAMILY.Lovato_Bold,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
  },
  CardSubtitle: {
    fontFamily: FONTFAMILY.Lovato_Regular,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
  },
  CardPriceCurrency: {
    fontFamily: FONTFAMILY.Lovato_Light,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_12,
  },
  errorInput: {
    borderColor: COLORS.primaryRedHex,

    fontFamily:FONTFAMILY.Lovato_Regular
  },
  textInputMarginRight: {
    marginRight: 15
  },
  borderStyles: {
    borderWidth: 0.5,
    borderBottomWidth: 0.5,
    height: 45,
    borderColor: COLORS.primaryLightGreyHex,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10
},

});