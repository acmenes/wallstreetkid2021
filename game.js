const startBtn = document.getElementById("start-game")
const gameArea = document.getElementById("game")
const titleImg = document.getElementById("title-screen")
const textArea = document.getElementById("text-area")
const buttonArea = document.getElementById("button-area")
const adviceArea = document.getElementById("advice-area")
const stockTable = document.getElementById("stocktable")
const stockArea = document.getElementById("stock-data")
const trendingNews = document.getElementById("trending-news")
const trendingButtons = document.getElementById("trending-news").children
const cashCount = document.getElementById("cash")
const investmentsCount = document.getElementById("investments")

const askSawItButton = document.createElement("button")

adviceArea.appendChild(askSawItButton)
askSawItButton.innerText = "Get Sound Investment Advice from The Interwebs"
askSawItButton.setAttribute("type", "button")
askSawItButton.setAttribute("class", "btn btn-info")
askSawItButton.setAttribute("id", "advice")
askSawItButton.addEventListener("click", function (e) {
    e.preventDefault()
    askSawIt();
})

let larryCount = 0

const sawitAdvice = [
    "wildmongoose666 says: hahahaha i used to have a brokia phone and I played snake on it all day",
    "gamerbroOVER9000 says: i used to work at lamestop, power to the gamers moar like we give you two cents for your copy of madden2k20 hahahah get bodied",
    "wholesomebigchungus420 says: okay, get this... lamestop, brokia, acm theatres, bed bath and more, canada air... i hear from ummm one of my sources... that a hedgefund wants to offload these stonks.... what if we were to all BUY them now!?!?!",
    "professorchaos says: hey fellas, my grandma gave me $100 for my birthday what should I buy?",
    "notthesheriffofnottingham says: hey everyone, I think Carambada is going to tank the stock market, maybe we should leave investing to the pros",
    "calladootyg4mer says: hey have you seen wall st kid on the nes the grumpy gamers were playing it LOL it looks so weird n dum",
    "gordengekoiskewl says: im not leavin IM NOT ****IN LEAVIN",
    "joe s. says: TO THE MOOOOOOOON!",
    "crazyd00d says: FACEPAGE IS STEALING UR DATA!!! U SHEEP!!!!!",
    "Mr Daniel C says: I stole my grandma's savings and put it all on DogeCoin. Stonks is the best!",
    "frozenDiG says: *diamond emoji* *hands emoji*",
    "snoopy_20111 says: Electric typewriters. They're the next big thing... but you didn't hear it from me.",
    "wuboy says: Y'know, I wonder. Is what we do even worth it? Are stocks truly going to make you happy? The constant rise and fall, gambling your money away, and starting anew, over and over? If someone asks you this question, you tell 'em: 'HELL YEA BUDDY, I'M MAKING MONEEEEEEEEEEEEEEEEY!'",
    "scotty mcgee says: hey kid, do ya know what you're doing?",
    "scotty mcgee says: don't forget to drink WATER!",
    "lambdacalculus says: buy WEEDCOIN! only $4.20 a share!!",
    "moondspiderhugs says: mutual funds, dawg! you be surrounded wit honeys and swimmin in white claw by dinner time!",
    "nostalgiaroadtrip says: stocks this! stocks that! when is someone gonna invest in ME!",
    "urby says: we gotta invest in TRNP, yeah yeah!",
    "sheepsmeow says: once you get the basics, its pretty easy. for the richest stock, start with cold water. dont stir, but do skim off any scum. dont over-simmer the bones. mix in aromatic veggies, herbs, and spices. NO salt",
    "oceansandrew says: maybe the best stock to invest in was the friends we made along the way *thinking emoji*",
    "TaleOfTheToaster says: if ur sat here reading the comments, u probably don't have what it takes in the stock market... u should just sit back and let the experts do the trading...",
    "new2investin says: hi frens have u herd of warren buffet he says just buy n hold buy n hold",
    "yardguy says: but whats is in the beyond section....? *thinking emojis*",
    "BENDERISGREAT says: ooh yeah cmon stonks lets go acm theaters",
    "knepsia says: just invest in exposure, its the best currency right now",
    "blockchainmaster says: ITS NOT INTERNET FUNNYMUNNY ITS REALLLLL!!!!!!!!!!!! buy milliecoin and dogecoin",
    "biginvestverywow says: DOGE COIN DOGE COIN DOGE COIN DOGE COIN!!!!!",
    "missmilliethebest says: i made my own crypto, go get some MILLIECOIN on cryptobase and carambada, givin away milliecoin to everyone today",
    "cyberbullin69 says: we r gon make this a bull market by buying all of lamestop hahahahahaha those hedgefund lame-os wont know what hit em hahahahahahhahahahahahhahahahahahah ;)"
]

