document.addEventListener('DOMContentLoaded', function () {
	var headerBurger = document.querySelector('.header__burger');
	var headerEnumeration = document.querySelector('.header__enumeration');

	headerBurger.addEventListener('click', function (event) {
		headerBurger.classList.toggle('active');
		headerEnumeration.classList.toggle('active');
	});
});

window.addEventListener('resize', function () {
	var headerBurger = document.querySelector('.header__burger');
	var headerEnumeration = document.querySelector('.header__enumeration');

	var burgerRect = headerBurger.getBoundingClientRect();
	var burgerRight = burgerRect.right;

	headerEnumeration.style.left = burgerRight + 'px';
});

window.addEventListener('resize', function () {
	if (window.innerWidth < 1000) {
		var departmentAutomationP = document.querySelector('.department__automation p');
		var marginTop = 1 - Math.floor((1000 - window.innerWidth) / 5);
		departmentAutomationP.style.marginTop = marginTop + 'px';
	}
});

function addComment() {
	var name = document.getElementById('nameInput').value;
	var comment = document.getElementById('commentInput').value;

	var commentList = document.getElementById('commentList');
	var newComment = document.createElement('div');
	newComment.innerHTML = '<p><strong>' + name + '</strong>: ' + comment + '</p>';
	commentList.appendChild(newComment);

	document.getElementById('commentForm').reset();
}