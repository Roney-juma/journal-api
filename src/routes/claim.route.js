const claimController = require("../controllers/claim.controllers")
const express =require("express")

const router = express.Router();


router.post('/create',claimController.createClaim )
router.get('/',claimController.getClaims )
router.patch('/approve/:id',claimController.approveClaim)
router.delete('/delete/:id', claimController.deleteClaim)
router.patch('/reject/:id', claimController.rejectClaim)
router.get('/:id', claimController.getClaimById)

module.exports = router;