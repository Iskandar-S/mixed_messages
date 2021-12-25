
// Create an object to keep message components arrays organized
  const messages = {
    meta_character: ['a unicorn', 'a cyborg', 'a zombie', 'Elvis', 'a doge', 'Buzz Lightyear', 'Yoshimitsu', 'Mario', 'Homer Simpson', 'Che Guevara', 'Lizardman', 'Joe Rogan', 'Gandalf', 'Trinity', 'Darth Vader', 'Mufasa', 'Elon', 'Octocat', 'Sakura', 'Pikachu', 'Hermione', 'Wendy', 'Putin', 'AOC', 'Wonder Woman', 'Psylocke', 'Mulan', 'Daenerys', 'Moana', 'Gilfoyle', 'Roger Gracie', 'Rick', 'Eric Cartman', 'Bored Ape', 'Cathie Wood', 'Plato', 'Dr. Fauci', 'T-Rex', 'Courage the Cowardly Dog', 'Chad', 'Karen', 'Einstein'],
    attributes : ['riding a panda', 'in a space suit', 'with a black eye', 'holding a samurai spork', 'on steroids', 'walking on hands', "juggling Mjolnirs", 'flapping your arms', 'dabbing', 'sleepwalking', 'with a mohawk', 'holding a mic', 'doing backflips'],
    missions : ['find Yeti', 'start the biggest party in the metaverse', 'write a book', 'start a cult', 'start a colony on Mars', 'win 1000 tournaments', 'high five Snoop', 'end world hunger', 'find a cure for cancer', 'become UFC champion', 'find the Ultimate Question of Life, the Universe and Everything']
}

// Function to generate random numbers up to a given input number(array length in our case)
const randomNum = num => {
  return Math.floor(Math.random() * num)
}

//Create a function to randomly select the different message components to create a cohesive message
const createMessage = () => {
  let message = []

  for (let components in messages) {
    const randomComponent = randomNum(components.length)

    switch (components) {
      case 'meta_character':
        message.push(`In the metaverse you are ${messages[components][randomComponent]}`)
        break
      case 'attributes':
        message.push(`${messages[components][randomComponent]}.`)
        break
      case 'missions':
        message.push(`Your purpose is to ${messages[components][randomComponent]}.`)
        break
      default:
        console.log(`Error. Try again`)
    }
  }

  console.log(message.join(' '))
}

createMessage()