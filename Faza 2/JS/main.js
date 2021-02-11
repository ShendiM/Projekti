var divElements = document.getElementsByClassName('slider-content');
        var sliderIndex = 0;

        document.getElementsByClassName('slider')[0].addEventListener('click', function(event){
            divElements[sliderIndex].classList.remove('active');
            divElements[sliderIndex].classList.add('not-active');

            sliderIndex++;
            if(sliderIndex==divElements.length){
                sliderIndex = 0;
            }

            divElements[sliderIndex].classList.add('active');
            divElements[sliderIndex].classList.remove('not-active');


            }
        )
        function validate(str){
            var inputList = document.getElementsByClassName("input");
            if(str == "login"){
        
                if(inputList[0].value == ""){
                    alert("Fill the data for Username");
                }
                else if(inputList[1].value == ""){
                    alert("Fill the data for Password");
                }
                else{
                    alert("Login Successful");
                }
            }
            if(str == "register"){
                if(inputList[3].value == ""){
                    alert("Fill the data for Name");
                }
                else if(inputList[4].value == ""){
                    alert("Fill the data for Last Name");
                }
                else if(inputList[5].value == ""){
                    alert("Fill the data for E-mail")
                }
                else if (!inputList[5].value.includes("@")){
                    alert("Email must contain @");
                }
                else if(inputList[6].value == ""){
                    alert("Fill the data for Password")
                }
                else if(inputList[7].value == "") {
                    alert("Fill the data for Confirm Password");
                }
                else if(inputList[7].value != inputList[6].value) {
                    alert("Password and Confirm Password do not match");
                }
                else{
                    alert("Registration Successful");
                }
            }
        }
        
        function changeForm(number){
            var divList = document.getElementsByClassName("forms");
            if(number == 0){
                divList[0].classList.add("form-style");
                divList[0].classList.remove("hidden");
        
                divList[1].classList.add("hidden");
                divList[1].classList.remove("form-style");
            }
            else if(number == 1){
                divList[1].classList.add("form-style");
                divList[1].classList.remove("hidden");
        
                divList[0].classList.add("hidden");
                divList[0].classList.remove("form-style");
            }
        }
        function validateCon(){
            var inputList = document.getElementsByClassName('input');
            if(inputList[0].value == ""){
                alert('Fill the data for First Name');
            }
            else if(inputList[1].value == ""){
                alert('Fill the data for Last Name');
            }
            else if(inputList[2].value == ""){
                alert('Fill the data for Email');
            }
            else if(!inputList[2].value.includes('@')){
                alert('Emali must contain @');
            }
            else if(inputList[3].value == ""){
                alert('Fill the data for Password');
            }
            else if(inputList[4].value == ""){
                alert('Fill the data for Confirm Password');
            }
            else if(inputList[4].value != inputList[3].value){
                alert('Paswword and Confirm Password do not match');
            }
            else if(inputList[5].value == ""){
                alert('Fill the data for Subject');
            }
            else{
                alert('You have successfully contacted us!');
            }
        }       