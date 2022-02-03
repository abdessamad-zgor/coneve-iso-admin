const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
admin.initializeApp();

exports.OnAddProductAddToIndex = functions.firestore.document('products/{productId}').onWrite((change, context) => {
  const newProduct = change.after.data();
  const newProductId = context.params.productId;
  return admin
    .firestore()
    .collection('index')
    .doc('products')
    .get()
    .then((snapshot) => {
      const productsIndex = snapshot.data();
      productsIndex.all[newProductId] = {
        title: newProduct.title,
        price: newProduct.price,
        mainImage: newProduct.images[0],
      };
      admin.firestore().collection('index').doc('products').set(productsIndex, { merge: true });
    });
});
