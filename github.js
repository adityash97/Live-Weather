

class Github{
    constructor(){
        this.client_id = '0baec0aeabd7a6ef81c7'
        this.client_secret = 'b3c5d03d31baabc03259de325fcd7a655f89d264'
    }

    async getProfile(user_name){
        const profile_data = await fetch(`https://api.github.com/users/${user_name}
                 ?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile = await profile_data.json()
        return {
            profile
        }
        
    }
}