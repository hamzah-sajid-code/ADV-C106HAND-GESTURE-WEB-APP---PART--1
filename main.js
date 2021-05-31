Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach('#camera')

function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img src="'+data_uri+'" id="img_capture">';
    })
}
console.log('ML5 Version: '+ml5.version);
classfier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/gkknPGFkZ/model.json', modelLoaded);
function modelLoaded(){
    console.log('Successfully Loaded the model')
}