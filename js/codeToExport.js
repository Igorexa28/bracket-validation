class IllegalArgumentException extends Error {
    constructor(message) {
        super(message);
        this.name = 'IllegalArgumentException';
    }
}

class BalanceVerificator {
    constructor(string) {
        this.string = string; 
    }

    balanced() {
        const map = new Map();
        map.set("{", "}")
            .set("[", "]")
            .set("(", ")");

        const keys = Array.from(map.keys()); 
        const values = Array.from(map.values());
        const union = keys.concat(values);

        try {
            for (let i = 0; i < this.string.length; i++) {
                if (!union.includes(this.string[i])) {
                    throw new IllegalArgumentException();
                }
            }
        } catch(error) {
            return error.name;
        }

        if (this.string.length === 0) {
            return 'Empty input';
        } else {
            const elementsOfStr = this.string.split('');
            const temporalStorage = [];

            for (let i = 0 ; i < elementsOfStr.length; i++) {
                let element  = elementsOfStr[i];

                if (keys.includes(element)) {
                    temporalStorage.push(element);
                }

                if (values.includes(element)) {
                    let position = values.indexOf(element);

                    if (temporalStorage.length !== 0) {
                        if (keys[position] === temporalStorage[temporalStorage.length - 1]) {
                            temporalStorage.pop();
                        } else {
                            console.log(`NOT BALANCED(${i})`);
                            return (i);
                        }

                    } else {
                        console.log(`NOT BALANCED(${i + 1})`);
                        return (i + 1);
                    }
                }
            }

            if (temporalStorage.length === 0) {
                console.log('BALANCED');
                return -1;
            }
        }
    }
};

export function testFunction(string) {
    const instanceOfVerificator = new BalanceVerificator(string);
    return instanceOfVerificator.balanced();
}