const router = require("express").Router();


// auth middlewares
const auth_manager = require('../middlewares/auth_manager');


// functions from managers controllers
const {
    loginManager,
    logoutManager,
    authManager,
    addManagerForAdmins,
    recoveryPassword,
    updatePassword,
    getAll,
    updateById,
    deleteById,
} = require('../controllers/managers_controller');


// function from users controller
const {
    getAllCustomersForManager,
    getCustomerByIdForManager,
    deleteUserByIdForManager,
    updateUserByIdForManager,
    addUserForManager
    
} = require('../controllers/users_controller');


// admins request
router.post('/admins/add-manager', addManagerForAdmins);
router.get('/managers/getall', getAll);
router.put('/managers/update-by-id-for-manager/:admin_id',updateById);
router.delete('/managers/delete-by-id-for-manager/:admin_id',deleteById);


// managers requests
router.post('/managers/login', loginManager);
router.get('/managers/logout',auth_manager, logoutManager);
router.get('/managers/auth',authManager);
router.post('/add-user-for-managers', addUserForManager);
router.get('/customers-for-managers', getAllCustomersForManager);
router.get('/customer-by-id-for-manager/:user_id', getCustomerByIdForManager);
router.delete('/delete-user-for-managers/:user_id', deleteUserByIdForManager);
router.put('/update-user-for-managers/:user_id', updateUserByIdForManager);
router.post('/send_recovery_email',recoveryPassword)
router.put('/update-password-managers/:user_email',updatePassword)

// __________________

module.exports = router;
