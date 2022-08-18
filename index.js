var company = require('./src/company')
var axios = import('axios')

module.exports = {
    getCompany: function(companyID) {

        var companyData = null;

        axios.get("https://rpo-api.0x0.sk/api/organization/?ipo=" + companyID)
        .then(response => (companyData = response))

        company.CompanyName = companyData.name

        return company
    }
}