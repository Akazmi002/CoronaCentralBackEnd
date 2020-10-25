import { Injectable } from '@nestjs/common';

import { HttpService } from '@nestjs/common';
const axios = require('axios');


@Injectable()
export class BestTimeService {
    constructor(private httpService: HttpService) { }
    forecastData: Object

    async getBusyness(address: String, name: String) {
        /*console.log('whats poppin');
        let privateKey = "pri_7f33e89b0c0244e7819af6b573f24a28";
        let publicKey = "pub_aceb9d3e7f0e4d57962091f1d3dabf70";
        let forecastURL = `https://besttime.app/api/v1/forecasts?api_key_private=${privateKey}&venue_name=${name}&venue_address=${address}`;

        console.log(forecastURL);
        const busynessData = await this.httpService.post(forecastURL).toPromise();
        console.log('after first call')
        let newData = busynessData.data;
        console.log(newData);
        
        let venueId = newData.venue_info.venue_id;
        let nowForecast = `https://besttime.app/api/v1/forecasts/now?api_key_public=${publicKey}&venue_id=${venueId}`;
        console.log(nowForecast);
        const nowData = await this.httpService.get(nowForecast).toPromise();
        //console.log(nowData.data);

        return { weekAnalysis: newData, nowStuff: nowData.data };*/

        console.log('whats poppin');
        let privateKey = "pri_72030dacdcf14a388546af143df85a67";
        let publicKey = "pub_6ee611f72a0a4b2ab5fbd0992780fff6";
        let forecastURL = `https://besttime.app/api/v1/forecasts?api_key_private=${privateKey}&venue_name=${name}&venue_address=${address}`;

        //console.log(forecastURL);
        let finalData = {}

        const busynessData = await this.httpService.post(forecastURL).toPromise()
            .then(async data => {
                let newData = data.data;
                console.log(newData);
                let venueId = newData.venue_info.venue_id;
                let nowForecast = `https://besttime.app/api/v1/forecasts/now?api_key_public=${publicKey}&venue_id=${venueId}`;
                //console.log(nowForecast);
                console.log("NOWFORECAST: " + nowForecast);
                const nowData = await this.httpService.get(nowForecast).toPromise()
                    .then(data2 => {
                        console.log('both apis work');
                        console.log(newData);
                        console.log("NOWDATA: " + JSON.stringify(data2.data.analysis.hour_analysis));
                        //return { weekAnalysis: newData, nowStuff: data2.data.analysis.hour_analysis };
                        //return typeof newData.data.analysis.hour_analysis
                        //return { nowData: data2.data.analysis.hour_analysis };
                        //finalData = data2.data.analysis.hour_analysis;
                        let quietLoudHours = newData.analysis.map(day => ({
                            dayInfo: day.day_info.day_int,
                            quietHours: day.quiet_hours,
                            busyHours: day.busy_hours
                        }))
                        console.log("ARRAYTESTS: " + JSON.stringify(quietLoudHours));
                        let nowdata = data2.data.analysis.hour_analysis;
                        console.log("INDEX: " + JSON.stringify(data2.data));
                        let oneQuietLoudHour = quietLoudHours[data2.data.day_int];
                        console.log("TEST QUIET: " + oneQuietLoudHour);
                        
                        finalData = { weekAnalysis: quietLoudHours, nowStuff: data2.data.analysis.hour_analysis };
                        //this.forecastData = data2.data.analysis.hour_analysis
                        //finalData = data2.data.analysis.hour_analysis;
                        //finalData = { weekAnalysis: oneQuietLoudHour, nowData: nowdata}
                    })
                    .catch(error2 => {
                        console.log("SECONDAPI" + JSON.stringify(error2));
                        return {};
                    })
            })
            .catch(error => {
                //console.log(error);
                return {};
            });

        return finalData;

        // //let schemaData = nowData.data.map(place => ({
        // axios.post(forecastURL)   
        // .then(response => {
        //     console.log("VID: " + response.data.venue_info.venue_id);
        //     let nowForecast = `https://besttime.app/api/v1/forecasts/now?api_key_public=${publicKey}&venue_id=${response.data.venue_info.venue_id}`;
        //     axios.get(forecastURL)
        //     .then(response2 => {
        //         // console.log("Answer: " + response2.data.analysis.hour_analysis)
        //         console.log("Answer: " + JSON.stringify(response2))
        //         return { nowData: response2.data.analysis.hour_analysis };
        //     })
        //     .catch(error2 => {
        //         console.log("ERROR2 " + JSON.stringify(error2))
        //         console.log("Shabab")
        //         return {}
        //     })
        // })     
        // .catch(error => {
        //     //console.log("ERRORX: " + JSON.stringify(error));
        //     return {}
        // })

        // return true; 

        // {
        //     analysis: {
        //       hour_analysis: { hour: 21, intensity_nr: 1, intensity_txt: 'Above average' }
        //     },
        //     epoch_analysis: 1603598736,
        //     forecast_updated_on: '2020-10-25T04:32:01.066597+00:00',
        //     status: 'OK',
        //     venue_info: {
        //       venue_current_gmttime: 'Sunday 2020-10-25 04:32AM',
        //       venue_current_localtime_iso: 'Saturday 2020-10-24 09:32PM',
        //       venue_id: 'ven_51387131543761435650505241346a394a6432395362654a496843',
        //       venue_name: "McDonald's",
        //       venue_timezone: 'America/Los_Angeles'
        //     }
        //   }
        //}))
        // let googleDataReconfigured = googleData.data.results.map(place => ({
        //     address: place.vicinity,
        //     name: place.name,
        //     longitude: place.geometry.location.lng,
        //     latitude: place.geometry.location.lat,
        // }));
        //https://stackoverflow.com/questions/50355670/nestjs-returning-the-result-of-an-http-request/50372308
        //https://docs.nestjs.com/techniques/http-module
        /*const response = await fetch(forecastURL, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
        }).then(data => {
            let busynessResponse = data.json();
            console.log('inside fetch request');
            console.log(busynessResponse);
            //let venueId = data.json().venue_info.venue_id;
        }).catch(err => {
            console.log("INSIDE ERROR BLOCK");
            console.log(err);
        });
        console.log("end of getBusyness");*/

    }




}