
//creating object of UI class
const ui = new UI();
//creating object of Weather class
const weather = new Weather();

//Taking save Button and adding Event Listener
const chnageBtn= document.getElementById("change-btn")
chnageBtn.addEventListener('click',()=>{
    let country = document.getElementById("country").value
    let city = document.getElementById('city').value
    if (country){
        Data = weather.getData(country,city)
        country = ''
        city=''
        Data.then( data =>{
           console.log(data)
           ui.show(data);
        })
    }else{
     ui.showAlert("Please fille the form",'alert alert-danger');
    } 
})

document.addEventListener('DOMContentLoaded',()=>{
    ui.showDefault();
})



