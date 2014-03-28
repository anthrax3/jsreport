﻿module.exports = {
    cookieSession: {
        key: 'jsreport.sid',
        secret: 'dasd321as56d1sd5s61vdv32',
        cookie: { domain: 'local.net' }
    },
    certificate: {
        key: 'certificates/jsreport.net.key',    
        cert: 'certificates/jsreport.net.cert'
    },
    connectionString: { name: "neDB" },
    extensions: ["express", "templates", "html", "phantom-pdf", "scripts", "data", "images", "statistics", "reports", "childTemplates"],
    mode: "standard",
    port: 443,
    httpPort: 80,
    useCluster: true
}