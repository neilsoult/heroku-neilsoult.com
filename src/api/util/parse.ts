// designed to mimic angularjs' $parse method magic
// safely access object properties and returns undefined if anywhere in the chain is undefined

let $parse = (objStr, context) => {

    if (typeof objStr !== 'string') {

        return undefined;

    }

    return objStr.split('.').reduce((prev, next) => {

        if (typeof prev !== 'undefined') {

            return prev[next];

        }

        return prev;

    }, context);

};

export default $parse;
