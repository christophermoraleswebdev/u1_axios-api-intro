console.log('working')
// DOM Getters are set up
const button = document.querySelector('button')
const breedInput = document.querySelector('input')
const imageDiv = document.querySelector('div')


// async and await
const getBreeds = async () => {
      const dogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all')
      console.log(dogBreeds.data.message)
}
getBreeds()

// Functionality 
// Event Listeners 
button.addEventListener('click', async ()=> {
      let breed = breedInput.value
      let response = await axios.get(
          `https://dog.ceo/api/breed/${breed}/images/random`
        )
        //drilling our data response
        let dogPic = response.data.message
        //setting our DOM image
        imageDiv.innerHTML = `<img src=${dogPic} width="350">`
})