const label_nodes = document.querySelectorAll('.form-control label');
const form_control = document.querySelectorAll('.form-control');
const form_spans = document.querySelectorAll('.form-span');

console.log(label_nodes);

label_nodes.forEach((node, index) => {
    let count = 50;

    const texts = node.innerText.split("");
    console.log(texts);
    texts.forEach(word => {
        console.log(word);
        const span_el = document.createElement('span');
        span_el.innerText = word;
        count = count + 100;
        let time_delay = `${count}ms`;
        span_el.style.transitionDelay = time_delay;
        form_spans[index].appendChild(span_el);
    })
})

