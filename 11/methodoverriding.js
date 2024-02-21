// 메소드 오버라이딩(method overriding)

class Car {
    constructor(color) {
        this.color = color;
        this.wheel = 4;
    }
    drive() {
        console.log("drive..");
    }
    stop() {
        console.log("STOP!");
    }
}

class Bmw extends Car {
    park() {
        console.log("PARK");
    }
    stop() {
        super.stop(); // Car에 stop을 사용
        console.log("OFF");
    }
}

const z4 = new Bmw("blue");