const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.json([
        {
            n: "Painting",
            p: "10000"
        },
        
        {
            n: "Sketch",
            p: "10000"
        }
    ])
})

module.exports = router;