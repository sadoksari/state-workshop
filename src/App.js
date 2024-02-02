
import './App.css';
import React  from 'react';
import Person from './Person';

class App extends React.Component {


  /* dans l'objet  state du component on va injecter 5 attributs
    1- person : c'est un objet à afficher sur l'ecrant
    2- etatShos : c'est un drapeau true/false pour dir si la person est affichée ou non
    3- paramShow: variable a injecter dans le libelle
    4- secondsMount : compteur des secondes depuis le montage du component
    5- secondsShowHide : compteur des secondes depuis le show ou le hide du component
  */

   constructor(props) {
     super(props);

     this.state = { 
                    person :{ fullName:"Ali baba" , 
                              bio     :"biologie" , 
                              imgSrc  :"./images/photo.jpeg" , 
                              profession:"Admnistrateur"  
                            }   ,
                    etatShow     : true ,
                    secondsMount : 0 ,
                    secondsShow  : 0 ,                    
                    paramShowHide   : "SHOW"
                    
                  } ;
   }
   
   

   activateDisplay = () => {     
      this.setState ( { etatShow : ! this.state.etatShow } ) 
      this.setState ( { secondsShow :0 }); 
      this.setState ( { paramShowHide   : this.state.etatShow ? "HIDE" : "SHOW" });  
  }; 

  /* lors du montage de l'element en declanche les compteurs en secondes*/
   componentDidMount() {            
        const interval = setInterval(() => {
          this.setState( {secondsMount :this.state.secondsMount + 1 });
        }, 1000);
      
        const interval2 = setInterval(() => {
          this.setState( {secondsShow :this.state.secondsShow + 1 });
        }, 1000);
      
   }

  render(){
      return (
        <div className="App" >
          <h1> WorkShop  state In React  </h1>
          < div className="person">
          { this.state.etatShow &&
           <Person  fullName={this.state.person.fullName} 
                    profession={this.state.person.profession }
                    etatShow  = { this.state.etatShow+"" }
            />
          }
          </div>
          <div>

              <h3>  temps passé en seconds depuis le montage du composant : <h2> {this.state.secondsMount} </h2> </h3> 

              <h3>  temps passé en seconds depuis le { this.state.paramShowHide } du composant : <h2> {this.state.secondsShow} </h2> </h3> 

          </div>
          
          <button onClick={ this.activateDisplay }  >  Show / Hide </button>

        </div>
      );
  }
}

export default App;