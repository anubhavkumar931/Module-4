
(function(window) {
        var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
        
        for (var i in names ) {
            firstName = names[i];

            var firstLetter = firstName[0].toLowerCase();

            
            if (firstLetter === 'j' /* ) {
                byeSpeaker.speak(firstName);
            
            } else {
                helloSpeaker.speak(firstName);
            
            }
        }
    }

)(window);