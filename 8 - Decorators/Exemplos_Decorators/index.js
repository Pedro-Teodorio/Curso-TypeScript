"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// #region Class Decorators
function createDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createDate
], Pen);
const newBook = new Book(1);
const newPen = new Pen(32);
console.log(newBook);
console.log(newPen.createdAt);
// #endregion
// #region Method Decorators
function checkPublished(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (args[1] === true) {
            console.log("Usuário já publicou o post");
            return;
        }
        else {
            return originalMethod.apply(this, args);
        }
    };
    return descriptor;
}
class Post {
    constructor() {
        this.alreadyPublished = false;
    }
    post(content, alreadyPublished) {
        this.alreadyPublished = true;
        console.log(content);
    }
}
__decorate([
    checkPublished
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Isso é meu primeiro POST", newPost.alreadyPublished);
newPost.post("Isso é meu segundo POST", newPost.alreadyPublished);
// #endregion
// #region Property Decorators
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length > limit) {
                console.log(`O valor excede o limite de ${limit} caracteres`);
            }
            else {
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
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(5)
], Admin.prototype, "username", void 0);
const newAdmin = new Admin("admin_3344");
const peluca = new Admin("pelu");
console.log(peluca.username);
// #endregion
