const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET,
};

admin.initializeApp(firebaseConfig);

export default admin;