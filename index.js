
  const content = document.getElementById('content')
  content.textContent = 'The Fish Tank'

  const fishTankGlass = document.getElementById('fish-tank-glass');

 
  const fishPosition = Math.floor(Math.random() * 3)

  const coinFlip = Math.floor(Math.random() * 2)

  console.log(coinFLip > 0 ? 'driftLeft' : 'driftRight')

  // fishTankGlass.appendChild()
  console.log(fishTankGlass)

  const arr = ['red-fish', 'blue-fish', 'purple-fish']
  
  const makeFishes = (fish) => {
    const testFish = document.createElement('img')
    testFish.id = `test`
  testFish.classList.add(arr[fish])
  testFish.classList.add('fish')  
  fishTankGlass.appendChild(testFish)
    
  
  }

  
 console.log(fishPosition)
  

  const removeFish = async () => {
    fishTankGlass.removeChild(document.getElementById('test'))
  }

  function firstFunction() {
    return new Promise((resolve, reject) => {
        let y = 0
        setTimeout(() => {
          const result = Math.floor(Math.random() * 3)
           makeFishes(result)
           console.log('Loop completed.')  
           resolve(y)
        }, 2000)
    })
  }
  
  async function secondFunction() {
      console.log('Before promise call.')
      const result = await firstFunction()
      setTimeout(removeFish, 3000)
      secondFunction()
      console.log('Promise resolved: ' + result)
      console.log('Next step.')
  }; 

  
  
  
    secondFunction()
  