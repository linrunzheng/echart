export function $id(selector) {
    return document.getElementById(selector);
} 

export function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
} 