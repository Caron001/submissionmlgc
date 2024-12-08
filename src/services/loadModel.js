const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/submissionmlgc-aaron-storage/model.json');
}
module.exports = loadModel;