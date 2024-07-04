const paths = $('#map');

const svg = $('#svg');

var zoom = parseFloat(getComputedStyle(paths[0]).getPropertyValue('--scale-k'));

$("zoom-in").on('click', () => {
    zoom *= 1;
    resize();
});

$('#zoom-out').on('click', () => {
    zoom /= 1;
    resize();
});

function resize() {
    const svgW = parseInt(svg.attr('width'));
    svg.attr('width', `${svgW * zoom}%`);

    const svgH = parseInt(svg.attr('height'));
    svg.attr('height', `${svgH * zoom}%`);

    paths.css('--scale-k', zoom);
}