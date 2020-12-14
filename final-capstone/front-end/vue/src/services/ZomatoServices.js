import axios from 'axios';

const http = axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1"
})

const keyOne = '608eb3b4550d3c0f6a57e85f9a26fad0'
const keyTwo = 'fbea855555e5029ba34ae13446d594f8'

export default{
        getCityInfo(cityName){
            return http.get(`/locations?query=${cityName}`, {
                headers:{
                    'user-key' : keyOne
                }
            })
        },

        getAllRestaurantsByEntities(entityId, entityType){
            return http.get(`search?entity_id=${entityId}&entity_type=${entityType}`, {
                headers:{
                    'user-key' : keyTwo
                }
            })
        },

        getRestaurantById(id){
            return http.get(`/restaurant?res_id=${id}`, {
                headers:{
                    'user-key': keyOne
                }
            })
        },
        
        getAllCuisines(cityId) {
            return http.get(`/cuisines?city_id=${cityId}`, {
                headers: {
                    'user-key': keyTwo
                }
            })
        }
}