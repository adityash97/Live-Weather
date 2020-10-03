class UI{
    constructor(){
        this.div = document.querySelector('#showOutput')
        this.output = ''
    }
    showProfile(profile){
        this.clearAlert()
        this.output =`
                <div class="container ">
                    <div class="card card-body">
                        <div class="row">
                            <div class="col-md-4 mb-2"> 
                             <img src="${profile.avatar_url}" alt="img" class="img-fluid mb-3">
                             <a href="${profile.url}" class="btn btn-primary btn-block"> ${profile.name}</a>
                            </div>
                            <div class="col-md-8">
                                <span class="badge badge-primary mb-1">Public Repo: ${profile.public_repos}</span>
                                <span class="badge badge-secondary mb-1">Public Gists: ${profile.public_gists}</span>
                                <span class="badge badge-success mb-1">Followers: ${profile.followers}</span>
                                <span class="badge badge-info mb-1">Following: ${profile.following}</span>
                                <br>
                                <br>
                                <ul class="list-group">
                                    <li class="list-group-item">Id: ${profile.id} </li>
                                    <li class="list-group-item">Bio: ${profile.bio} </li>
                                    <li class="list-group-item">Location: ${profile.location} </li>
                                    <li class="list-group-item">Email: ${profile.email} </li>
                                    <li class="list-group-item">Created On: ${profile.created_at} </li>
                                </ul>
                            </div>
                        </div>
                    
                    </div>
                </div>
            `
            this.div.innerHTML = this.output
    }
    showAlert(msg){
        // alert(msg)
        //if alert is there then clearning it.
        this.clearAlert();
        const parent = document.querySelector('#parentDiv')
        const child = document.querySelector("#childDiv")
        const alertDiv = document.createElement('div')
        alertDiv.className = 'alert alert-danger'
        alertDiv.appendChild(document.createTextNode(msg))
        parent.insertBefore(alertDiv,child)

        setTimeout(()=>{
            alertDiv.remove() 
        },3000)
    }
    clearAlert(){
        const alert = document.querySelector('.alert')
        if(alert){
            alert.remove()
        }
    }
    clearDisplay(){
        this.div.innerHTML = ''
    }
}