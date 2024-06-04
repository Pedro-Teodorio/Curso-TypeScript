class Coords {
    x!: number;
    y!: number;

    set xCoord(x: number) {
       if (x == 0){
            return
       }
       this.x = x;
       console.log('xCoord set to ' + x);
    }

    set yCoord(y: number) {
        if (y == 0){
            return
        }
        this.y = y;
        console.log('yCoord set to ' + y);
    }

    get getCoords() {
        return `x: ${this.x}, y: ${this.y}`
    
    }
}

const my_coords = new Coords();

my_coords.xCoord  = 10 // xCoord set to 10
my_coords.yCoord = 20 // yCoord set to 20

console.log(my_coords.getCoords) // x: 10, y: 20

