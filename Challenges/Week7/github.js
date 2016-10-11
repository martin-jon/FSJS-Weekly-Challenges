//See readme for challenge instructions

return new Promise( function(resolve, reject) {
    var options = {
        host: 'api.github.com',
        path: '/users/' + username + '/repos',
        headers: {
            'User-Agent': "bumbolio"
        }
    }
})

/*
 * Note about github api: requires User-Agent header to be set. This can be done
 * in Node by passing an options object (rather than a simple url string) as the 
 * first param to the https.get() function
 *
 * So something like
 * var options = {
 *   hostname: api.github.com,
 *   path: <<try to find in documentation linked in readme>>,
 *   headers: {
 *     'User-Agent': '<<your github username>>'
 *   }
 * };
 *
 */

function getRepos(username){
  console.log('Repos for ' + username);
}
