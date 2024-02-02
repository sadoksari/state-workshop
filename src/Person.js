import React from "react";

class Person extends React.Component {

    render() {
       return ( 

        <div>
          FullName : {this.props.fullName}   <br />
          Profession : { this.props.profession} <br/>
          etat d'affichage : {this.props.etatShow +" "}
        </div>

       )

    }

}

export default Person ;