const newsStories = [
    "SawIt users stormed Carambada yesterday to snap up shares of cheap stocks such as LameStop, Bed Bath and More, CanAir, Brokia, and ACM Theaters after a user named wholesomebigchungus tipped them off about a hedgefund looking to unload these stocks. This rush of investing caused stock prices to surge. Will Capital Managament, the hedgefund in question, fight back? Perhaps, but it doesn't look good for the hedge fund.",
    "Home Alone 2 Star and former President Dondoo Dump was arrested today in New York City. Looks like Melania will now be... home alone! A ha ha ha ha.",
    "'ANIMANIACS IS TOO POLICAL NOW' says HotTakeYouTubeGuy, a YouTuber with 70 subscribers. 'DOT IS A FEMINIST WHAT IS UP WITH THAT.' HotTakesYouTubeGuy makes a living creating videos containing his hot takes. His latest video only has 12 views.",
    "Millie, a 14 year old tuxedo cat from New Jersey, has become the first cat on the internet to invent her own cryptocurrency, Millie Coin. When asked for a comment, Millie's human had this to say: 'MISS MILLIE IS THE BEST AND I LOVE HER'. Her human also insists that Millie has in fact created her own crypto. It is unknown whether Millie herself actually created her own cryptocurrency or not. Because she is a cat.",
    "Elon Mu$k of Tesla and Super Villan Fame has now bought into DOGECOIN. DOGE IS UP 7000%!!!!!!!!! Doge Coin is now worth $3 a coin. Wow. Users of SawIt have been memeing hard on Doge Coin. When asked for comment, famed SawIt user wholesomebigchungus simply replied 'TO THE MOOOOOOOOOOOOON' and then launched himself into the stratosphere somehow."
]

//beginning stock values

let lamestopValue = 6
let bedbathValue = 3
let brokiaValue = 2
let acmValue = 2
let canairValue = 9

let cashValue = 50
let investmentValue = 0

cashCount.innerText = cashValue
investmentsCount.innerText = investmentValue

$("#stocktable").hide();
$("#trending-news").hide();
$("#advice").hide()

function investmentsGrowth() {
    if (investmentValue > 0) {
        console.log("investment updated")
        let randomValue = Math.floor(Math.random() * 500)
        console.log(randomValue)
        investmentsCount.innerText = investmentValue + randomValue
        if (randomValue >= 400) {
            larryCount++
            if (larryCount === 1) {
                alert("Hey.... this is Larry The Lawyer Jr... I hear you've been.... investing. How nice. It would be a *shame* if something happened to your... investments...")
            }
            else if (larryCount >= 2) {
                alert("Hey there, remember me? I'm serious. Knock it off. You don't know what you're doing. Leave investing to the... rich. I mean experienced. *cough*")
                clearInterval(investmentsGrowthFunc)
                larrythelawyerScene();
            }
        }
    }
}

function getNews1() {
    alert(newsStories[0])
}

function getNews2() {
    alert(newsStories[1])
}

function getNews3() {
    alert(newsStories[2])
}

function getNews4() {
    alert(newsStories[3])
}

function getNews5() {
    alert(newsStories[4])
}

const investmentsGrowthFunc = setInterval(investmentsGrowth, 2000)

startBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("it works!")
    startGame();
})

function startGame() {
    titleImg.setAttribute("src", "img/firstsceneimg.jpg");
    startBtn.remove();
    firstScene();
}

