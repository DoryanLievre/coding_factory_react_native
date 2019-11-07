import React from 'react';
import { StyleSheet, TextInput, View, Button, Text, } from 'react-native';


export default class Search extends React.Component
{
    constructor(...props)
    {
        super(...props);
        this.nb_final = this.nb_aleatoire(1, 100);
        this.state =
            {
                Tentative:0,
                saisie:"",
                msg:false,
                msg2:false,
            }
    }

    game = () =>
    {
        console.log(this.state.saisie);
        console.log(this.nb_final);
        var nb = this.nb_final;
        const {Tentative, saisie} = this.state;
        var msg;
        var msg2;

        if( saisie > nb )
        {
            msg = "trop haut...";
            this.setState(
                {
                    Tentative:Tentative+1
                });
        }
        else if( saisie < nb)
        {
            msg= "trop bas...";
            this.setState(
                {
                    Tentative:Tentative+1
                });
        }
        else
        {
            msg = "Bien jouez !, ";
            msg2 = "vous avez gagné en seulement" + " " + Tentative + " " + "coup(s)";
        }
        this.setState(
        {
            msg:msg,
            msg2:msg2
        });
    }

    restart = () =>
    {
        this.setState(
            {
                Tentative:0,
                saisie:"",
                msg:false,
                msg2:false,
            });
        this.nb_final = this.nb_aleatoire(1, 100);
    }
    nb_aleatoire = (min, max) =>
    {
    var nb = min + (max-min+1)*Math.random();
    return Math.floor(nb);
    }


// affichage 
    render()
    {
        return (
            <View style = {styles.View}>
                <Text style={styles.Text}>Bienvenu au juste prix !</Text>
                <Text style={styles.Text}> Devinez un nombre entre 1 et 100 ! </Text>
                <TextInput style={styles.TextInput} ref= {(el) => { this.saisie = el; }}
                       onChangeText={(saisie) => this.setState({saisie})}
                       value={this.state.saisie} placeholderTextColor='white' placeholder="Entrez votre reponse ici" keyboardType={'numeric'}/>
                <Button title="Valider" onPress={this.game}/>
                <Button title="Reset" onPress={this.restart}/>
                <Text>Tentative : {this.state.Tentative}</Text>
                <Text>{this.state.msg}</Text>
                <Text>{this.state.msg2}</Text>
            </View>
                )
    }
}

// Style des élements de ma page

const styles = StyleSheet.create(
    {
        TextInput:
        {
            fontWeight: 'bold',
            fontSize: 15,
            alignItems: 'center',
            backgroundColor: 'white',
         },
        Text:
        {
            
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

