/**************************************************************************************
* This file is provided for you to use for any Application services you may create
*
*  If you would prefer a file with a different name for your services, 
*     simply create one 
***************************************************************************************/
import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:8080"
})

export default {
    getAllRestaurants() {
        return http.get('/restaurants');
    },

    getRestaurantById(id) {
        return http.get(`/restaurant/${id}`);
    }
}