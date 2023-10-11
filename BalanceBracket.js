//method -1
function isBalanced(inputString) {
    const openedStack = [];
    const openingTypes = ['[', '(', '{'];
    const closingTypes = [']', ')', '}'];
    
    for (const char of inputString.split("")) {
        switch (char) {
            case '[':
            case '(':
            case '{':
                openedStack.push(openingTypes.indexOf(char));
                break;
            case ']':
            case ')':
            case '}':
                if (openedStack[openedStack.length - 1] !== closingTypes.indexOf(char)) {
                    return 'NO';
                }
                openedStack.pop();
                break;
            default:
                return 'NO';
        }
    }
    
    return openedStack.length ? 'NO' : 'YES';
}

//method -2
// function isBalanced(inputString) {
//     if (inputString.length % 2 !== 0) {
//         return 'NO'; // Early exit for odd-length strings
//     }

//     const matchingPairs = new Map([
//         ['[', ']'],
//         ['(', ')'],
//         ['{', '}']
//     ]);

//     const stack = [];

//     for (const char of inputString) {
//         if (matchingPairs.has(char)) {
//             stack.push(char);
//         } else {
//             const lastOpened = stack.pop();
//             if (matchingPairs.get(lastOpened) !== char) {
//                 return 'NO';
//             }
//         }
//     }

//     return stack.length === 0 ? 'YES' : 'NO';
// }
