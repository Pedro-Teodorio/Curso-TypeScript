interface showTitle {
	itemTitle(): string;
}
class BlogPost implements showTitle {
	title;
	constructor(title: string) {
		this.title = title;
	}
	itemTitle(): string {
		return this.title;
	}
}

const post = new BlogPost("New Post");

console.log(post.itemTitle());

class Page implements showTitle {
	title;
	constructor(title: string) {
		this.title = title;
	}

	itemTitle(): string {
		return `Esse é o título da página: ${this.title}`;
	}
}

const page = new Page("Minha página");
console.log(page.itemTitle());
