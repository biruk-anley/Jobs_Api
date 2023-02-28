// a function controler that is used to make crud operation get update....

const getAllJobs = async (req, res) => {
    res.send('getAllJObs')
}

const getJob = async (req, res) => {
    res.send('getJob')
}
const createJob = async (req, res) => {
    res.send('createJob')
}
const updateJob = async (req, res) => {
    res.send('updateJob')
}
const deleteJOb = async (req, res) => {
    res.send('deleteJOb')
}


module.exports = {
    getAllJobs,
    createJob,
    getJob,
    updateJob,
    deleteJOb
}