"use strict";

class ServiceBlock{
    constructor(parentDOM, data){
        this.parentDOM = parentDOM;
        this.DOM = null;     
        this.data = data;
        this.init();
    }
        init(){
            console.log(this);
            this.render();
        }     
        render(){
            const HTML = ` 
            <div class="col-4 col-xs-12">
            <div class="singleBlock">
              <div class="serviceNumber">
                ${this.data.serviceNumber}
              </div>
              <h3>${this.data.heading}</h3>
              <div class="iconServer">
                ${this.data.icon}
              </div>
              <p>Proin a ullamcorper et primis lobortis laoreet senectus. Vitae dignissim sollicitudin eleifend cursus tempus curabitur posuere nam arcu platea sodales.</p>
            </div>
          `;
            
            this.parentDOM.insertAdjacentHTML('beforeend',HTML)
        }
    }

export default ServiceBlock;