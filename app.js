let textbox = document.getElementById('textbox');

textbox.addEventListener('input',function(){
        let text = this.value;
        console.log(text); 
        // text length store in char variable
        let char = text.length;
        document.getElementById('char').innerHTML = char;

        //trim the words in the text character
        text= text.trim();

        let words = text.split(" ");
        //to delelete empty array
        let cleanList = words.filter(function(elem){
            return elem != "";

        })
        console.log(cleanList);
        document.getElementById('word').innerHTML = cleanList.length;



});