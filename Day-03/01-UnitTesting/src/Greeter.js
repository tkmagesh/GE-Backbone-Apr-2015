function Greeter(timeService){
    this.name = "";
    this.greetMsg = "";
    this.greet = function(){
        var currentHour = timeService.getCurrentTime().getHours();
        if (currentHour < 12){
            this.greetMsg = "Hi " + this.name + ", Good Morning!";
        }
        else {
            this.greetMsg = "Hi " + this.name + ", Good Evening!";
        }
    }
}

function TimeService(){
    this.getCurrentTime = function(){
        return new Date();
    }
}
