function SalaryCalculator(defaults){
    defaults = defaults || {};
    this.basic = defaults.basic || 0;
    this.hra = defaults.hra || 0;
    this.da = defaults.da || 0;
    this.tax = defaults.tax || 0;
    this.salary = 0;
}

SalaryCalculator.prototype.calculate = function(){
    var gross = this.basic + this.hra + this.da;
    this.salay = gross * ((100-this.tax)/100)
};


