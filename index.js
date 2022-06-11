
  const content = document.getElementById('content')
  content.textContent = 'The Fish Tank'

  const fishTankGlass = document.getElementById('fish-tank-glass');

 


  


  // fishTankGlass.appendChild()
  console.log(fishTankGlass)

  const arr = ['red-fish', 'blue-fish', 'purple-fish']
  
  const makeFishes = (fish) => {
    const testFish = document.createElement('img')
    const coinFlip = Math.floor(Math.random() * 2)
    const fishPosition = Math.floor(Math.random() * 3)
    const horizontalFishPosition = Math.floor(Math.random() * 77) + .5
    let direction;
    direction = coinFlip > 0 ? 'left' : 'right'
    console.log(direction)

    testFish.id = `test`
    // testFish.classList.add(arr[fish])
    testFish.style.backgroundImage = `url(https://raw.githubusercontent.com/tlq68/FishHome/main/images/${direction}-Fish-${fishPosition+1}-50px.gif)`
    testFish.style.top = `${horizontalFishPosition}%`
    testFish.classList.add('test-fish')
    testFish.classList.add('fish') 

    coinFlip > 0 ? testFish.classList.add('left-fish') : testFish.classList.add('right-fish') 
    fishTankGlass.appendChild(testFish)
      
  
  }

  
  

  const removeFish = async () => {
    fishTankGlass.removeChild(document.getElementById('test'))
  }

  function firstFunction() {
    return new Promise((resolve, reject) => {
        let y = 0
        setTimeout(() => {
          const result = Math.floor(Math.random() * 3)
           makeFishes(result)
          //  console.log('Loop completed.')  
           resolve(y)
        }, 2000)
    })
  }
  
  async function secondFunction() {
      // console.log('Before promise call.')
      const result = await firstFunction()
      setTimeout(removeFish, 7000)
      secondFunction()
      // console.log('Promise resolved: ' + result)
      // console.log('Next step.')
  }; 

  
  
  
    secondFunction()
  