function firstScene() {
    const firstSceneDialogue = document.createElement("p")
    textArea.appendChild(firstSceneDialogue)
    firstSceneDialogue.innerText = "Yeah bro, so it's called Carambada, so like ANYONE can invest now bro! You don't have to be some hedge fund nerd!"
    const nextButton = document.createElement("button")
    buttonArea.appendChild(nextButton)
    nextButton.setAttribute("type", "button")
    nextButton.setAttribute("class", "btn btn-success")
    nextButton.innerText = "Next"
    nextButton.addEventListener("click", function (e) {
        e.preventDefault
        console.log("it works")
        firstSceneDialogue.remove()
        firstSceneNext();
        nextButton.remove();
    })
}

function firstSceneNext() {
    const firstSceneDialogueNext = document.createElement("p")
    textArea.appendChild(firstSceneDialogueNext)
    firstSceneDialogueNext.innerText = "Yo we should short some stocks huhuh there's some dude on SawIt named wholesomebigchungus420 who says he knows some inside scoop"
    const nextButton2 = document.createElement("button")
    buttonArea.appendChild(nextButton2)
    nextButton2.setAttribute("type", "button")
    nextButton2.setAttribute("class", "btn btn-success")
    nextButton2.innerText = "Next"
    nextButton2.addEventListener("click", function (e) {
        e.preventDefault
        console.log("it works")
        firstSceneDialogueNext.remove()
        secondScene();
        nextButton2.remove();
    })
}

function secondScene() {
    titleImg.setAttribute("src", "img/stonks.jpg")
    console.log("second scene")
    const secondSceneDialogue = document.createElement("p")
    textArea.appendChild(secondSceneDialogue)
    secondSceneDialogue.innerText = "Trading stonks is easy. Just look for whatever is currently memeing and buy it cheap!!"
    const nextButton3 = document.createElement("button")
    buttonArea.appendChild(nextButton3)
    nextButton3.setAttribute("type", "button")
    nextButton3.setAttribute("class", "btn btn-success")
    nextButton3.innerText = "$how Me the $tonks"
    nextButton3.addEventListener("click", function (e) {
        e.preventDefault
        console.log("it works")
        getStonks();
        secondSceneDialogue.remove()
        nextButton3.remove();
    })
}

function getStonks() {
    console.log("I am going to get STONKS")
    // const res = await axios.get(`https://rapidapi.com/apidojo/api/yahoo-finance1`)
    // console.log(res)
    loadStonks();
}

// function loadStonks() {
//hardcoded a table instead
//     const stockChart = document.createElement("table")
//     stockChart.setAttribute("class", "table table-bordered")
//     stockArea.appendChild(stockChart)
//     for (let c = 0; c < 4; c++) {
//         const topRowCell = document.createElement("th")
//         topRowCell.setAttribute("scope", "col")
//         topRowCell.setAttribute("id", `topRow-${c + 1}`)
//         // topRowCell.innerText = "PARAM"
//         stockChart.append(topRowCell)
//     }
//     const topCell1 = document.getElementById("topRow-1")
//     topCell1.innerText = "STOCK"
//     const topCell2 = document.getElementById("topRow-2")
//     topCell2.innerText = "VALUE"
//     for (let x = 0; x < 5; x++) {
//         const row = document.createElement("tr")
//         row.setAttribute("id", x)
//         row.addEventListener("click", handleClick);
//         stockChart.append(row)
//         for (let y = 0; y < 4; y++) {
//             const cell = document.createElement("td")
//             cell.setAttribute("id", `${x + 1}-${y + 1}`)
//             cell.innerText = "cell data"
//             row.append(cell)
//         }
//     }

// }

function loadStonks() {
    $("#stocktable").show();
    $("#advice").show()
}

function askSawIt() {
    console.log("asking sawit")
    let randomAdvice = Math.floor(Math.random() * sawitAdvice.length)
    alert(sawitAdvice[randomAdvice])
}

function buyShares() {
    //change it so it decrements the actual value of the share, and isn't just hardcoded
    //which button did the player click? where is it associated?

    console.log("BUYING SHARES")
    cashValue -= 5
    investmentValue += 5
    cashCount.innerText = cashValue
    investmentsCount.innerText = investmentValue
    //find a way to allow players NOT to buy if they don't have enough cash
    //an if statement should be used to check the players's cash value versus the stock value
    if (cashValue === 0) {
        console.log("cannot buy share")
        cashValue
        investmentValue
    }
    investmentsGrowth()
}

