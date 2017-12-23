/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brain__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lava__ = __webpack_require__(6);




const state = {
  maxStep: 0.05,
  wobbleSpeed: 8,
  wobbleDist: 0.07,
  playerXSpeed: 10,
  gravity: 30,
  jumpSpeed: 17,
  scale: 40,
  fps: 30,
  objPositionX: 34, //objects shift in canvas
  objPositionY: 130, //objects shift in canvas
  meltStep: 0,
  breathInc: 0.1,
  breathMax: 1,
  maxEyeHeight: 10,
  timeBtwBlinks: 4000,
  blinkUpdateTime: 200,
  intervalBlink: null,
  intervalBreath: null,
  intervalMelt: null,
  turnLeft: null,
  jumpingStatus: null,
  breathDir: 1,
  breathAmt: 0,
  curEyeHeight: 10,
  eyeOpenTime: 0,
  totalResources: 14,
  brainsEaten: 0,
  memorybrainsEaten: 0,
  numResourcesLoaded: 0,
  canvasPlayer: null,
  contextPlayer: null,
  playerLost: null,
  images: {},
  actorChars: {
    "@": __WEBPACK_IMPORTED_MODULE_0__player__["a" /* Player */],
    "o": __WEBPACK_IMPORTED_MODULE_1__brain__["a" /* Brain */],
    "=": __WEBPACK_IMPORTED_MODULE_2__lava__["a" /* Lava */],
    "|": __WEBPACK_IMPORTED_MODULE_2__lava__["a" /* Lava */],
    "v": __WEBPACK_IMPORTED_MODULE_2__lava__["a" /* Lava */]
  }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = state;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  times(scale) {
    return new Vector(this.x * scale, this.y * scale);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_game__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_levels__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_domDisplay__ = __webpack_require__(10);





const startButton = document.getElementsByClassName('start-button')[0];

startButton.onclick = () => {
  const welcomeScreen = document.getElementsByClassName('intro')[0];
  if (welcomeScreen) welcomeScreen.style.display = 'none';

  const bodyElement = document.getElementsByTagName('body')[0];
  if (bodyElement) bodyElement.style.cursor = 'none';

  new __WEBPACK_IMPORTED_MODULE_0__components_game__["a" /* Game */](__WEBPACK_IMPORTED_MODULE_2__components_levels__["a" /* LEVELS */], __WEBPACK_IMPORTED_MODULE_3__components_domDisplay__["a" /* DOMDisplay */]);
};

const defaultJumpSpeed = 17;
const defaultPlayerXSpeed = 10;
const defaultPlayerLostStatus = null;

const restartGameButton = document.getElementById('restart-game-button-id');

restartGameButton.onclick = () => {
  new __WEBPACK_IMPORTED_MODULE_0__components_game__["a" /* Game */](__WEBPACK_IMPORTED_MODULE_2__components_levels__["a" /* LEVELS */], __WEBPACK_IMPORTED_MODULE_3__components_domDisplay__["a" /* DOMDisplay */]);
  __WEBPACK_IMPORTED_MODULE_1__components_state__["a" /* state */].brainsEaten = 0;
  __WEBPACK_IMPORTED_MODULE_1__components_state__["a" /* state */].memorybrainsEaten = 0;
  __WEBPACK_IMPORTED_MODULE_1__components_state__["a" /* state */].jumpSpeed = defaultJumpSpeed;
  __WEBPACK_IMPORTED_MODULE_1__components_state__["a" /* state */].playerXSpeed = defaultPlayerXSpeed;
  __WEBPACK_IMPORTED_MODULE_1__components_state__["a" /* state */].playerLost = defaultPlayerLostStatus;
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__level__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popups__ = __webpack_require__(8);




class Game {
  constructor(plans, Display) {
    this.plans = plans;
    this.Display = Display;
    this.arrows = this.trackKeys({
      37: 'left',
      38: 'up',
      39: 'right'
    });
    this.renderLevel(0);
  }

  trackKeys(codes) {
    let pressed = Object.create(null);

    const handler = event => {
      if (codes.hasOwnProperty(event.keyCode)) {
        let down = event.type === "keydown";
        pressed[codes[event.keyCode]] = down;
        event.preventDefault();
      }
    };
    addEventListener("keydown", handler);
    addEventListener("keyup", handler);

    return pressed;
  }

  initiateLevel(level, Display, andThen) {
    let display = new Display(document.body, level);
    this.implementAnimation(step => {
      level.animate(step, this.arrows);
      display.drawFrame(step);
      if (level.isFinished()) {
        display.clear();
        document.body.className = document.body.className ? '' : 'fade';
        setTimeout(() => {
          document.body.className = '';
        }, 500);
        if (andThen) andThen(level.status);

        return false;
      }
    });
  }

  implementAnimation(frameFunc) {
    let lastTime = null;
    const frame = time => {
      let stop = false;
      if (lastTime != null) {
        let timeStep = Math.min(time - lastTime, 100) / 1000;
        stop = frameFunc(timeStep) === false;
      }
      lastTime = time;
      if (!stop) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }

  renderLevel(n) {
    const currentLevel = document.getElementById('level');
    if (currentLevel) {
      currentLevel.style.display = "inline";
      currentLevel.innerHTML = 'Level ' + (n + 1);
    }
    this.initiateLevel(new __WEBPACK_IMPORTED_MODULE_1__level__["a" /* Level */](this.plans[n]), this.Display, status => {
      if (status === 'lost') {
        new __WEBPACK_IMPORTED_MODULE_2__popups__["a" /* PopUp */]().showLosePopUp();

        let triggerRenderLevel = 0;

        const launchNewLevel = () => {
          if (triggerRenderLevel === 1) {
            this.renderLevel(n);
            triggerRenderLevel = null;
            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost = null;
            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerXSpeed = 10;
            __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpSpeed = 17;
          } else if (triggerRenderLevel === 0) {
            let buttonRerenderLevel = document.getElementById('restart-level-button-id');
            buttonRerenderLevel.addEventListener('click', launchNewLevel);
            triggerRenderLevel = 1;
          }
        };

        setTimeout(launchNewLevel, 0);

        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].brainsEaten = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].memorybrainsEaten;
      } else if (n < this.plans.length - 1) {
        const renderDelay = () => {
          this.renderLevel(n + 1);
          __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].memorybrainsEaten = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].brainsEaten;
          __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost = null;
        };

        setTimeout(renderDelay, 500);
      } else {
        new __WEBPACK_IMPORTED_MODULE_2__popups__["a" /* PopUp */]().showWinPopUp();
      }
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(1);



class Player {
  constructor(position) {
    this.position = position.plus(new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](0, -1));
    this.size = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](1.1, 2);
    this.speed = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](0, 0);
  }

  moveX(step, level, keys) {
    this.speed.x = 0;
    if (keys.left) {
      this.speed.x -= __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerXSpeed;
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].turnLeft = 1;
    }
    if (keys.right) {
      this.speed.x += __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerXSpeed;
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].turnLeft = null;
    }

    let motion = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](this.speed.x * step, 0);
    let newPosition = this.position.plus(motion);
    let obstacle = level.obstacleAt(newPosition, this.size);

    if (obstacle) {
      level.playerTouched(obstacle);
    } else {
      this.position = newPosition;
    }
  }

  moveY(step, level, keys) {
    this.speed.y += step * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].gravity;
    let motion = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](0, this.speed.y * step);
    let newPosition = this.position.plus(motion);
    let obstacle = level.obstacleAt(newPosition, this.size);

    if (obstacle) {
      level.playerTouched(obstacle);
      if (keys.up && this.speed.y > 0) {
        this.speed.y = -__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpSpeed;
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpingStatus = 1;
      } else if (keys.up) {
        this.speed.y = 0;
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpingStatus = 1;
      } else {
        this.speed.y = 0;
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpingStatus = null;
      }
    } else {
      this.position = newPosition;
    }
  }

  act(step, level, keys) {
    this.moveX(step, level, keys);
    this.moveY(step, level, keys);

    let otherActor = level.actorAt(this);
    if (otherActor) {
      level.playerTouched(otherActor.type, otherActor);
    }

    // Losing animation
    if (level.status === "lost") {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost = 1;
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerXSpeed = 0;
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpSpeed = 0;
      this.position.y += 0.3 * step;
      this.size.y -= 0.3 * step;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;


Player.prototype.type = "player";

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(1);



class Brain {
  constructor(position) {
    this.baseposition = this.position = position;
    this.size = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](1, 1);
    this.wobble = Math.random() * Math.PI * 2;
  }

  act(step) {
    this.wobble += step * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].wobbleSpeed;
    let wobblePosition = Math.sin(this.wobble) * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].wobbleDist;
    this.position = this.baseposition.plus(new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](0, wobblePosition));
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Brain;


