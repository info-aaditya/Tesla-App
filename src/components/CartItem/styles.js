import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  },

  bgContainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
  },

  headerTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },

  username: {
    fontSize: 17,
    fontWeight: '500',
    color: 'gray',
  },

  iconView: {
    fontSize: 24,
    color: '#fff',
  },

  batterySection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 12
  },
  
  batteryText: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },

  status: {
    alignItems: 'center',
    paddingVertical: 5,
  },

  statusText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },

  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },

  controlsButton: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    padding: 10,
    margin: 12,
  },

})

export default styles;
