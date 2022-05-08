const tabsContent = document.querySelectorAll('.news__content'),
	tabs = document.querySelectorAll('.news__tab'),
	tabsBody = document.querySelector('.news__body');

function hideContent() {
	tabsContent.forEach((item) => {
		item.style.display = 'none';
	});
	tabs.forEach((item) => {
		item.classList.remove('news__tab--bold');
	})

}

function viewContent(i = 0) {
	tabsContent[i].style.display = 'block';
	tabs[i].classList.add('news__tab--bold');
}

function viewCorrentContent() {
	tabsBody.addEventListener('click', (e) => {
		if (e.target && e.target.classList.contains('news__tab')) {
			tabs.forEach((item, i) => {
				if (e.target === item) {
					hideContent();
					viewContent(i);
				}
			});
		}
	});
}

hideContent();
viewContent();
viewCorrentContent();