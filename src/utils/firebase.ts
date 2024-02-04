const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
require("dotenv").config();
const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "portfolio-2db20.appspot.com",
};

admin.initializeApp(firebaseConfig);

export default admin;