import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
  },

  imageView: {
    width: '100%',
    height: '65%',
    resizeMode: 'cover'
  },

  back: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#2f3030',
    padding: 10,
    borderRadius: 5,
  },

  iconView: {
    color: '#fff'
  },

  footer: {
    alignItems: 'center',
    padding: 12,
    marginBottom: 20,
    marginTop: 'auto',
  },

  label: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },

  controlsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  iconContainer: {
    alignItems: 'center',
  },
  
  iconText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
    
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tempIconView: {
    fontSize: 30,
    color: 'gray',
  },

  tempText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },

});

export default styles;
