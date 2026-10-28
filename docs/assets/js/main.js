const charPreview = document.querySelector('#character-preview > div.character-content > div.character');
const charName = document.querySelector('#character-info > span.name');
const charUnicode = document.querySelector('#character-info > span.unicode');

document.querySelectorAll('.character-list span[data-name]').forEach(el => {
	el.addEventListener('mouseenter', function () {
		document.querySelectorAll('.character-list span[data-name]').forEach(s => s.classList.remove('active'));
		this.classList.add('active');
		if (charPreview) charPreview.textContent = this.textContent;
		if (charName) charName.textContent = this.dataset.name;
		if (charUnicode) charUnicode.textContent = this.dataset.unicode;
	});
});

document.querySelectorAll('.weights .switch-container > div').forEach(el => {
	el.addEventListener('mouseenter', function () {
		this.parentElement.querySelectorAll('div').forEach(s => s.classList.remove('active'));
		this.classList.add('active');
		const text = this.closest('.large-type')?.querySelector('.text');
		if (text) text.style.fontWeight = this.dataset.weight;
	});
});

document.querySelectorAll('.italic .switch-container > div').forEach(el => {
	el.addEventListener('mouseenter', function () {
		this.parentElement.querySelectorAll('div').forEach(s => s.classList.remove('active'));
		this.classList.add('active');
		const text = this.closest('.large-type')?.querySelector('.text');
		if (text) text.style.fontVariationSettings = `'ital' ${this.dataset.ital}`;
	});
});

document.querySelectorAll('.opentype .switch-container > div').forEach(el => {
	el.addEventListener('mouseenter', function () {
		this.parentElement.querySelectorAll('div').forEach(s => s.classList.remove('active'));
		this.classList.add('active');
		document.querySelectorAll('.opentype > .text > span').forEach(s => {
			s.classList.toggle('disabled', this.dataset.features === 'off');
		});
	});
});

document.querySelectorAll('.transition .switch-container > div').forEach(el => {
	el.addEventListener('mouseenter', function () {
		this.parentElement.querySelectorAll('div').forEach(s => s.classList.remove('active'));
		this.classList.add('active');
		const text = document.querySelector('.transition > .text');
		if (text) text.classList.toggle('disabled', this.dataset.features === 'off');
	});
});
