import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ { 
        padding:50,
        flexDirection: 'row',
        width: '80%', /*
                      todos los elementos toman el 80% del contenedor, 
                      en este caso es el root, toma el 80% de todo.
                      Para q este 80% tenga efecto, en cada elemento hijo debo 
                      indicar la propiedad flex: 1
                      */
        height: 300,
        justifyContent: 'space-around', /*main axis: en este caso el main es fila, si hubiese seteado flexDirection: column, main sería columna*/
        alignItems: 'stretch', /*cross axis, en este caso columnas*/
      }}>
      <View 
        style={{
          backgroundColor: 'red',
          /* width: 100,
          height: 100, */
          flex: 1,  /*
                    Este campo indica cuantas partes del total va a tomar del 80% indicado en el contenedor
                    principal.
                    El contenedor principal tiene 3 hijos, si cada uno tiene esta propiedad en 1, se repartirá
                    en 3 partes iguales. Si el hijo rojo tiene 1, el azul: 2 y el verde 1, en total son 4 partes
                    el azul será el doble q el resto
                    */

          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>

      <View 
        style={{
          backgroundColor: 'blue',
          /* width: 100,
          height: 100, */
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>

      <View 
        style={{
          backgroundColor: 'green',
          /* width: 100,
          height: 100, */
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
