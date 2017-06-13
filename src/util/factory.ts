export default class {

    static createMultiArray (length, ...args) {

        let arr = new Array(length || 0);

        for (let i = 0; i < arr.length; i++) {

            arr[i] = this.createMultiArray.apply(this, args);

        }

        return arr;

    }

}
