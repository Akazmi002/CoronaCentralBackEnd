import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';


@Injectable()
export class GooglePlaceService {
    constructor(private httpService: HttpService) { }

    async getPlaces(inputText: String, inputLat: String, inputLong: String) /*: Promise<>*/ {
        const googleData = await this.httpService.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${inputLat},${inputLong}&radius=3000&keyword=${inputText}&key=AIzaSyCNS9YWKKgPXBAJ2swzCarY3F5OOnL2qg8&rankby=prominence`).toPromise(); //CHECK IF IT WORKS

        let googleDataReconfigured = googleData.data.results.map(place => ({
            address: place.vicinity,
            name: place.name,
            longitude: place.geometry.location.lng,
            latitude: place.geometry.location.lat,
        }));
        console.log(googleDataReconfigured);
        return googleDataReconfigured;

        
        
       


    }

}
