import BlogBlock from './BlogBlock.js';

class BlogItem  {
    constructor( selector, data ){
        this.DOM = null;
        this.selector = selector;
        this.data = data;
        this.blogList = [];
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
            new BlogBlock(this.DOM, this.data[i]);         
        }       
    }
}
export default BlogItem;