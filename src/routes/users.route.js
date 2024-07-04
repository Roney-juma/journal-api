const express = require('express');

const router = express.Router();
const { userController } = require("../controllers/users.controller");

router
    .route('/').all()
    .post(userController.createUser)
    .get(userController.getUsers);

router.post("/login/get/token", authController.login)

router.post("/get_token", userController.getToken)

router
    .route("/login")
    .post(userController.loginOperation)

router
    .route('/:userId').all()
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

/* Old API:"/users/login"
payload: {
 email : string;
}
*/
router
    .route('/validate/login')
    .post(userController.validateLogin);

router
    .route('/validate/centralValidation')
    .post(userController.validateCentralValidation);

router
    .route('/validate/centralLogin')
    .post(userController.validateCentralLogin);

router.route("/refresh-tokens").post(authController.refreshUserTokens);

router.post('/validate/forgot-password', authController.forgotUserPassword);

router.post('/validate/reset-password', authController.resetUserPassword);

router.post('/validate/verify-otp', userController.verifyOTPSevice);


router
    .route('/company_wise_users_req_fields/:_id').all()
    .post(userController.companyWiseUsersReqField)

router
    .route('/adminCentral/usersdatabase').all()
    .post(userController.adminCentralUsersDatabase)

router
    .route('/adminCentral/searchandfilter_user').all()
    .post(userController.searchAndFilterUser)

router
    .route('/adminCentral/employeebycompany').all()
    .post(userController.employeeListByCompany)

router
    .route('/get-fields-check/:id')
    .all(verifyToken)
    .get(userController.getUserFieldCheck)

router
    .route('/update/:_id').all(verifyToken)
    .put(userController.updateUserEmployeeId)

router
    .route('/update-password').all()
    .patch(userController.updatePassword)
//  old api- users/managerEmpManagement
router
    .route('/managerEmp/manage').all()
    .get(userController.managerEmployeeManagement)

router
    .route('/reset-password/').all()
    .post(userController.resetUserPassword)

router
    .route('/teamCentral/usersdatabasecount/:manager_id')
    .get(userController.teamCentralUsersDatabaseCount)

router
    .route('/get/users')
    .get(userController.getAllUsers)

router
    .route('/approval/managers')
    .get(userController.getApprovalManagers)

router
    .route('/approval/manager/:managerId')
    .get(userController.getApprovalManagerNotOnId)

router
    .route('/get/events').all(verifyToken)
    .get(userController.events)

router
    .route('/wishes').all(verifyToken)
    .post(userController.sendWishes)

router
    .route('/payroll/req-fields').all(verifyToken)
    .post(userController.getPayrollReqFields)

router
    .route('/payroll/req-fields/:companyId').all(verifyToken)
    .post(userController.getPayrollReqFields)

router
    .route('/payroll/active-hold/req-fields/').all(verifyToken)
    .post(userController.getPayrollActiveAndHoldReqFields)

router
    .route('/addOnboarding/').all(verifyToken)
    .post(userController.addOnboarding)

router
    .route('/:info/:user_id/').all(verifyToken)
    .get(userController.getEmployeePersonalAndEmergencyInfo)


module.exports = router;
