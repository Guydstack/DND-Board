const router = require("express").Router();


const {
    getAllUserForms,
    deleteUserFormById,
    addUserForm
} = require('../controllers/contact_controller');




router.post('/add-user-contact-form', addUserForm);
router.get('/user-forms', getAllUserForms);
router.delete('/delete-user-form/:_id', deleteUserFormById);


module.exports = router;