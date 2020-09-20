

class Github{
    constructor(){
        this.client_id = 'ur_id'
        this.client_secret = 'ur_pass'
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