Brain.prototype.type = "brain";

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__(1);


class Lava {
  act(step, level) {
    let newPosition = this.position.plus(this.speed.times(step));
    if (!level.obstacleAt(newPosition, this.size)) this.position = newPosition;else if (this.repeatposition) this.position = this.repeatposition;else this.speed = this.speed.times(-1);
  }

  constructor(position, interactWith) {
    this.position = position;
    this.size = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0.8, 0.8);

    if (interactWith === "=") {
      this.speed = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](2, 0);
    } else if (interactWith === '|') {
      this.speed = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0, 2);
    } else if (interactWith === 'v') {
      this.speed = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* Vector */](0, 3);
      this.repeatposition = position;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Lava;


Lava.prototype.type = "lava";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(1);



class Level {
  constructor(plan) {
    this.width = plan[0].length;
    this.height = plan.length;
    this.grid = [];
    this.actors = [];

    for (let y = 0; y < this.height; y++) {
      let line = plan[y],
          gridLine = [];
      for (let x = 0; x < this.width; x++) {
        let ch = line[x],
            fieldType = null;
        let Actor = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].actorChars[ch];
        if (Actor) {
          this.actors.push(new Actor(new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* Vector */](x, y), ch));
        } else {
          switch (ch) {
            case 'x':
              fieldType = "wall";
              break;
            case '!':
            case '|':
            case '=':
            case 'v':
              fieldType = "lava";
              break;
            default:
              null;
          }
        }
        gridLine.push(fieldType);
      }
      this.grid.push(gridLine);
    }
    this.player = this.actors.filter(actor => {
      return actor.type === "player";
    })[0];
    this.status = null;
    this.finishDelay = null;
    this.finishLevel = null;
  }

  isFinished() {
    return this.status != null && this.finishDelay < 0;
  }

  obstacleAt(position, size) {
    let xStart = Math.floor(position.x);
    let xEnd = Math.ceil(position.x + size.x);
    let yStart = Math.floor(position.y);
    let yEnd = Math.ceil(position.y + size.y);

    if (xStart < 0 || xEnd > this.width || yStart < 0) return "wall";
    if (yEnd > this.height) return "lava";

    for (let y = yStart; y < yEnd; y++) {
      for (let x = xStart; x < xEnd; x++) {
        let fieldType = this.grid[y][x];
        if (fieldType) return fieldType;
      }
    }
  }

  actorAt(actor) {
    for (let i = 0; i < this.actors.length; i++) {
      let other = this.actors[i];
      if (other !== actor && actor.position.x + actor.size.x > other.position.x && actor.position.x < other.position.x + other.size.x && actor.position.y + actor.size.y > other.position.y && actor.position.y < other.position.y + other.size.y) {
        return other;
      }
    }
  }

  animate(step, keys) {
    if (this.status != null) this.finishDelay -= step;

    while (step > 0) {
      let thisStep = Math.min(step, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].maxStep);
      this.actors.forEach(function (actor) {
        actor.act(thisStep, this, keys);
      }, this);
      step -= thisStep;
    }
  }

  playerTouched(type, actor) {
    const currentBrainsEaten = document.getElementById('brains');
    if (currentBrainsEaten) {
      currentBrainsEaten.style.display = "inline";
      currentBrainsEaten.innerHTML = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].brainsEaten;
    }
    if (type === "lava" && !this.status) {
      this.status = "lost";
      this.finishDelay = 1;
    } else if (type === "brain") {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].brainsEaten++;
      this.actors = this.actors.filter(other => {
        return other !== actor;
      });
      if (!this.actors.some(actor => {
        return actor.type === "brain";
      })) {
        this.status = "won";
        this.finishDelay = 1;
        this.finishLevel = 1;
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Level;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);