function sellShares() {
    console.log("SELLING SHARES")
    cashValue += 5
    cashCount.innerText = cashValue
}

function larrythelawyerScene() {
    $("#stocktable").hide();
    $("#advice").hide();
    const larrySceneDialogue = document.createElement("p")
    textArea.appendChild(larrySceneDialogue)
    larrySceneDialogue.innerText = "Hello there, young 'investor'. As I said before, I'm Larry The Lawyer. So my client, The Capital Management group, has sent me to tell you to stop shorting these stocks. You're really making it difficult for my clients. They're complaining that thanks to you and other internet... vermin, they can no longer buy a second yacht. How sad! You have sympathy for them, right?"
    // buttonArea.remove(askSawItButton)
    const nextButton4 = document.createElement("button")
    buttonArea.appendChild(nextButton4)
    nextButton4.setAttribute("type", "button")
    nextButton4.setAttribute("class", "btn btn-success")
    nextButton4.innerText = "...nah"
    titleImg.setAttribute("src", "img/larryjr.jpg")
    nextButton4.addEventListener("click", function (e) {
        e.preventDefault
        console.log("it works")
        larrySceneDialogue.remove()
        nextButton4.remove()
        larrythelawyerScenePart2();
    })
}

function larrythelawyerScenePart2() {
    titleImg.setAttribute("src", "img/larryjrmad.jpg")
    const larrySceneDialogue2 = document.createElement("p")
    textArea.appendChild(larrySceneDialogue2)
    larrySceneDialogue2.innerText = "Oh so you kids want to play hard ball? Well you'll see how hard our balls are!!! Wait, no, I mean, have a nice day young investor..."
    const nextButton5 = document.createElement("button")
    buttonArea.appendChild(nextButton5)
    nextButton5.setAttribute("type", "button")
    nextButton5.setAttribute("class", "btn btn-success")
    nextButton5.innerText = "K"
    nextButton5.addEventListener("click", function (e) {
        console.log("next scene")
        larrySceneDialogue2.remove()
        nextButton5.remove()
        theNextDay();
    })
}

function theNextDay() {
    titleImg.setAttribute("src", "img/nextmorning.jpg")
    $("#advice").show();
    const nextDayDialogue = document.createElement("p")
    textArea.appendChild(nextDayDialogue)
    nextDayDialogue.innerText = "You go on Tweeter, the most reputable of news sources, and you see a bunch of trending hashtags. Take some time to read the news."
    $("#trending-news").show();
    const nextButton6 = document.createElement("button")
    buttonArea.appendChild(nextButton6)
    nextButton6.setAttribute("type", "button")
    nextButton6.setAttribute("class", "btn btn-success")
    nextButton6.innerText = "Done Doomscrolling"
    nextButton6.addEventListener("click", function (e) {
        $("#trending-news").hide();
        console.log("next scene")
        nextDayDialogue.remove()
        nextButton6.remove()
        investmentUp()
    })
}

function investmentUp() {
    titleImg.setAttribute("src", "img/stocksup.jpg")
    const investmentUpDialogue = document.createElement("p")
    investmentUpDialogue.innerText = `HOLY HECKBALLS! Your investments are worth a metric butt load of money!! You've never even SEEN that much money in your life!! Wow!! Shorting $tonks sure is wild you say. Maybe now you can afford to pay off your crippling student loan debt. Oh wait, nevermind, you're still broke. But hey, you had some fun investing and you learned a little something. Neat!`
    textArea.appendChild(investmentUpDialogue)
    investmentValue = 1000.2
    investmentsCount.innerText = investmentValue
    const nextButton7 = document.createElement("button")
    buttonArea.appendChild(nextButton7)
    nextButton7.setAttribute("type", "button")
    nextButton7.setAttribute("class", "btn btn-success")
    nextButton7.innerText = "hooray for $tonks, let's see what's next"
    nextButton7.addEventListener("click", function (e) {
        console.log("next scene")
        nextButton7.remove()
        investmentUpDialogue.remove()
        larryReturns();
    })
}

