
import "./style.css";

export function Intro(){
    return (
        <section id="intro">
            <div className="container-fluid ms-2 pe-0">
                <div className="row justify-content-center bg-image custom-height">
                  <div className="col-md-5 text-center text-md-start custom-height">
                    <h1>
                    <div className="display-2">Реклама за вашия бизнес или събитие</div>
                    <div className="display-6">Брaндирани тениски, шапки, джъмпери, якета и други.</div>
                    </h1>
                  </div>
                  <div className="col row custom-height">                
                         <img src={require('../../assets/images/tshirt-intro.png')} alt="thirt-intro" className="responsive-image"/>
                   </div>
               </div>
            </div>

        </section>
    )
}