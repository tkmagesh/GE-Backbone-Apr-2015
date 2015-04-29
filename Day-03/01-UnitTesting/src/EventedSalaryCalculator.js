function EventedSalaryCalculator(){
            var _data = {
            };
            this.get = function(attrName){
                return _data[attrName];
            };
            this.set = function(attrName, value){
                _data[attrName] = value;
                //trigger change notification for [attrName]
                var eventListeners = _events[attrName] || [];
                eventListeners.forEach(function(listenerFn){
                    setTimeout(listenerFn);
                });
            }

            var _events = {
            };
            this.addChangeListener = function(attrName, listenerFn){
                _events[attrName] = _events[attrName] || [];
                _events[attrName].push( listenerFn );
            };
            this.removeChangeListener = function(attrName, listenerFn){
                //fill in the blanks - home work
            }
        }
        EventedSalaryCalculator.prototype.calculate = function(){
            var gross = this.get('basic') + this.get('hra') + this.get('da');
            var net = gross * ((100-this.get('tax'))/100);
            this.set('salary',net);

        }
