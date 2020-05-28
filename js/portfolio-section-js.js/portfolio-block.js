
class PortfolioBlock{
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
            <div class="col-4 col-sm-12">
            <div class="single_photo">
            <img src="${this.data.picture}">
            </div>
          </div>
          `;
            
            this.parentDOM.insertAdjacentHTML('beforeend',HTML)
        }
    }

export default PortfolioBlock;