function larryReturns() {
    titleImg.setAttribute("src", "img/larryjrmad.jpg")
    const larryReturnsDialogue = document.createElement("p")
    textArea.appendChild(larryReturnsDialogue)
    larryReturnsDialogue.innerText = "I TOLD YOU NOT TO MESS WITH THE STOCK MARKET YOU LITTLE DIRTBAG!!!! "
    const nextButton8 = document.createElement("button")
    buttonArea.appendChild(nextButton8)
    nextButton8.setAttribute("type", "button")
    nextButton8.setAttribute("class", "btn btn-success")
    nextButton8.innerText = "D:"
    nextButton8.addEventListener("click", function (e) {
        console.log("next scene")
        nextButton8.remove()
        larryReturnsDialogue.remove()
        larryReturnsPart2();
    })
}

function larryReturnsPart2() {
    alert("oh no! your $tonk value went down")
    investmentValue = 80
    investmentsCount.innerText = investmentValue
    const larryThreat = document.createElement("p")
    textArea.appendChild(larryThreat)
    larryThreat.innerText = "YOU ARE A STAIN ON THE BOTTOM OF THE SHOE OF THE UPPER CLASS!!!! WE HAVE ORDERED CARAMBADA TO NO LONGER ALLOW SALES OF THESE MEME STOCKS. A HA HA HA HA HA HA. WE ARE PLAYING HARD BALL. I COMMAND YOU TO SELL YOUR STOCK NOW AND JUST WALK AWAY!!!!!!!!!!"
    const cashOutButton = document.createElement("button")
    buttonArea.appendChild(cashOutButton)
    cashOutButton.setAttribute("type", "button")
    cashOutButton.setAttribute("class", "btn btn-danger")
    cashOutButton.innerText = "Panic Sell and Just Take the $$$"
    cashOutButton.addEventListener("click", function (e) {
        theRichWinAgain()
        larryThreat.remove()
    })
    const holdButton = document.createElement("button")
    buttonArea.appendChild(holdButton)
    holdButton.setAttribute("type", "button")
    holdButton.setAttribute("class", "btn btn-success")
    holdButton.innerText = "EAT MY SHOES LARRY I WILL NEVER SELL"
    holdButton.addEventListener("click", function (e) {
        screwTheHedgeFunds()
        larryThreat.remove()
    })
    // twoChoices()
}

// function twoChoices() {
//     const cashOutButton = document.createElement("button")
//     buttonArea.appendChild(cashOutButton)
//     cashOutButton.setAttribute("type", "button")
//     cashOutButton.setAttribute("class", "btn btn-danger")
//     cashOutButton.innerText = "Panic Sell and Just Take the $$$"
//     cashOutButton.addEventListener("click", function (e) {
//         theRichWinAgain()
//     })
//     const holdButton = document.createElement("button")
//     buttonArea.appendChild(holdButton)
//     holdButton.setAttribute("type", "button")
//     holdButton.setAttribute("class", "btn btn-success")
//     holdButton.innerText = "EAT MY SHOES LARRY I WILL NEVER SELL"
//     holdButton.addEventListener("click", function (e) {
//         screwTheHedgeFunds()
//     })
// }

function theRichWinAgain() {
    $("#button-area").hide();
    cashValue = 0
    investmentValue = 1.72
    cashCount.innerText = cashValue
    investmentsCount.innerText = investmentValue
    console.log("being poor sucks")
    titleImg.setAttribute("src", "img/richguyslaughing.jpeg")
    const badEndText = document.createElement("p")
    textArea.appendChild(badEndText)
    badEndText.innerText = "OH NO D: you did what those hedgefund jerks wanted you to do. Turns out that they make the rules. And as soon as you enjoyed a little money, they decided to change the rules. You decide to just invest what little you have left in Doge Coin instead... but you always wonder if those hedge fund lunkheads are going to take that away from you too. :( bad end."
}

function screwTheHedgeFunds() {
    $("#button-area").hide();
    investmentValue = 1520
    cashCount.innerText = investmentValue
    console.log("hahahahaha screw the hedgefund")
    titleImg.setAttribute("src", "img/stocksup.jpg")
    const goodEndText = document.createElement("p")
    textArea.appendChild(goodEndText)
    goodEndText.innerText = "You decide to hold, and lo and behold, Capital Management was forced to shut down. Larry the Lawyer Jr. left you alone. But he actually ate your shoes. You cashed out on your $tonk money and became a thousandaire. THE END. GOOD END."
}