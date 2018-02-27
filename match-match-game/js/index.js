(function() {

	let timer;
	let timerRotateBack;
	let timerCount = 0;
	const cardMax = 24;
	let cardCount = 24;
	let cardSetCount = 24;
	let tempValue = '';
	let tempDiv = '';
	let rotateCount = 0;
	let changeDifficultyTrigger = 0;
	shuffleCard(cardCount);

	//---EVERY DAY IM SHUFFLING ))

	function shuffleCard() {
		changeDifficultyTrigger = 0;
		if (timerCount != 0) {
			clearTimeout(timer);
			document.getElementById('timer-count-id').innerHTML = "0:0:0";
			timerCount = 0;
		}
		let cardBack = [
		'<img src="images/card-back-1.png">',
		'<img src="images/card-back-1.png">',
		'<img src="images/card-back-2.png">',
		'<img src="images/card-back-2.png">',
		'<img src="images/card-back-3.png">',
		'<img src="images/card-back-3.png">',
		'<img src="images/card-back-4.png">',
		'<img src="images/card-back-4.png">',
		'<img src="images/card-back-5.png">',
		'<img src="images/card-back-5.png">',
		'<img src="images/card-back-6.png">',
		'<img src="images/card-back-6.png">',
		'<img src="images/card-back-7.png">',
		'<img src="images/card-back-7.png">',
		'<img src="images/card-back-8.png">',
		'<img src="images/card-back-8.png">',
		'<img src="images/card-back-9.png">',
		'<img src="images/card-back-9.png">',
		'<img src="images/card-back-10.png">',
		'<img src="images/card-back-10.png">',
		'<img src="images/card-back-11.png">',
		'<img src="images/card-back-11.png">',
		'<img src="images/card-back-12.png">',
		'<img src="images/card-back-12.png">',
		];
		cardBack = cardBack.slice(0,cardCount);
		cardBack.sort(random);
		backDiv = document.getElementsByClassName('back');
		for( let i = 0; i < cardBack.length; i++) {
			backDiv[i].innerHTML = cardBack[i];
		}

		function random() {
			return Math.random() - 0.5;
		}
	}

	//---POPUP SETTINGS

	let popupSettingsExit = document.getElementById('settings-popup-exit-id');
	popupSettingsExit.addEventListener('click', hideSettingsPopup);

	function hideSettingsPopup() {
		document.getElementById('settings-popup-container-id').style.visibility = 'hidden';
		if (changeDifficultyTrigger == 1) {
			shuffleCard(cardCount);
			tempValue = '';
			tempDiv = '';
			rotateCount = 0;
		}
	}

	let popupSettings = document.getElementById('settings-id');
	popupSettings.addEventListener('click', showSettingsPopup);

	function showSettingsPopup() {
		document.getElementById('settings-popup-container-id').style.visibility = 'visible';
	}

	//----POPUP HELP

	let popupHelpExit = document.getElementById('help-popup-exit-id');
	popupHelpExit.addEventListener('click', hideHelpPopup);

	function hideHelpPopup() {
		document.getElementById('help-popup-container-id').style.visibility = 'hidden';
	}

	let popupHelp = document.getElementById('help-id');
	popupHelp.addEventListener('click', showHelpPopup);

	function showHelpPopup() {
		document.getElementById('help-popup-container-id').style.visibility = 'visible';
	}

	//----POPUP WIN

	let popupWinExit = document.getElementById('win-popup-exit-id');
	popupWinExit.addEventListener('click', hideWinPopup);

	function hideWinPopup() {
		document.getElementById('win-popup-container-id').style.visibility = 'hidden';
	}
	function showWinPopup() {
		document.getElementById('win-popup-container-id').style.visibility = 'visible';
	}

	//---ROTATE CARDS

	let cardField = document.getElementById('card-field-id');
	cardField.onclick = function (e) {
		let target = e.target.parentElement;
		if (target.className != 'card') {return;};
		if (timerCount === 0 ) {
			startTimer();
		};
		rotate(target);
	}

	function rotate(target) {
		if (rotateCount > 1) {return;};
		if (rotateCount == 0) {
			rotateCount++;
			tempValue = target.children[1].innerHTML;
			tempDiv = target;
			if (target.style.transform === "" || target.style.transform === "rotateY(0deg)") {
			target.style.transform = "rotateY(180deg)";
			}
			else {target.style.transform = "rotateY(0deg)";};
		}
		else if (rotateCount === 1 && target !== tempDiv) {
			rotateCount++;
			target.style.transform = "rotateY(180deg)";
			if (tempValue === target.children[1].innerHTML) {
				target.style.visibility = tempDiv.style.visibility = 'hidden';
				tempValue = '';
				tempDiv = '';
				rotateCount = 0;
				cardCount -= 2;
				setTimeout(winner, 1000);
			}
			else {
				timerRotateBack = setTimeout(rotateBack, 1000);
			}
		}
		function rotateBack() {
			tempDiv.style.transform = target.style.transform = "rotateY(0deg)";
			tempValue = '';
			tempDiv = '';
			rotateCount = 0;
		}
	}

	//---SET DIFFICULTY

	let chahgeDifficulty = document.getElementById('set-difficulty-id');
	chahgeDifficulty.onclick = function (e) {
		let target = e.target;
		if (target.className === 'normal-difficulty') {
			disableBorderStyle();
			target.style.boxShadow ='black 0px 0px 0px 3px';
			target.style.zIndex = '1';
			if (window.innerWidth < 800) {
				cardCount = 16;
				cardSetCount = 16;
			}
			else {
				cardCount = 18;
				cardSetCount = 18;
			}
			setDifficulty(cardCount);
		}
		if (target.className === 'hard-difficulty') {
			disableBorderStyle();
			target.style.boxShadow ='black 0px 0px 0px 3px';
			target.style.zIndex = '1';
			cardCount = 24;
			setDifficulty(cardCount);
		}

		function disableBorderStyle() {
			for (let j = 0; j < chahgeDifficulty.children.length; j++) {
				chahgeDifficulty.children[j].style.boxShadow ='black 0px 0px 0px 0px';
				chahgeDifficulty.children[j].style.zIndex = '0';
			}
		}
	}

	//---SET NUMBER VISIBLE CARDS

	function setDifficulty() {
		changeDifficultyTrigger = 1;
		for (let i = 0; i < cardCount; i++) {
			cardField.children[i].style.visibility = 'visible';
			cardField.children[i].style.transform = "rotateY(0deg)";
		}
		for (let i = cardCount; i < cardMax; i++) {
			cardField.children[i].style.visibility = 'hidden';
		}
	}

	//---SET CARD COLOR

	let color = '#c62828';
	let chahgeCardColor = document.getElementById('set-card-color-id');
	chahgeCardColor.onclick = function (e) {
		let target = e.target;
		if (target.className === 'card-color-1') {
			disableBorderStyle();
			target.style.boxShadow ='black 0px 0px 0px 3px';
			target.style.zIndex = '1';
			color = '#2e7d32';
			setCardColor(color);
		}
		if (target.className === 'card-color-2') {
			disableBorderStyle();
			target.style.boxShadow ='black 0px 0px 0px 3px';
			target.style.zIndex = '1';
			color = '#c62828';
			setCardColor(color);
		}

		function disableBorderStyle() {
			for (let j = 0; j < chahgeCardColor.children.length; j++) {
				chahgeCardColor.children[j].style.boxShadow ='black 0px 0px 0px 0px';
				chahgeCardColor.children[j].style.zIndex = '0';
			}
		}
	}

	function setCardColor() {
		for (let i = 0; i < cardMax; i++) {
			cardField.children[i].children[0].style.backgroundColor = color;
		}
	}

	function winner() {
		if (cardCount === 0) {
			clearTimeout(timer);
			document.getElementById('total-time-id').innerHTML = timerCount;
			showWinPopup();
		}
	}

	//---TIMER STARTS BY CLICKING THE CARD

	function startTimer() {
		timerCount++;
		document.getElementById('timer-count-id').innerHTML = timerCount;
		timer = setTimeout(startTimer, 1000);
	}

	//---RESTART GAME

	let restart = document.getElementById('restart-game-image-container-id');
	restart.addEventListener('click', restartGame);

	function restartGame() {
		timerCount = 0;
		tempValue = '';
		tempDiv = '';
		rotateCount = 0;
		clearTimeout(timer);
		clearTimeout(timerRotateBack);
		document.getElementById('timer-count-id').innerHTML = "0:0:0";
		retutnHideCard();
		shuffleCard(cardSetCount);
	}

	function retutnHideCard() {
		for (let i = 0; i < cardSetCount; i++) {
			cardField.children[i].style.transform = "rotateY(0deg)";
			cardField.children[i].style.visibility = 'visible';
		}
	}

} ());
