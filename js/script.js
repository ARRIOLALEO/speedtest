// get all the elements in our page
const word = document.getElementById("word")
const text = document.querySelector("#text")
const scoreEl = document.getElementById("score")
const timeEl = document.querySelector("#time")
const endGameEl = document.querySelector(".end-game-container")
const settingsBtn = document.getElementById("settings-btn")
const settings =document.getElementById("settings")
const settingsForm = document.getElementById("settings-form")
const difficultyLevel = document.getElementById("difficulty")

const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
  ];

  // inital word
  let randomWord

  // init the score
  let score = 0

  // init time
  let time = 10

  