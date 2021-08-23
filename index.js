let { loadImage:xd } = require('canvas')
let c = require('canvas')
module.exports = c
let get = require('simple-get')
module.exports.loadImage = function(url)
{
    return new Promise((res, rej) => get.concat({
        url: url,
        headers: {
            'user-agent': 'https://github.com/discordPrisma/convos'
        }
    }, function(err, resp, data){
        if(err)
        {
            return res(xd(url))
        }
        return res(xd(data))
    }))
}