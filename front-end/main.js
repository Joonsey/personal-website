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
const opener_text = ["sudo systemctl enable Jae", "sudo systemctl start Jae"];
const status_request_text = ['sudo systemctl status Jae'];
const status_resposne_text = `
    <span class="status">
    <p class="left-status-bit"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle r="10.5" transform="matrix(-1 0 0 1 10.5 10.5)" fill="#27AE60"/>
    </svg>
     Jae.service<br>
    Loaded: <br>
    Active: <br>
    Main PID: <br>
    Tasks: <br>
    CGroup: </p> 
    <p>&nbsp; - Developer and Data Enthusiast<br>
     loaded (/etc/systemd/system/Jae.service; enabled;) <br>
     <span id="active">active (running)</span> since Fri 2002-18-01;  <br>
     2 (Jae) <br>
     3 (limit: undefined) <br>
     /system.slice/Jae.service
     </p></span>

    <span class="🍎"><svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.24734 0L4.24735 40L43 40" stroke="white" stroke-width="7"/>
    </svg>2 /usr/bin/automation <a href="https://github.com/Joonsey/Pocopoc">Github Repo</a></span> <br>
    <span class="🍎"><svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.24734 0L4.24735 40L43 40" stroke="white" stroke-width="7"/>
    </svg>2 /usr/bin/data_visualization <a href="https://github.com/Joonsey/coin-api-wrapper">Github Repo</a></span> <br>
    <span class="🍎"><svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.24734 0L4.24735 40L43 40" stroke="white" stroke-width="7"/>
    </svg>2 /usr/bin/machine_learning <a href="https://github.com/Joonsey/cifar10">Github Repo</a></span> <br>
    <span class="🍎"><svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.24734 0L4.24735 40L43 40" stroke="white" stroke-width="7"/>
    </svg>2 /usr/bin/full_stack_web_dev <a href="https://github.com/Joonsey/personal-website">Github Repo</a></span> <br>
    `;
var ready = false;
var scroll_event_amount = 0;
const opener_text_element = document.getElementById("opener_text");
function typewrite_text(DOM_element, text, interval = 75, text_index = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        var i = 0;
        var text_len = text.length;
        if (text_index < text_len) {
            function write() {
                if (i < text[text_index].length) {
                    var character = text[text_index].charAt(i);
                    DOM_element.innerHTML += character;
                    i++;
                    setTimeout(write, interval);
                    if (character == text[text_index].charAt(text[text_index].length - 1) && text_index == text_len - 1) {
                        make_ready();
                    }
                    else { }
                }
                else {
                    DOM_element.innerHTML += '<br> ' + SYS_PREFIX;
                    typewrite_text(DOM_element, text, interval, text_index + 1);
                }
            }
            write();
        }
    });
}
function make_ready() {
    ready = true;
}
function on_scroll_event_handler() {
    return __awaiter(this, void 0, void 0, function* () {
        if (ready) {
            ready = false;
            var interval = 75;
            typewrite_text(opener_text_element, ['clear'], interval);
            setTimeout(() => { opener_text_element.innerHTML = SYS_PREFIX; }, 'clear'.length * interval + interval * 2);
            scroll_event_amount += 1;
            setTimeout(main_loop, 1000);
        }
    });
}
document.addEventListener('wheel', on_scroll_event_handler);
function main_loop() {
    switch (scroll_event_amount) {
        case 0:
            typewrite_text(opener_text_element, opener_text);
            break;
        case 1:
            typewrite_text(opener_text_element, status_request_text);
            setTimeout(() => { opener_text_element.innerHTML += status_resposne_text; }, 4000);
            ready = false;
            setTimeout(make_ready, 15000);
            break;
    }
}
main_loop();
