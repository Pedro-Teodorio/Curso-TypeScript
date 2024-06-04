// #region Class Decorators
function createDate(created: Function) {
	created.prototype.createdAt = new Date();
}

@createDate
class Book {
	id;
	createdAt?: Date;
	constructor(id: number) {
		this.id = id;
	}
}
@createDate
class Pen {
	id;
	createdAt?: Date;
	constructor(id: number) {
		this.id = id;
	}
}

const newBook = new Book(1);
const newPen = new Pen(32);

console.log(newBook);
console.log(newPen.createdAt);
// #endregion

// #region Method Decorators
function checkPublished(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	descriptor.value = function (...args: any[]) {
		if (args[1] === true) {
			console.log("Usuário já publicou o post");
			return;
		} else {
			return originalMethod.apply(this, args);
		}
	};
	return descriptor;
}
class Post {
	alreadyPublished: boolean = false;
	@checkPublished
	post(content: string, alreadyPublished: boolean) {
		this.alreadyPublished = true;
		console.log(content);
	}
}

const newPost = new Post();
newPost.post("Isso é meu primeiro POST", newPost.alreadyPublished);
newPost.post("Isso é meu segundo POST", newPost.alreadyPublished);
// #endregion

// #region Property Decorators
function Max(limit: number) {
	return function (target: Object, propertyKey: string) {
		let value: string;

		const getter = function () {
			return value;
		};

		const setter = function (newValue: string) {
			if (newValue.length > limit) {
				console.log(`O valor excede o limite de ${limit} caracteres`);
			} else {
				value = newValue;
			}
		};

		Object.defineProperty(target, propertyKey, {
			get: getter,
			set: setter,
		});
	};
}
class Admin {
    @Max(5)
	username;
	constructor(username: string) {
		this.username = username;
	}
}

const newAdmin = new Admin("admin_3344");


const peluca = new Admin("pelu");
console.log(peluca.username);
// #endregion
