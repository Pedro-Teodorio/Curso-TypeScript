"use strict";
function showReview(review) {
    if (!review)
        return "Você não fez um review";
    return `Sua Nota foi de ${review} para esse app`;
}
console.log(showReview(2));
console.log(showReview(false));
