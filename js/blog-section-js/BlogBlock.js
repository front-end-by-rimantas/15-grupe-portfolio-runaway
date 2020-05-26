"use strict";

class BlogBlock{
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
            <div class="col-4 col-sm-12" >
            <div class="col-4">
              <div class="blog-item">
              <div class="comments">
                <i class="fa fa-comment"></i>
                <span class="num-in-comments">${this.data.commentsCount}</span>
              </div>
              <div class="blog-image">
                <img src="${this.data.picture}">
              </div>
              <div class="blog-content">
                <div class="blog-title">
                  <a href="#" class="blog-title-a">
                    <h5>${this.data.heading}</h5>
                  </a>
                </div>
                <p class="blog-p">
                  Dictumst integer sollicitudin venenatis ornare quam. Ligula integer luctus, blandit egestas molestie facilisi porttitor neque sodal luctus senectus lacinia euismod adipiscing element turpis dolor curae; posuere augue.
                </p>
                <div class="blog-admin">
                  <img src="./img/02.jpg" alt="img">
                  <span>By - Rockstar Jack</span>
                </div>
                <div class="blog-date">${this.data.date}</div>
              </div>
            </div>
            </div>
            </div>`;
            
            this.parentDOM.insertAdjacentHTML('beforeend',HTML)
        }
    }

export default BlogBlock;