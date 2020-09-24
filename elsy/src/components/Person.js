

 
import React from'react';

class Person extends React.Component {

    render() {
        return (

            <div className="box col-md-2 col-6" >
                 <span style = {{color: "black"},{fontSize:100}}
                  class="material-icons">directions_walk</span>
            </div>
        )
    }

}

export default Person;

// ligne 13 
/* pour insérer un style on ouvre une 1er accolade qui signifie Js {} à l'intérieur de celle-ci 
    on ouvre une 2{}qui est un objet dans laquelle on va mettre notre css.
*/