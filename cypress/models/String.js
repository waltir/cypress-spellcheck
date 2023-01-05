// import _ from "lodash";
//
// class String {
//     constructor(string, description, whitelist) {
//         this._string = string;
//         this._description = description;
//         this._whitelist = whitelist;
//     }
//
//     get getString() {
//         return this._string;
//     }
//
//     set setString(value) {
//         this._string = value;
//     }
//
//     get getDescription() {
//         return this._description;
//     }
//
//     set setDescription(value) {
//         this._description = value;
//     }
//
//     get getWhitelist() {
//         return this._whitelist;
//     }
//
//     set setWhitelist(value) {
//         this._whitelist = value;
//     }
//
//     sentenceContainsWord (sentence) {
//         return _.some(this.getWhitelist, (el) => _.includes(sentence.toString().toLowerCase(), el.toLowerCase()))
//     }
//     wordContainsWord(word) {
//         return _.some(this.getWhitelist, (el) => _.includes(word.toString().toLowerCase(), el.toLowerCase()))
//     }
//
//     get getOutput() {
//         return {
//             string: this.getString,
//             description: this.getDescription,
//             whitelist: this.getWhitelist
//         }
//     }
// }
//
// export default String;