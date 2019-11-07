import React from 'React'
import {StyleSheet,View, Button, Text} from 'react-native'


export default class About extends React.Component {
    render(){
        return(
            <View style = {styles.View}>
                 <Text style = {styles.Text}>A propos de moi</Text>
                 <Text style = {styles.Text}>Doryan Lièvre</Text>
                 <Text style = {styles.Text}>Etudiant à la Coding Factory</Text>
                 <Text style = {styles.Text}>en deuxième années d'étude</Text>
                 <Text style = {styles.Text}>j'aime le développement mobile et les jeux vidéo ;)</Text>
            </View>  
        );
    }

}

const styles = StyleSheet.create(
    {
        Text:
        {
            justifyContent:"center",
            fontWeight: 'bold',
            fontSize: 15,
            color: "#fc8c03",
            backgroundColor: 'black',
            textAlign: 'center',
         },
        View : 
        {
            marginVertical: 23,
        }
    });
