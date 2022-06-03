function startClassification()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/E6IrRmM-n9/model.json',model_loaded)
}
function model_loaded()
{
    classifier.classify(gotResults)
}
function gotResults(error,results)
{
if(error)  
{
    console.error(error)
} 
else
{
    console.log(results)
    random_r = Math.floor(Math.random()*256)
    random_g = Math.floor(Math.random()*256)
    random_b = Math.floor(Math.random()*256)
    document.getElementById("sound_result").innerHTML = results[0].label;
    document.getElementById("accuracy_result").innerHTML = results[0].confidence.toFixed(3);
    document.getElementById("heading2").style.color = "rgb("+random_r+","+random_g+","+random_b+")"
    document.getElementById("heading3").style.color = "rgb("+random_r+","+random_g+","+random_b+")"
    img1 = document.getElementById("animal")
    if(results[0].label == "purring")
    {
        img1.src = "cat.png"
    }
    if(results[0].label == "bark")
    {
        img1.src = "dog.png"
    }
    if(results[0].label == "roar")
    {
        img1.src = "lion.png"
    }
    if(results[0].label == "Background Noise")
    {
        img1.src = "ear.png"
    }
} 
}