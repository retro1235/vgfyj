function startClasififcation()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pml-dyeg1/', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}