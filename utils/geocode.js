const request = require('request')
const urls = require('../urls/url')
const geocode = (address,callback)=>{
    const url = urls.mapBoxUrl(address)
    request({url,json:true},(error,{body})=>{
    if(error){
       callback('can\'t connected to server',undefined);
    }else if(body.features.length === 0){
        callback('No place found',undefined);
    }else{
        callback(undefined,{
           latitude:body.features[0].center[1],
           longitude:body.features[0].center[0],
           location:body.features[0].place_name
        })
    }
    })
  }

  module.exports = geocode