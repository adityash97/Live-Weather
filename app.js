//creating object for 'Github class'
const github = new Github();
//creating class of UI
const ui = new UI();

const inputSearch = document.getElementById('inputSearch');
inputSearch.addEventListener('keyup',getUserName);

function getUserName(e) { //event function
    if(e.target.value){
        const pro = github.getProfile(e.target.value)
        pro.then( data => {
            if(data.profile.message !== 'Not Found'){
            ui.showProfile(data.profile)
            }else{
                ui.showAlert("User not found :)")
                ui.clearDisplay()
            }
           
            
        })
   
    }else{
        ui.clearDisplay()
    }
}