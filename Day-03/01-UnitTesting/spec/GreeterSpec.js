describe("A Greeter", function(){
    it("Should call timeService on greet", function(){
        //Arrange

       var fakeTimeService = jasmine.createSpyObj("fakeTimeService",["getCurrentTime"])
        fakeTimeService.getCurrentTime
            .andReturn(new Date("20-Apr-2015 9:00:00"));

        var greeter = new Greeter(fakeTimeService);
        /*greeter.name = "Magesh";
        var expectedResult = "Hi Magesh, Good Morning!";*/

        //Act
        greeter.greet();

        //Assert
        expect(fakeTimeService.getCurrentTime).toHaveBeenCalled();
    });
    it("Should greet Good Morning before 12", function(){
        //Arrange

       var fakeTimeService = {
            getCurrentTime : function(){
            }
        };
        spyOn(fakeTimeService, "getCurrentTime")
            .andReturn(new Date("20-Apr-2015 9:00:00"));
        var greeter = new Greeter(fakeTimeService);
        greeter.name = "Magesh";
        var expectedResult = "Hi Magesh, Good Morning!";

        //Act
        greeter.greet();

        //Assert
        expect(greeter.greetMsg).toBe(expectedResult);
    });
    it("Should greet Good Evening after 12", function(){
        //Arrange
        var fakeTimeService = {
            getCurrentTime : function(){
            }
        };
        spyOn(fakeTimeService, "getCurrentTime")
            .andReturn(new Date("20-Apr-2015 19:00:00"));
        var greeter = new Greeter(fakeTimeService);
        greeter.name = "Magesh";
        var expectedResult = "Hi Magesh, Good Evening!";

        //Act
        greeter.greet();

        //Assert
        expect(greeter.greetMsg).toBe(expectedResult);
    });
});
