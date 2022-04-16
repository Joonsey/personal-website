"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SYS_PREFIX = ':~$ '; // Remember to change this in the HTML as well.
const opener_text = ["sudo systemctl enable Jae", "sudo systemctl start Jae \n"];
const status_request_text = ['sudo systemctl status Jae \n'];
const opener_text_element = document.getElementById("opener_text");
function typewrite_text(DOM_element, text, interval = 75, text_index = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        var i = 0;
        var text_len = text.length;
        if (text_index < text_len) {
            function write() {
                if (i < text[text_index].length) {
                    DOM_element.innerHTML += text[text_index].charAt(i);
                    i++;
                    setTimeout(write, interval);
                }
                else {
                    DOM_element.innerHTML += '<br> ' + SYS_PREFIX;
                    typewrite_text(DOM_element, text, interval, text_index + 1);
                }
            }
            write();
        }
        else
            console.log('done');
    });
}
typewrite_text(opener_text_element, opener_text);
