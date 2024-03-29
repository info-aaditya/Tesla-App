import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  menuRow: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconView: {
    fontSize: 24,
    color: "white"
  },

  menuTextBox: {
    flexGrow: 1,
  },

  menuText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
    textTransform: 'uppercase',
  },

  subTitle: {
    color: 'gray',
    fontSize: 14,
    marginLeft: 15,
  },
  
  arrowIcon: {
    fontSize: 24,
    color: '#4D4D4E',
  },

})

export default styles;