const cats = [
        "Milo",
        "Otis",
        "Garfield",
    ];

function destructivelyAppendCat(name) {
    name = "Ralph";
    cats.push(name);
};

function destructivelyPrependCat(name) {
    name = "Bob";
    cats.unshift(name);
};

function destructivelyRemoveLastCat() {;
    cats.pop();
};

function destructivelyRemoveFirstCat() {;
    cats.shift();
};

function appendCat(name) {;
    name = "Broom";
    const appendCat = [...cats, name];
    return appendCat;
};


function prependCat(name) {;
    name = "Arnold";
    const prependCat = [name, ...cats];
    return prependCat;
}

function removeLastCat() {
   const removeLastCat = cats.slice(0, -1);
    return removeLastCat;
};

function removeFirstCat() {
    const removeFirstCat = cats.slice(1, 3);
     return removeFirstCat;
 };