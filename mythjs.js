//Tab Code

var tabButtons = document.getElementsByClassName("tab-button");

for (let i = 0; i < tabButtons.length; i++) {
	tabButtons[i].addEventListener("click", changeTab);
}

function changeTab() {
	var tabButton = event.target.closest(".tab-button");
	var activeTabId = tabButton.id.replace("-button","");
	var activeTab = document.getElementById(activeTabId);

	var active = document.querySelectorAll(".active");

	console.log(active);

	active.forEach(active => {
	  active.classList.remove('active');
	});

	activeTab.classList.add("active");
	tabButton.classList.add("active");
}