class PopUp {
  constructor() {
    this.bodyElement = document.getElementsByTagName('body')[0];
    this.losePopUpElement = document.getElementById('lose-popup-container-id');
    this.winPopUpElement = document.getElementById('win-popup-container-id');
    this.loseScoreElement = document.getElementById('lose-popup-score');
    this.winScoreElement = document.getElementById('win-popup-score');
    this.buttonRestartLevel = document.getElementById('restart-level-button-id');
    this.buttonRestartGame = document.getElementById('restart-game-button-id');
  }

  showLosePopUp() {
    const showingLosePopUp = () => {
      this.losePopUpElement.classList.add("show-popup");
    };
    setTimeout(showingLosePopUp, 500);

    if (this.bodyElement) this.bodyElement.style.cursor = 'auto';
    this.loseScoreElement.innerHTML = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].brainsEaten;

    this.buttonRestartLevel.addEventListener('click', this.hideLosePopUp);
  }

  showWinPopUp() {
    const showingWinPopUp = () => {
      this.winPopUpElement.classList.add("show-popup");
    };
    setTimeout(showingWinPopUp, 500);

    if (this.bodyElement) this.bodyElement.style.cursor = 'auto';
    this.winScoreElement.innerHTML = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].brainsEaten;

    this.buttonRestartGame.addEventListener('click', this.hideWinPopUp);
  }

  hideLosePopUp() {
    const losePopUpElement = document.getElementById('lose-popup-container-id');
    const bodyElement = document.getElementsByTagName('body')[0];

    losePopUpElement.classList.remove("show-popup");
    if (bodyElement) bodyElement.style.cursor = 'none';
  }

  hideWinPopUp() {
    const winPopUpElement = document.getElementById('win-popup-container-id');
    const bodyElement = document.getElementsByTagName('body')[0];

    winPopUpElement.classList.remove("show-popup");
    if (bodyElement) bodyElement.style.cursor = 'none';
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PopUp;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LEVELS; });
const LEVELS = [["00000000000000000000000000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000", "000000000000000000000000000000000000000000000000o0000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000", "000000000000000000000000000000000000o0o000000000000000000000000000x!!!!!!!!!!x00", "000000000000000000000000000000000000000000000000000000000000000000x!xxxxxxxxxx00", "000000000000000000000000000000000000000000000000000xx000000xx0000xx!xx0000000x00", "000000000000000000000000000000000000000000000xx000000000000000000x!!!x0000000x00", "00000000000000000000000000000000000xxxxx00o0o00000000000000000000xx!xx0000000x00", "000000000000000000000000000000000000000000000000000000000000000000xvx00000000x00", "00xx0000000000000000000000000000000000000000000000000000000000000000000000000x00", "00x0000000000000000000000000000000000000000000000000000000000000000000000o000x00", "00x000000000000000000000o0000000000000000xxxxx0000000000000000000000000000000x00", "00x00000000000000000000000000000000000000000000000000000000000000000000000000x00", "00x0000000000xxxx0000000o0000000000000000000000000000000000000000000000000000x00", "00x00@0000000x00x000000000000000000000000000000000000000000000000xxxxx0000000x00", "00xxxxxxxxxxxx00xxxxxxxxxxxxxxx000xxxxxxxxxxxxxxxxxxxx00000xxxxxxx000xxxxxxxxx00", "000000000000000000000000000000x000x000000000000000000x00000x00000000000000000000", "000000000000000000000000000000x!!!x000000000000000000x!!!!!x00000000000000000000", "000000000000000000000000000000x!!!x000000000000000000x!!!!!x00000000000000000000", "000000000000000000000000000000xxxxx000000000000000000xxxxxxx00000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000"], ["0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000x!x00", "00000000000000000000000000000000000000x!!x000000000000000000000000xxxxxxx000000000000000000000000000000000000x!x00", "00000000000000000000000000000000000000x!!x000000000000000000000xxxx00000xxxx000000000000000000000000000000000x!x00", "00000000000000000000000000000000000000x!!xxxxxxxxxx00000000000xx00000000000xx0000000000000000o000o000o000o000x!x00", "00000000000000000000000000000000000000xx!!!!!!!!!!xx000000000xx0000000000000xx0000000000000000000000000000000x!x00", "000000000000000000000000000000000000000xxxxxxxxxx!!x000000000x00000000000000000000000000000000000000000000000x!x00", "000000000000000000000000000000000000000000000000xx!x000000000x00000o000o000000000000000000000000000000000000xx!x00", "0000000000000000000000000000000000000000000000000x!x000000000x00000000000000000000000000xxxxxxxxxxxxxxxxxxxxx!!x00", "0000000000000000000000000000000000000000000000000xvx000000000x00000x000x0000000000000000x!!!!!!!!!!!!!!!!!!!!!xx00", "0000000000000000000000000000000000000000000000000000000000000xx00|000|000|00xx000000000xx!xxxxxxxxxxxxxxxxxxxxx000", "00000000000000000000000000000000000000000000000000000000000000xx!!!!!!!!!!!xx000000000000v000000000000000000000000", "000000000000000000000000000000000000000000000000000000000000000xxxx!!!!!xxxx00000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000x00000x000000000000xxxxxxx00000000xxx000000000xxx000000000000000000", "00000000000000000000000000000000000000000000000x00000x000000000000000000000000000x0x000000000x0x000000000000000000", "00000000000000000000000000000000000000000000000x00000x00000000000000000000000000000x000000000x00000000000000000000", "00000000000000000000000000000000000000000000000x00000x000000000000000000000000o0000xx00000000x00000000000000000000", "00000000000000000000000000000000000000000000000xx0000x0000000o000000000000000000000x000000000x00000000000000000000", "00000000000000000000000000000000000000000000000x00000x0000000000000000000x000000000x000000000x00000000000000000000", "000000000000000xxxxxxx00000000xxx000xxx00000000x00000x0000000000000000000x000000000x000000000x00000000000000000000", "00000000000000xx00000xx000000000x000x0000000000x00000x00000xxxxxx0000x000x000xxxxxxxxx0000000x00000000000000000000", "0000000000000xx0000000xx00000000x0o0x0000000000x0000xx000000000000000x000x000x000000000000000x00000000000000000000", "00000@0000000x000000000x00000000x000x0000000000x00000x00000000000000ox000xxxxx000000000000000x00000000000000000000", "0000xxx000000x000000000x00000000x000x0000000000x00000x0000000000000xxx00000000000000000000000x00000000000000000000", "0000x0x000000x000000000x0000000xx0o0xx000000000x00000x000000000000000x00000o00000xxxxxx000000x00000000000000000000", "!!!!x0x!!!!!!x000000000x!!!!!!xx00000xx!!!!!!!!xx0000x!!!!!!!!!!!!!!!x00000000000x0x00000o000x00000000000000000000", "!!!!x0x!!!!!!x000000000x!!!!!xx0000000xxxxxxxxxx00000x!!!!!!!xxxxxxxxx00000=00000x0xx0000000xx00000000000000000000", "!!!!x0x!!!!!!x000000000x!!!!!x00000000000000000000000xx!!!!!!xx000000xxxxxxxxxxxxx00xx00000xx000000000000000000000", "!!!!x0x!!!!!!x000000000x!!!!!x0000o00000000000000000xx!!!!!!xx00000000000000000000000xxxxxxx0000000000000000000000", "!!!!x0x!!!!!!x000000000x!!!!!x000000000000000000000xx!!!!!!xx00000000000000000000000000000000000000000000000000000", "!!!!x0x!!!!!!x000000000x!!!!!xx0000000xxxxxxxxxxxxxx!!!!!!xx000000000000000000000000000000000000000000000000000000", "!!!!x0x!!!!!!x000000000x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx0000000000000000000000000000000000000000000000000000000", "!!!!x0x!!!!!!x000000000x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx00000000000000000000000000000000000000000000000000000000"], ["00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "0000000000000000000000000000000000000000o000000000000000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "0000000000000000000000000000000000000000x000000000000000000000000000000000000000000000000000000000000000000000", "0000000000000000000000000000000000000000x000000000000000000000000000000000000000000000000000000000000000000000", "0000000000000000000000000000000000000000x000000000000000000000000000000000000000000000000000000000000000000000", "0000000000000000000000000000000000000000x000000000000000000000000000000000000000000000000000000000000000000000", "000000000000000000000000000000000000000xxx000000000000000000000000000000000xxx00000000000000000000000000000000", "000000000000000000000000000000000000000x0x00000000000000000!!!0000=000!!!0000000000000000000000000000000000000", "000000000000000000000000000000000000000x0x00000000000000000!x!0o0oo0o0!x!0000000000000000000000000000000000000", "0000000000000000000000000000000000000xxx0xxx0000000000000000x0000000000x00000000000000000000000000000000000000", "00000000000000000000000000000000000000x000x00000000000000000x0000000000x0000000xxx0000000000000000000000000000", "00000000000000000000000000000000000000x000x00000000000000000x0000000000x000000x!!!x000000000000000000000000000", "00000000000000000000000000000000000000x000x00000000000000000xxxxxxxxxxxx0000000xxx0000000000000000000000000000", "0000000000000000000000000000000000000xx000xx0000000000x000000x000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000x000x000000x0000xxxxxxxx00000000000000x00x000000000000000000000000000000", "00000000000000000000000000000000000000x000xxxxxxxx0000x00000000000000000000x!!!!x00000000000000000000000000000", "00000000000000000000000000000000000000x000x00000000000x000000000000000000000xxxx000000000000000000000000000000", "0000000000000000000000000000000000000xx000xxx000000000x0000000000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000x000x=0=0=0=0000x000000000000xxx0000000000000000000o00000000000000000000", "00000000000000000000000000000000000000x000x00000000000x00000000000x!!!x000000000000000000000000000000000000000", "00000000000000000000000000000000000000x000x0000=0=0=0=x00000o000000xxx0000000xxx000000000000000000000000000000", "000000000000000000000000000000o000o00xx000xxx000000000x000000000000000000000x!!!x00000000000000000000000000000", "00000000000000000000000000000000000000x000x00o00000000x00000x0000000000000000xxv000000000xx0000000000000000000", "00000000000000000000000000000000000000x000x00000000o00x00000000000000x000000000000000000x!!x000000000000000000", "00000000000000000000000000000xxx0xx000xxxxx00000000000x!!!!!!!!!!!!!!x0000000000000000000vx00000000000000xxx00", "00000000000000000000000000000x0xxx000xxxxxx00000000000x!!!!!!!!!!!!!!x00000000000000000000000000000000000x0x00", "00000000000000000000000000000x000000000000x0000xxxxxxxxxxxxxxxxxxxxxxx0000000000000000000000000000000000000x00", "00000000000000000000000000000xx00000000000xx00000000000000000000000000000000000000000xxx0000000000000000000x00", "00xxx0000000000000000000000000x00000000000x0000000|000000000000000000000000000000000x!!!x000000000000000000x00", "00x0x0000000000000000000000000x00000x00000x00000000000000000000o0|0000000000000000000xxx0000000000000000000x00", "00x000000000000000000000000000x0000xxx0000xxxxxxx000000000000000000000000xxxxx00000000000000000000000000000x00", "00x000000000000000000000000000x0000xxx0000x000000000000000000000000000000x000x00000000000000000000000000000x00", "00x000000000000000000000000000xx0000000000x0o0000000000000000000000000000x0x0x00000000000000000000000000000x00", "00x000000000000000000000000000000000000000x00000000xxxx|00000xxxx000000xxx0xxx00000000000000000000000000000x00", "00x0000000000000000xxx0000000000000o0o0000x000000000000000000000000000000x000000000xxx000000000000000000000x00", "00x000000000000000xxxxx0000000000000000000x00000o000000000o000000000o000xxx0000000x!!!x0000000000x000000000x00", "00x000000000000000oxxxo0000000xx000xxx0000x00000000000000000|00000000000x0x00000000xxx0000000000xxx00000000x00", "00x0000000000000000xxx00000000xxxxxxxxxxxxx00x0000x0000x0000x0000x00000xx0xx00000000000000000000xxx00000000x00", "00x000000@0000000000x000000000x00000000000x!!x0000x!!!!x0000x!!!!x0000xx000xx00000000000000000000x000000000x00", "00xxxxxxxxxxxxxxxxxxxxxxxxxxxxx00000000000xxxxxxxxxxxxxxxxxxxxxxxxxxxxx00000xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx00", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"], ["00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000x00000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000xxxxx0000000", "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000x0000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000xxxxx0000000", "0000000000000000000000000000000000000000000000000000000000000000000000o0000000o0000000o00000000000x00000000000", "00000000000000000000000000o00000000000000000000000000000000000000000000000000000000000000000000000xxxxx0000000", "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000x0000000", "0000000000000000000xxx00000000000000000000000000000000000000000000xxxxxx0xxxxxx00xxxxx000x000x0o0x0xxxx0000000", "0000000!00o00!0000000000000000000000000000000000000000000000000000x0000x0x0000000x000000x0x00xx0xx0x0000000000", "0000000x00000x0000000000000000000000000000000000000000000000000000x0000x0x0000000x00000x000x0x0x0x0x0000000000", "0000000x=0o00x000000000000x00000000000000000000000000000000o00xxx0xxxxxx0xxxxxx00x00xx0xxxxx0x0x0x0xxxx0000000", "0000000x00000x0000000000000000000000000000000000000000000000000000x00x00000000x00x000x0x000x0x000x0x0000000000", "0000000!00o00!000000000000o000000000000000000000000000000000000000x000x0000000x00x000x0x000x0x000x0x0000000000", "0000000|0000000000000000000000000000000000000000000000000000000000x0000x0xxxxxx00xxxxx0x000x0x000x0xxxx0000000", "0000000000o00000000000000xxx000000000000000000000000000000xx00000000000000000000000000000000000000000000000000", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000o00000000000000000000000000", "00000000000000000000000000o00000000000000000000000000000000000000000000000000000000000000000000000000000000000", "000000000000000000000000000000000000000000000000000000xx000000000000000000000000000000000000000000000000000000", "00x0000000000000000xxx0000|0000xxx0000000000000000000000000000000000000000000000000000000000000000000000000000", "00x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "00x00000000000000000000000o00000000000000000000000000000000000000000000000000000x000000x0000000000000000000000", "00x0000000000000000000000000000000000000000000000000000000xx00000xx0000000000000000000000000000000000000000000", "00x000000000xxxx000000000xxx000000000xxx000000000000000000000000000000000x000000000000000000x00000000000000000", "00x00000x000x0o00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "00x!!!!!xx00x0000000000000000000000000000000000000000000000000000||0000000000000000000000000000000000000000000", "00xxxxxxx000x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "00x000000000xx00xxxxxxxxx0o0xxxxxxxxx0o0xx000000000000000000000000000000000000000000000000x0000000000000000000", "00x0000000000x00x0000000x000x0000000x000x00000000000000000||000000000000000000x00000x0000000000000000000000000", "00x00@0000000xxxx000o000xxxxx000o000xxxxx000000000000000000000000000000000000000000000000000000000000000000000", "00xxxxxxx0000000000000000000000000000000000000xxxxx0000000xx00000xx00000xxx00000000000000000000000000000000000", "00000000x0000000000000000000000000000000000000x000x000000000000000000000xxx00000000000000000000000000000000000", "00000000x=0000000000000000000=000000000000000=x000x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", "00000000xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx000xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"]];



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageLoader__ = __webpack_require__(11);



class DOMDisplay {
  constructor(parent, level) {
    this.wrap = parent.appendChild(this.addElement("div", "game"));
    this.level = level;
    this.wrap.appendChild(this.createPlayerCanvas());
    this.wrap.appendChild(this.drawBackground());
    this.actorLayer = null;
    this.drawFrame();
    Object(__WEBPACK_IMPORTED_MODULE_1__imageLoader__["a" /* loadResources */])();
  }

  createPlayerCanvas() {
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer = document.createElement('canvas');
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.setAttribute('width', 70);
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.setAttribute('height', 90);
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.setAttribute('id', 'canvasPlayer');
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.getContext("2d");

    return __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer;
  }

  drawBackground() {
    let table = this.addElement("table", "background");
    table.style.width = this.level.width * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
    table.style.height = this.level.height * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";

    this.level.grid.forEach(row => {
      let rowElement = table.appendChild(this.addElement("tr"));
      rowElement.style.height = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
      row.forEach(type => {
        rowElement.appendChild(this.addElement("td", type));
      });
    });

    return table;
  }

  drawActors() {
    let wrap = this.addElement("div");

    this.level.actors.forEach(actor => {
      const rect = wrap.appendChild(this.addElement("div", "actor " + actor.type));
      rect.style.width = actor.size.x * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
      rect.style.height = actor.size.y * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
      rect.style.left = actor.position.x * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";
      rect.style.top = actor.position.y * __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale + "px";

      if (actor.type === 'player') {
        rect.appendChild(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer);
      }
      if (actor.type === 'lava') {
        let objVector = actor.speed;
        if (objVector.y === 3) {
          rect.classList.add("moving-down-lava");
        }
        if (objVector.y === 2) {
          rect.classList.add("moving-down-lava");
        }
        if (objVector.y === -2) {
          rect.classList.add("moving-up-lava");
        }
        if (objVector.x === 2) {
          rect.classList.add("moving-right-lava");
        }
        if (objVector.x === -2) {
          rect.classList.add("moving-left-lava");
        }
      }
    });

    return wrap;
  }

  drawFrame() {
    if (this.actorLayer) this.wrap.removeChild(this.actorLayer);
    this.actorLayer = this.wrap.appendChild(this.drawActors());
    this.wrap.className = "game " + (this.level.status || "");
    this.scrollPlayerIntoView();
  }

  scrollPlayerIntoView() {
    let width = this.wrap.clientWidth;
    let height = this.wrap.clientHeight;
    let marginHorizontal = width / 2;
    let marginVertical = height < 500 ? height / 2 : height / 4;

    let left = this.wrap.scrollLeft,
        right = left + width;
    let top = this.wrap.scrollTop,
        bottom = top + height;

    let player = this.level.player;
    let center = player.position.plus(player.size.times(0.5)).times(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].scale);

    if (center.x < left + marginHorizontal) {
      this.wrap.scrollLeft = center.x - marginHorizontal;
    } else if (center.x > right - marginHorizontal) {
      this.wrap.scrollLeft = center.x + marginHorizontal - width;
    }

    if (center.y < top + marginVertical) {
      this.wrap.scrollTop = center.y - marginVertical;
    } else if (center.y > bottom - marginVertical) {
      this.wrap.scrollTop = center.y + marginVertical - height;
    }
  }

  addElement(name, className) {
    let elem = document.createElement(name);
    if (className) elem.className = className;

    return elem;
  }

  clear() {
    this.wrap.parentNode.removeChild(this.wrap);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DOMDisplay;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__character__ = __webpack_require__(12);



const loadResources = () => {
  const Zombie = new __WEBPACK_IMPORTED_MODULE_1__character__["a" /* Character */]();

  const loadImage = name => {

    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images[name] = new Image();
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images[name].onload = () => {
      resourceLoaded();
    };
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images[name].src = "images/" + name + ".png";
  };

  const resourceLoaded = () => {
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].numResourcesLoaded += 1;
    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].numResourcesLoaded === __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].totalResources) {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].numResourcesLoaded = 0;
      setInterval(Zombie.redrawPlayer, 1000 / __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].fps);
    }
  };

  loadImage("leftArm");
  loadImage("legs");
  loadImage("legsJumping");
  loadImage("torso");
  loadImage("rightArm");
  loadImage("characterBrain");
  loadImage("head");
  loadImage("leftArmTurnLeft");
  loadImage("legsTurnLeft");
  loadImage("legsTurnLeftJumping");
  loadImage("torsoTurnLeft");
  loadImage("rightArmTurnLeft");
  loadImage("headTurnLeft");
  loadImage("characterBrainTurnLeft");
};
/* harmony export (immutable) */ __webpack_exports__["a"] = loadResources;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state__ = __webpack_require__(0);


