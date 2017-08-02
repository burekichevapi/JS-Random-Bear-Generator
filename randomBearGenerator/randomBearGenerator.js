function Bear(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.bearInfo = function () {
        return 'This is a ' + this.name + ' Bear.' + ' It is ' + this.color + ' and weights ' + this.weight + 'lbs.';
    };
}

function bearLibrary() {
    var bearNameArr = ['Winnie the Pooh', 'Yogi', 'Boo-boo', 'Paddington', 'Mama', 'Papa', 'Baby', 'Little', 'Ted', 'Smokey'];
    var bearColorArr = ['red', 'blue', 'white', 'indigo', 'lime green', 'teal', 'fuchsia', 'brown', 'violet', 'black'];
    var count = 0;
    var bearArr = [];

    while (count < 21) {
        var i = Math.floor(Math.random() * (10 - 0)) + 0;
        var j = Math.floor(Math.random() * (10 - 0)) + 0;
        var bear = new Bear(bearNameArr[i], bearColorArr[j], Math.floor(Math.random() * (1000 - 150)) + 150);
        bearArr.push(console.log(bear.bearInfo(), bear.honey(), bear.aggro(), bear.favFood(), '\n'));
        count++;
    }
}

Bear.prototype.honey = function () {
    if (this.name === 'Baby' || this.name === 'Winnie the Pooh') {
        return this.name + ' is eating honey.';
    }
    return '';
};

Bear.prototype.aggro = function () {
    if (this.name === 'Baby' || this.name === 'Winnie the Pooh') {
        return this.name + ' is not agressive.';
    }
    else if (this.weight > 550 || this.name === 'Papa' || this.name === 'Mama' || this.name === 'Smokey') {
        return this.name + ' is agressive.';
    }
    return this.name + ' is not agressive.';
};

Bear.prototype.favFood = function () {
    var foodLibrary = ['honey', 'pizza', 'cheese burgers', 'burritos', 'wings', 'spaghetti', 'steak'];
    var i = Math.floor(Math.random() * (7 - 0)) + 0;
    if (this.name === 'Baby' || this.name === 'Winnie the Pooh') {
        return this.name + '\'s favorite food is ' + foodLibrary[0] + '.';
    }
    return this.name + '\'s favorite food is ' + foodLibrary[i] + '.';
};


bearLibrary();