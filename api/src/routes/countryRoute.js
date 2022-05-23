const { Router } = require('express');
const { getCountryById } = require('../controllers/countryController');


const router = Router()

router.get('/:id', async function(req,res){
    const {id} = req.params;
    try {
       let country = await getCountryById(id)
       if(country) res.status(200).send(country)
       else res.status(404).send('Pais no encontrado')
    } catch (error) {
        console.log('Error en CountryRoute', error)
    }
    
})

module.exports = router
