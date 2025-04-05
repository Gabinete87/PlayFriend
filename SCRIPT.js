// script.js
const figuras = {
    0: [],
    1: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    2: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    3: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    4: [0, 4, 8, 12, 16, 20, 24, 28, 32],
    5: [1, 5, 9, 13, 17, 21, 25, 29, 33],
    6: [2, 6, 10, 14, 18, 22, 26, 30, 34],
    7: [7, 19],
    8: [8, 20, 28],
    9: [9, 27],
    10: [10, 26],
    11: [11, 23],
    12: [12, 24],
    13: [13, 21],
    14: [14, 22],
    15: [15, 25],
    16: [16, 32],
    17: [17, 29],
    18: [18, 30],
    19: [19, 31],
    20: [20, 32],
    21: [21, 33],
    22: [22, 34],
    23: [23, 35],
    24: [24, 36],
    25: [25],
    26: [26],
    27: [27],
    28: [28],
    29: [29],
    30: [30],
    31: [31],
    32: [32],
    33: [33],
    34: [34],
    35: [35],
    36: [36]
};

function obtenerFiguras(numero) {
    return figuras[numero] || [];
}

function calcularProbabilidad() {
    // La probabilidad de que salga un número específico en la ruleta es siempre 1/37
    return 1 / 37;
}

function calcular() {
    const ultimoNumero = parseInt(document.getElementById('lastNumber').value);
    const numeroAJugar = parseInt(document.getElementById('numberToPlay').value);

    const figurasPosibles = obtenerFiguras(ultimoNumero);
    const probabilidad = calcularProbabilidad();

    const resultado = document.getElementById('result');
    resultado.innerHTML = `
        <p>Las figuras posibles del último número salido (${ultimoNumero}) son: ${figurasPosibles.join(', ')}</p>
        <p>La probabilidad de que salga el número ${numeroAJugar} es: ${probabilidad.toFixed(4)}</p>
    `;
}