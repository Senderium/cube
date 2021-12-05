"use strict";

let y = 0;
let x = 0;
let count = 0;
let rand;
let randOld;
let out = document.querySelector('output');
let lolc = document.querySelector('.lolc')
let hunter = document.querySelector('.info span')
let cube = document.querySelector('.cube');
hunter.addEventListener('click', (e) => {
	document.querySelectorAll('.side').forEach(el => {
		el.classList.toggle('vis');
	});
})


document.addEventListener('keydown', (e) => {
	if (e.keyCode === 37) y += 4; if (e.keyCode === 38) x -= 4;
	if (e.keyCode === 39) y -= 4; if (e.keyCode === 40) x += 4;
	cube.style.transform = 'rotateY(' + y + 'deg) ' + 'rotateX(' + x + 'deg)';
})

document.addEventListener('click', (e) => {
	if (e.target.classList[2] == 'lolc' || e.target.classList[3] == 'lolc') {
		do {
			randOld = rand;
			rand = Math.ceil(Math.random() * (6 - 1) + 1);

		} while (randOld == rand);

		e.target.classList.remove('lolc')

		if (rand == 1) {
			document.querySelector('.top').classList.add('lolc');
		} else if (rand == 2) {
			document.querySelector('.bottom').classList.add('lolc');

		}
		if (rand == 3) {
			document.querySelector('.right').classList.add('lolc');

		} else if (rand == 4) {
			document.querySelector('.left').classList.add('lolc');

		}
		if (rand == 5) {
			document.querySelector('.front').classList.add('lolc');

		} else if (rand == 6) {
			document.querySelector('.back').classList.add('lolc');

		}
		lolc = document.querySelector('.lolc')
		out.textContent = ++count;
		if (count == 10) alert('Ты собрал гарем из десяти лолек. Мои поздравления.');
	}

})