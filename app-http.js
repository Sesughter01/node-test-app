/**Import the HTTP MODULE and INITIALIZE IT */
const http = require('http');

/**CREATE AN HTTP SERVER AND INITIALIZE IT */

const server = http.createServer((req,res)=>{
    
    //  console.log(req.url);
      if(req.url ==='/'){
        res.end('Welcome to Tractorly Nigeria')
    }

    else if (req.url ==='/about'){
        res.end('We are an farm Equipment Locator')
    } else{

        res.end (`
    
            <h1>OOPS</h1>
            <p>Something went wrong</p>
            <a href="/">Back to Home</a>
        `)
    }
  
})

server.listen(7001);
