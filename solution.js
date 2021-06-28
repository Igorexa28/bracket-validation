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

        const keys = Array.from(map.keys()), 
            values = Array.from(map.values()),
            union = keys.concat(values);

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
            return 'Length of string is zero.';
        } else {
            const elementsOfStr = this.string.split('');

            for (let i = 0; i < elementsOfStr.length / 2; i++) {
                let elementFromStart = elementsOfStr[i],
                    elementFromEnd = elementsOfStr[elementsOfStr.length - i - 1];

                let index = keys.indexOf(elementFromStart);

                if (index === -1) {
                    console.log(`NOT BALANCED(${i + 1})`);
                    return i + 1;
                } else {
                    if (elementFromEnd !== values[index]) {
                        console.log(`NOT BALANCED(${i + 1})`);
                        return i + 1;
                    }
                }
            }
            console.log('BALANCED');
            return -1;
        }
    }
};

const firstInstance = new BalanceVerificator('s[]');
console.log(firstInstance.balanced());
