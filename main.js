function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = img id="captured_image" src="'+data_uri+'"/>';
}

console.log('ml5versiob:', ml5.version);
classifier = ml5.imageClassifier('//upload modal//',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = nem SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHtml = results[0].label;
        document.getElementById("result_emotion_name2").innerHtml = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "thumbs up")
        {
            document.getElementById("Update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label == "super")
        {
            document.getElementById("Update_emoji").innerHTML = "&#128076;";
        }
        if(results[0].label == "peace")
        {
            document.getElementById("Update_emoji").innerHTML = "&#9996;";
        }
        if(results[1].label == "thumbs up")
        {
            document.getElementById("Update_emoji2").innerHTML = "&#128522;";
        }
        if(results[1].label == "super")
        {
            document.getElementById("Update_emoji2").innerHTML = "&#128076;";
        }
        if(results[1].label == "peace")
        {
            document.getElementById("Update_emoji2").innerHTML = "&#9996;";
        }  
    }
}