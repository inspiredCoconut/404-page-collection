let svgContainer = document.getElementById('svgContainer');
let animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    animationData: JSON.parse(ANIMATION_DATA)
});
