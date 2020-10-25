import { Controller, Post, Get, Body } from '@nestjs/common';
import { GooglePlaceService } from './googlePlace.service';
import { BestTimeService } from './bestTime.service';

@Controller('coronaCentral')
export class ApiController {
    constructor(private readonly googlePlaceService: GooglePlaceService, 
                private readonly bestTimeService: BestTimeService ) {}

    /*@Get('voting') {}*/
    @Get()
    helloCutie() {
        console.log('what it do thicky')
        return "Akif";
    }
    

    @Post()
    async placeholderName(@Body('inputText') inputText: string, 
                        @Body('latitude') latitude: string,
                        @Body('longitude') longitude: string) {
                            
        let googleData = await this.googlePlaceService.getPlaces(inputText, latitude, longitude)
        //let bestTimeData = await this.bestTimeService.getBusyness("McDonalds", "Ocean Ave, San Fransisco");

    //address: '24th &, Guadalupe St, Austin',
    // name: 'Starbucks',
    // longitude: -97.7412748,
    // latitude: 30.2860638
        console.log('asdfasdfasdfasdfasdf');
        
        let refactoredData = [];
        for (let i = 0; refactoredData.length < 5 && i < googleData.length; i++) {
            let refactoredPlace = googleData[i];
            let businessData = await this.bestTimeService.getBusyness(refactoredPlace.address, refactoredPlace.name)
            if (JSON.stringify(businessData) != "{}") {
                console.log("BUSINESS: " + JSON.stringify(businessData));
                let refacLocData = {           
                    placeName: refactoredPlace.name,                     
                    business: JSON.stringify(businessData),
                    longitude: refactoredPlace.longitude,                     
                    latitude: refactoredPlace.latitude,
                    placeAddress: refactoredPlace.address
                }            
                refactoredData.push(refacLocData);
            }
            //console.log("BUSINESS: " + businessData);
            //if (businessData != undefined) {
                //console.log(JSON.stringify(businessData.data));
                //console.log('peeeeeepeeeeee');
            //}

            //console.log(typeof businessData);
            //console.log('pooopooo')
            // .then(business => {
            //     console.log(business);
            //     console.log('zzzzzzzzzzzz');
            //     if (JSON.stringify(business) != "{}") {
            //         console.log("i hate programming");
            //         let refacLocData = {
            //             placeName: refactoredPlace.name,
            //             //now: businessData.nowStuff.analysis.hour_analysis,
            //             now: JSON.stringify(business),
            //             longitude: refactoredPlace.longitude,
            //             latitude: refactoredPlace.latitude
            //         }
            //         refactoredData.push(refacLocData);
            //     }
            // })
            // .catch(err => {
            //     console.log(err);
            //     console.log("javascript aint working");
            // })
        }
        console.log(refactoredData);
        console.log(refactoredData.length)
        console.log('asdfasdkfjhalksdhjfalskdfjhalskdfjh');
        return { places: refactoredData };



        /*let cntr = 0;
        console.log(googleData.length);
        let finalData = await googleData.map(async function(location) {

            console.log(location.address);
            cntr++;
            console.log('Counter: ' + cntr)
            console.log(location.name);
            let businessData = await this.bestTimeService.getBusyness(location.address, location.name);

            let finalLocationData = {           
                placeName: location.name,
                now: businessData.nowStuff.analysis.hour_analysis,
                //peakHour_start: businessData.peak_hours.peak_start,
                //peakHour_end: b
                usinessData.peak_hours.peak_end,
                longitude: location.longitude,
                latitude: location.longitude              
                days: [
                    { 
                        day: 
                        
                    },
                    {
                        
                    }
                ]
            }
            return finalLocationData;
        });
        
        for (let x = 0; x < 5; x++){
            finalData
        }
        console.log
        console.log('Counter: ' + cntr);
        console.log(finalData);
        return finalData;*/

    }
    // {
    //     // now is core feature
    //     placeName: "McDonalds",
    //     now: {
    //         intensity_nr: 2,
    //         intensity_txt: "HIGH"
    //     }, 
    //     peakHour_start: 0,
    //     peakHour_end: 8,
    //     longitude: 0.0,
    //     latitude: 0.0,
    
}
