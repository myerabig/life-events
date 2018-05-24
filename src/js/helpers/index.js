import helpersModule from 'handlebars-helpers';

const debug = (optionalValue) => {
    console.log("Current Context");
    console.log("====================");
    console.log(this);

    if (optionalValue) {
        console.log("Value");
        console.log("====================");
        console.log(optionalValue);
    }
}

const register = function (Handlebars) {

    const externalHelpers = helpersModule()

    const helpers = {
        ...externalHelpers,
        debug
    }

    if (Handlebars && typeof Handlebars.registerHelper === "function") {
        for (var prop in helpers) {
            Handlebars.registerHelper(prop, helpers[prop]);
        }
    } else {
        return helpers;
    }

};

const helpers = register(null)

export {
    register,
    helpers
}