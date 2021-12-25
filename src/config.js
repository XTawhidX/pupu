module.exports = {
    token: process.env.TOKEN || "OTA3NTU1MTg1ODk3OTAyMTEw.YYo4oQ.f3WZZJhQRbGfXLSeOk_rUPcO3-g",  // your bot token
    prefix: process.env.PREFIX || ".", // bot prefix
    ownerID: process.env.OWNERID || "630773653415395340", //your discord id
    SpotifyID: process.env.SPOTIFYID || "cc127dea9a104db5815fd31eb577bc67", // spotify client id
    SpotifySecret: process.env.SPOTIFYSECRET || "f2699365301e493693e5984f108217ac", // spotify client secret
    mongourl: process.env.MONGO_URI || "mongodb+srv://XTawhidX:XTawhidX41798@cluster0.63ce4.mongodb.net/data", // MongoDb URL
    embedColor: process.env.COlOR || "#FFC286", // embed colour
    logs: process.env.LOGS || "914172879145414696", // channel id for guild create and delete logs 

  nodes: {
     
      host: "disbotlistlavalink.ml",
      port: 443,
      password: "LAVA",
      id: "DisBotlist Lavalink",
      retryDelay: 3000,
      secure: true
    
    },
 
}
