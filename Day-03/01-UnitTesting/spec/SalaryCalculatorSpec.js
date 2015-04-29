describe("A Salary Calculator", function(){
    it("Should have the basic value 0", function(){
        //Arrange
        var calculator = new SalaryCalculator();

        //Act

        //Assert
        expect(calculator.basic).toBe(0);
    })
    it("Should initialize the basic with the given value", function(){
        //Arrange
        var defaults = getSalaryCalculatorDefaults();
        var calculator = new SalaryCalculator(defaults);

        //Act

        //Assert
        expect(calculator.basic).toBe(defaults.basic);
    })
})
