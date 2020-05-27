import ServiceBlock from './service block.js';

class ServiceItem  {
    constructor( selector, data ){
        this.DOM = null;
        this.selector = selector;
        this.data = data;
        this.serviceList = [];
        this.init();
    }

    init() {
        if(!this.isValidSelector()){
            throw 'ERROR: double check if wanted location exists'
        }


        this.render();
    }


    isValidSelector() {
        const DOM =document.querySelector(this.selector); 
        if(DOM){
            this.DOM = DOM;
            return true;
        }   
     return false;  
    }


    render(){   
        console.log(this.data);
        for( let i=0; i<this.data.length; i++ ){
            new ServiceBlock(this.DOM, this.data[i]);         
        }       
    }
}
export default ServiceItem;