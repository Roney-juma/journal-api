


const usersSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    middle_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
    },
    contract_type: {
        type: String,
    },
    process_type: {
        type: String,
    },
    password: {
        type: String,
    },
    insurance: {
        type: Object,
    },
    reporting: {
        type: Object,
    },
    company_ID: {
        type: String,
    },
    user_status: {
        type: String,
    },
    
    workAccess: {
        type: Array
    },
    surveys: {
        type: Array
    },
    logs: {
        type: Array
    }

})

const Users = mongoose.model('Users', usersSchema)
module.exports = Users