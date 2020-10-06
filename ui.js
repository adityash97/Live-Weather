class UI{
    constructor(){
        this.accessKey = 'Your_access_key'
        this.location = document.querySelector("#w-location")
        this.desc = document.querySelector("#w-desc")
        this.string = document.querySelector("#w-string")
        this.img = document.querySelector("#w-icon")
        this.humidity = document.querySelector("#w-humidity")
        this.observation = document.querySelector("#w-dewpoint")
        this.feelsLike = document.querySelector("#w-feels-like")
        this.wind = document.querySelector("#w-wind")
        this.storage = new Storage()

    }
    show(data){
        // data.current.temperature

        

        this.location.innerHTML = `${data.location.name} , ${data.location.country} `
        this.desc.innerHTML =     `${data.current.weather_descriptions}`
        this.string.innerHTML =   `${data.current.temperature}  &deg C`
        this.img.src = `${data.current.weather_icons}`
        this.img.alt = 'Some image'
        this.humidity.innerHTML = `Humidity : ${data.current.humidity} %`
        this.observation.innerHTML = `Observation Time: ${data.current.observation_time}`
        this.wind.innerHTML = `Wind Speed: ${data.current.wind_speed} km/h`
        this.feelsLike.innerHTML = `Feels Like : ${data.current.feelslike} &deg C`
        //inserting every data into an array
        const forInsert = [this.location.textContent,this.desc.textContent,this.string.textContent,this.img.src,this.humidity.textContent,
                            this.observation.textContent,this.wind.textContent,this.feelsLike.textContent
                        ]
        //calling storage function to save the data
        this.storage.insertData(forInsert)
    }
    showDefault(){
        const data = localStorage.getItem('weatherReport')
        JSON.parse(data).forEach((element,index)=>{
            // console.log(element)
            // console.log(index)
            switch(index){
                case 0:
                    this.location.innerHTML = element
                    break
                case 1: 
                 this.desc.innerHTML=element
                  break
                case 2:
                    this.string.innerHTML = element
                    break
                case 3:
                    this.img.src= element
                    break
                case 4:
                    this.humidity.innerHTML=element
                    break
                case 5:
                    this.observation.innerHTML=element
                    break
                case 6:
                    this.wind.innerHTML=element
                    break
                case 7:
                    this.feelsLike.innerHTML = element
                    break
            }
            
        })
    }

 showAlert(msg,cls){
    this.clearAlert();
    const parent = document.querySelector("#parent");
    const child = document.querySelector("#w-location");
    const div = document.createElement('div')
    div.className = cls
    div.appendChild(document.createTextNode(msg))
    parent.insertBefore(div,child)

    setTimeout(()=>{
        div.remove()
    },2000)

 }
 clearAlert(){
     const div = document.querySelector('.danger')
     if(div){
         div.remove()
     }
 }

}

