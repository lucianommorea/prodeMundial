const { Router } = require('express');
const { getCountryById } = require('../controllers/countryController');


const router = Router()

router.get('/:id', async function(req,res){
    const {id} = req.params;
    try {
       let country = await getCountryById(id)
       if(country) res.status(200).send(country)
       else res.status(404).send('Country not found')
    } catch (error) {
        console.log('Error in CountryRoute', error)
    }
    
})

module.exports = router
