describe("An EventedSalaryCalculator", function(){
    it("Should trigger the change event on attribute change", function(){
        //Arrange
        var calculator = new EventedSalaryCalculator();
        var onBasicChange = jasmine.createSpy("onBasicChange");

        calculator.addChangeListener("basic", onBasicChange);

        //Act
        calculator.set("basic",10000);


        waitsFor(function(){
            return onBasicChange.callCount > 0;
        }, "basic change event didnot trigger", 1000);

        //Assert
        runs(function(){
            expect(onBasicChange).toHaveBeenCalled();
        });
    })
});
