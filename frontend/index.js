function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
      const widget = document.querySelectorAll('div') 
      widget.forEach(div => {
      div.className += ' widget'
      })
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
      const quoteArr = quotes
      const randNum = Math.floor(Math.random() * (10))
      const quote = document.createElement('div') 
      const quoteAuthor = document.createElement('div')
      quoteAuthor.textContent = quoteArr[randNum].author + " in " + quoteArr[randNum].date
      if(quoteArr[randNum].date === null){
        quoteAuthor.textContent = quoteArr[randNum].author + " in an unknown date";
      }
      quote.textContent = quoteArr[randNum].quote
      document.querySelector('.quoteoftheday').appendChild(quote)
      document.querySelector('.quoteoftheday').appendChild(quoteAuthor)
  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
      const corpSpeak = document.createElement('p')
      const random = Math.floor(Math.random() * (10))
      const randNoun = nouns[random]
      const randVerb = verbs[random]
      const randAdverb = adverbs[random]
      corpSpeak.textContent = `We need to ${randVerb} our ${randNoun} ${randAdverb} in order to ${randVerb} our ${randNoun} ${randAdverb}.`
      document.querySelector('.corporatespeak').appendChild(corpSpeak)
  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
      let count = 5
      const countdownWidget = document.querySelector('.countdown')
      const messageWeb = document.createElement('p')
      messageWeb.textContent =  `T-minus ${count}... `
      countdownWidget.appendChild(messageWeb)
      setInterval(() => {
        if(count === 1){
          messageWeb.textContent = `Liftoff! 🚀`
          //countdownWidget.appendChild(messageWeb)
        clearInterval(countdownWidget)
        }else{
          count--
          messageWeb.textContent =  `T-minus ${count}... `
          //countdownWidget.appendChild(messageWeb)
        }
      },1000)
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
      const randNum4 = Math.floor(Math.random() * (15))
      const person = people[randNum4]
      let friendArr = []
      const friendMessage = document.createElement('p')
      let message = ""
      for(let friend in person.friends){
          people.forEach(someone => {
            if(person.friends[friend] === someone.id){
            friendArr.push(` ${someone.fname} ${someone.lname}`)
            }
          })
      }
      if(friendArr.length === 0 ){
          message = `${person.fname} ${person.lname} was born in ${person.dateOfBirth.slice(0,4)} and has no friends.`
        }
      if(friendArr.length === 3){
        message = `${person.fname} ${person.lname} was born in ${person.dateOfBirth.slice(0,4)} and is friends with${friendArr[0]},  ${friendArr[1]} and ${friendArr[2]}.`
      }
      if(friendArr.length === 1){
        message = `${person.fname} ${person.lname} was born in ${person.dateOfBirth.slice(0,4)} and is friends with${friendArr}.`
      }
      if(friendArr.length === 2){
        friendArr[0] += " and " + friendArr[1]
        friendArr.pop()
        message = `${person.fname} ${person.lname} was born in ${person.dateOfBirth.slice(0,4)} and is friends with${friendArr}.`
      }
      friendMessage.textContent = message
      document.querySelector('.friends').appendChild(friendMessage);
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
        let index = 1
        const widget2 = document.querySelectorAll('.widget') 
        widget.forEach(div => {
        div.tabIndex = index
        index++
        })
  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
