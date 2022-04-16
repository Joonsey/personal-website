const SYS_PREFIX: string = ':~$ ' // Remember to change this in the HTML as well.

const opener_text: string[] = ["sudo systemctl enable Jae", "sudo systemctl start Jae \n"]
const status_request_text: string[] = ['sudo systemctl status Jae \n']

const opener_text_element: HTMLElement = document.getElementById("opener_text")!;

async function typewrite_text(DOM_element: HTMLElement, text: string[], interval: number = 75, text_index: number = 0) {
    var i: number = 0
    var text_len: number = text.length
    
    if (text_index < text_len) {
        function write() {
                if (i < text[text_index].length) {
                    DOM_element.innerHTML += text[text_index].charAt(i)
                    i++;
                    setTimeout(write, interval)
                }else {
                    DOM_element.innerHTML += '<br> ' +SYS_PREFIX
                    typewrite_text(DOM_element, text, interval, text_index+1)
                }
        }
        write()
    }
    else
        
    console.log('done')
}
typewrite_text(opener_text_element, opener_text)