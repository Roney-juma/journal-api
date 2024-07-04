const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');
const { userService } = require('../services');



const createUser = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).json({ success: true, message: 'Success', data: user })
});

const getUsers = catchAsync(async (req, res) => {
    const users = await userService.getAllUsersErp()
    res.status(httpStatus.OK).json({ success: true, message: 'Success', data: user })
});

const getUser = catchAsync(async (req, res) => {
    try {
        const user = await userService.getUserErp(token, req.params.userId)
        res.status(httpStatus.OK).json({ success: true, message: 'Success', data: user })
    } catch (error) {
        res.status(500).json({ message: 'Server side error' });
    }

});

const updateUser = catchAsync(async (req, res) => {
    const user = await userService.updateUserById(req.params.userId, req.body);
    res.status(httpStatus.OK).json({ success: true, message: 'Success', data: user })
});

const deleteUser = catchAsync(async (req, res) => {
    const dltUser = await userService.deleteUserById(req.params.userId);
    res.status(httpStatus.OK).json({ success: true, message: 'Success', data: dltUser })
});

const getAllUsers = catchAsync(async (req, res) => {
    try {
        const data = await userService.getAllUsers(req.query);
        res.status(httpStatus.OK).json({ success: true, ...data })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({ success: false, message: error?.message, data: error });
    }
})

const getApprovalAdmins = catchAsync(async (req, res) => {
    try {
        const data = await userService.getApprovalManagers();
        res.status(httpStatus.OK).json({ success: true, message: data?.message, data: data?.data })
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({ success: false, message: error?.message, data: error });
    }
})
module.exports = {
    getToken,
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getApprovalAdmins
};
