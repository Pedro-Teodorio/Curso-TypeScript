"use strict";
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return this.title;
    }
}
const post = new BlogPost("New Post");
console.log(post.itemTitle());
class Page {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `Esse é o título da página: ${this.title}`;
    }
}
const page = new Page("Minha página");
console.log(page.itemTitle());
