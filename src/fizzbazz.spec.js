import generarFizzbazz from "./fizzbazz.js";

describe("Fizzbazz", () => {
    it("deberia generar el mismo numero para uno que no tiene reglas como el nro 1", () => {
        expect(generarFizzbazz(1)).toEqual("1");
    });

    it("deberia generar el mismo numero para uno que no tiene reglas como el nro 2", () => {
        expect(generarFizzbazz(2)).toEqual("2");
    });

    it("deberia generar el mismo numero para que sigue esa regla con el nro 3", () => {
        expect(generarFizzbazz(3)).toEqual("Fizz");
    });

    it("deberia generar el mismo numero para que sigue esa regla con los multiplos de 3", () => {
        expect(generarFizzbazz(6)).toEqual("Fizz");
    });

})