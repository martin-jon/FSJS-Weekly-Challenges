<<<<<<< HEAD
//See readme for challenge instructions

var github = require('./github.js');
console.log(process.argv);
var usernames = process.argv.slice(2) || ["josephmudd","codelouisville", "bumbolio"];
usernames.forEach(function(user) {
    github.getRepos(user).then(function(repolist) {
        
        
    })
})
=======
//See readme for challenge instructions
>>>>>>> upstream/master
