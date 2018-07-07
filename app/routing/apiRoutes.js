

var friends = require("../data/friends")


module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        
       
        var newFriendScores = req.body.scores;
        var scoreArray = [];
        
        var bestMatch = 0;
        

        for (var i; i <friends.length; i++) {
            var scoreDiff = 0;
            for (var j=0; j < newFriendScores.length; j++) {
                scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));

            }

            scoreArray.push(scoreDiff);
        }

        for(var i=0; i<scoreArray.length; i++){
            if(scoreArray[i] <= scoreArray[bestMatch]){
              bestMatch = i;
            }
          }

        

          var bestFriend = friends[bestMatch];
          res.json(bestFriend);

        friends.push(req.body);
    });
};