
//var defaultServerUrl = "http://gidevvmsrv03/dev/GiscoeOfflineBuilder/";
//var defaultServerUrl = "https://GHDEVVMSRV04.giscoe.com/GiscoeOfflineBuilder/";
//var defaultServerUrl = "https://GHPRODSRV03.giscoe.com/RBAMobile/";
var defaultServerUrl = "https://GHPRODSRV03.giscoe.com/webApps/KumbaGForms/";          /// com.giscoe.geotachnicalinspections    // current appstore version:5   // Geotechnical Inspections
//var defaultServerUrl = "https://GHPRODSRV03.giscoe.com/MogalakwenaMeterSystem/";          /// com.giscoe.mogalakwenainspections    // current appstore version:12   // Mogalakwena Inspections
//var defaultServerUrl = "https://GHDEVVMSRV05.giscoe.com/dev/GameDevOrg/";   /// com.giscoe.gamedevorg ///GameDevOrg
//var defaultServerUrl = "https://ghdevvmsrv04.giscoe.com/dev/HealthInspections/";
// Connect to this server
// UserName & Password is User1
//var defaultServerUrl = "https://GHDEVVMSRV05.giscoe.com/dev/RosaProcess/";
//"https://GHPRODSRV03.giscoe.com/RBAMobile/";
//
//var defaultServerUrl = "https://ghdevvmsrv04.giscoe.com/dev/AngloCommunitySituationRoom/";   // AngloCSR
//var defaultServerUrl = "https://ghdevvmsrv04.giscoe.com/dev/CapeTownDemoSystem/";

var guestUser = "Guest";
var FilterOption = new Object();


//var defaultServerUrl = "https://ghdevvmsrv04.giscoe.com/dev/AngloCommunitySituationRoom/";   /// com.giscoe.gamedevorg ///GameDevOrg

const cors = require('cors');
app.use(cors({
    origin: 'https://ghprodsrv03.giscoe.com/fileshare/MWDSMS_tpk.tpk'
}));