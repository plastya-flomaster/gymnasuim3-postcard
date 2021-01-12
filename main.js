import confetti from "https://cdn.skypack.dev/pin/canvas-confetti@v1.3.2-e8rgSt2pMylWmIrKd3Zs/min/canvas-confetti.js";
let colors = ['#FA8BFF', '#ffffff', '#23CE6B', '#FFF129'];
window.addEventListener('DOMContentLoaded', (event) => {
    const end = Date.now() + (3 * 1000);

    (function frame() {
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});

window.addEventListener("click", () => {
    const end = Date.now() + (800);

    (function frame() {
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});
