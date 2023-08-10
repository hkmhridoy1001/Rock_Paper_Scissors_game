const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

//Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        //Loop through each option image again
        optionImages.forEach((image2, index2) => {

            //if the current index doesen't match the clicked indes 
            //Remove the "active" class from mthe other images
            index !== index2 && image2.classList.remove("active");
        });
        gameContainer.classList.add("start");

        //Set  a timeout to delay the result calculation

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            //Get the source of the clicked option image

            let imageSrc = e.target.querySelector("img").src;
            //Set the user image to the clicked option image
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3);
            //Create an array of cpu image options
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            //Set the cpu image to a random option from the array
            cpuResult.src = cpuImages[randomNumber];

            //Assign a letter value to the cpu option (R for rock , p for papper, S for scissors)
            let cpuValue = ["R", "P", "S"][randomNumber]
            //Assign a letter value to the clicked optin (based on index)
            let userValue = ["R", "P", "S"][index];

            //Create an object with all possible outcomes 
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "User",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            //Look up the outcome value bassed on user and cpu options
            let outComeValue = outcomes[userValue + cpuValue];
            //Display the result 
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
        }, 2500);


    });
});