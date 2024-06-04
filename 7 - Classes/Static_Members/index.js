"use strict";
class StaticMembers {
    static method() {
        console.log("Static method");
    }
}
StaticMembers.prop = "value";
console.log(StaticMembers.prop); // value
StaticMembers.method(); // Static method
