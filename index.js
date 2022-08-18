const { default: axios } = require('axios');

const getCompany = async(companyID) => {
    return axios.get("https://rpo-api.0x0.sk/api/organization/?ipo=" + companyID)
    .catch(err => console.log(err));
}

module.exports.getCompany = getCompany;