class Character {
  constructor() {
    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBlink || __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBreath || __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalMelt) {
      clearInterval(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBlink);
      clearInterval(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBreath);
      clearInterval(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalMelt);
    }
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBlink = setInterval(this.updateBlink, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].blinkUpdateTime);
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalBreath = setInterval(this.updateBreath, 1000 / __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].fps);
    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].intervalMelt = setInterval(this.updateMelt, 1000 / __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].fps);
  }

  redrawPlayer() {
    const playerTurnLeft = () => {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.width, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.height);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["torsoTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 18, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 88);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["headTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 128 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);

      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpingStatus) {
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legsTurnLeftJumping"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 35, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 67);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 35, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 12, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
      } else {

        /*Shadow*/
        drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 9, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 49, 65 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt * 3, 6, "black");
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legsTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 65);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 15, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
      }

      /*Right Eye*/
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 22, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 98 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "black");

      /*Left Eye*/
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 14, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 98 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "black");
    };

    const playerTurnRight = () => {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.width, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.height);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["torso"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 88);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["head"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 128 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);

      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].jumpingStatus) {
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legsJumping"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 33, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 67);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 8, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 34, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
      } else {

        /*Shadow*/
        drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 7, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 49, 65 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt * 3, 6, "black");
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legs"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 65);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 10, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt);
      }

      /*Left Eye*/
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX + 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 98 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "black");

      /*Right Eye*/
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 98 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "black");
    };

    const playerTurnLeftLost = () => {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.width, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.height);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["torsoTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 18, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 88 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);

      /*Blood*/
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 9, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 49 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 65 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 6, "red");
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legsTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 65 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArmTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 15, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["characterBrainTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 7 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 116 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 4);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["headTurnLeft"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 128 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);

      /*Right Eye*/
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 22, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 98 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "red");

      /*Left Eye*/
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 14, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 98 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 5 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2, "red");
    };

    const playerTurnRightLost = () => {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.width, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].canvasPlayer.height);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["torso"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 88 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);

      /*Blood*/
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 7, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 49 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 65 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 6, "red");
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["legs"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 65 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["leftArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 10, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["rightArm"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 31, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 84 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["characterBrain"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 27 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 116 - __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 4);
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.drawImage(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].images["head"], __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 32, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 128 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep);

      /*Left Eye*/
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX + 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 98 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 5, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight, "red");

      /*Right Eye*/
      drawEllipse(__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionX - 4, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].objPositionY - 98 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep, 5 + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2, __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight + __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep / 2, "red");
    };

    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].turnLeft) {
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost) {
        playerTurnLeftLost();
      } else {
        playerTurnLeft();
      }
    } else {
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost) {
        playerTurnRightLost();
      } else {
        playerTurnRight();
      }
    }
  }

  updateMelt() {
    const maxMelt = 10;
    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost && __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep < maxMelt) {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep += 0.3;
    } else if (!__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].playerLost) {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].meltStep = 0;
    }
  }

  updateBreath() {
    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathDir === 1) {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt -= __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathInc;
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt < -__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathMax) {
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathDir = -1;
      }
    } else {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt += __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathInc;
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathAmt > __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathMax) {
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].breathDir = 1;
      }
    }
  }

  updateBlink() {
    const blink = () => {
      __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight -= 1;
      if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight <= 0) {
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].eyeOpenTime = 0;
        __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].curEyeHeight = __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].maxEyeHeight;
      } else {
        setTimeout(blink, 10);
      }
    };

    __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].eyeOpenTime += __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].blinkUpdateTime;
    if (__WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].eyeOpenTime >= __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].timeBtwBlinks) {
      blink();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Character;


const drawEllipse = (centerX, centerY, width, height, color) => {
  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.beginPath();
  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.moveTo(centerX, centerY - height / 2);
  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.bezierCurveTo(centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2, centerX, centerY + height / 2);

  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.bezierCurveTo(centerX - width / 2, centerY + height / 2, centerX - width / 2, centerY - height / 2, centerX, centerY - height / 2);

  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.fillStyle = color;
  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.fill();
  __WEBPACK_IMPORTED_MODULE_0__state__["a" /* state */].contextPlayer.closePath();
};

/***/ })
/******/ ]);