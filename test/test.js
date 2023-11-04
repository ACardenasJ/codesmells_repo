const { expect } = require("chai");
const { sumar, resta, multiplicar, dividir, add, raiz, elevadoal2, test, test_2, getIP, test_3} = require("../src/index");

describe("Calculadora", function () {
    
    it("debería sumar dos números correctamente", function () {
        expect(sumar(5, 3)).to.equal(8);
    });
    it("debería sumar dos strings", function () {
        expect(sumar("a","b")).to.NaN;
    });

    it("debería restar dos números correctamente", function () {
        expect(resta(10, 3)).to.equal(7);
    });

    it("debería multiplicar dos números correctamente", function () {
        expect(multiplicar(4, 5)).to.equal(20);
    });

    it("debería lanzar un error al dividir por cero", function () {
        expect(() => dividir(5, 0)).to.throw("Division by zero");
    });

    it("debería dividir", function () {
        expect(dividir(4, 2)).to.equal(2);
    });

    it("debería sumar números en una cadena separados por comas", function () {
        expect(add("1,2,3,4,5")).to.equal(15);
    });

    it("debería manejar números mayores que 1000 en la suma", function () {
        expect(add("1000,1001,2000,3000")).to.equal(1000);
    });

    it("debería manejar cadenas vacías en la suma", function () {
        expect(add("")).to.equal(0);
    });

    it("debería manejar una cadena con un solo número en la suma", function () {
        expect(add("42")).to.equal(42);
    });

    it("debería manejar números negativos en la suma", function () {
        expect(add("-1,2,3,-4,5")).to.equal(10);
    });

    it("debería calcular la raíz cuadrada de la diferencia entre dos números", function () {
        expect(raiz(9, 4)).to.equal(2.23606797749979);
        expect(raiz(16, 9)).to.equal(2.6457513110645907);
        expect(raiz(25, 0)).to.equal(5);
    });

    it("debería elevar el resultado de la resta al cuadrado", function () {
        expect(elevadoal2(5, 3)).to.equal(4);
        expect(elevadoal2(10, 3)).to.equal(49);
        expect(elevadoal2(2, 5)).to.equal(9);
    });

    it("debería convertir 'start' a 'START'", function () {
        expect(test("start")).to.equal("START");
    });

    it("debería convertir 'example' a 'EXAMP'", function () {
        expect(test("example")).to.equal("EXAMP");
    });

    it("debería manejar un valor nulo y convertir 'start' a 'START'", function () {
        expect(test(null)).to.equal("START");
    });

    it("debería manejar un valor indefinido y convertir 'start' a 'START'", function () {
        expect(test(undefined)).to.equal("START");
    });

    it("debería tener una cadena START cuando no se proporciona entrada", function () {
        expect(test()).to.equal("START");
    });
});

describe("Función test_2", function () {
    it("debería retornar '6doSomething' para par = -1", function () {
        expect(test_2(-1)).to.equal("doSomething");
    });

    it("debería retornar '6error' para par = -2", function () {
        expect(test_2(-2)).to.equal("error");
    });

    it("debería retornar '6error' para par = 0", function () {
        expect(test_2(0)).to.equal("doSomethingElse");
    });

    it("debería retornar '1error' para otros valores de par", function () {
        expect(test_2(2)).to.equal("error");
    });
});

describe("Función getIP", function () {

    it("debería retornar el valor de la variable de entorno IP_ADDRESS si está definida", function () {
        process.env.IP_ADDRESS = "192.168.0.1";

        expect(getIP()).to.equal("192.168.0.1");
    });

    it("debería retornar 'local' si IP_ADDRESS no está definida", function () {
        process.env.IP_ADDRESS = undefined;

        expect(getIP()).to.equal("undefined");
    });
});


describe("Función test_3", function () {
    it("debería retornar un array de expresiones regulares", function () {
        const patterns = test_3();
        expect(patterns).to.be.an("array");
        expect(patterns).to.have.lengthOf(2);
        expect(patterns[0]).to.be.an.instanceOf(RegExp);
        expect(patterns[1]).to.be.an.instanceOf(RegExp);
        expect(patterns[0].test(" ")).to.be.true;
        expect(patterns[1].test(" ")).to.be.true;
    });
});