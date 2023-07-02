import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerRoot}>

      <View style={styles.container1}
      > 

        <View style={styles.view1}
        >
          <Text>1</Text>
        </View>

        <View style={styles.view1}
        >
          <Text>2</Text>
        </View>

        <View style={styles.view1}
        >
          <Text>3</Text>
        </View>

      </View>

      <View style={styles.container}
      > 

        <View style={styles.view2}
        >
          <Text>1</Text>
        </View>

        <View style={styles.view2}
        >
          <Text>2</Text>
        </View>

      </View>

      <View style={styles.container1}
      > 

        <View style={styles.view1}
        >
          <Text>1</Text>
        </View>

        <View style={styles.view1}
        >
          <Text>2</Text>
        </View>

        <View style={styles.view1}
        >
          <Text>3</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  containerRoot: {
    padding: 0,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    //justifyContent: 'center',
    justifyContent: 'center', //main axis: en este caso el main es fila, si hubiese seteado flexDirection: column, main sería columna
    //alignItems: 'center',
    alignItems: 'stretch', //cross axis, en este caso columnas
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  view1: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  view2: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  view3: {
    backgroundColor: 'blue',
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
  },
});
