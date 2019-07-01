PIXI.utils.skipHello();

let app = new PIXI.Application({
    width: 800,
    height: 600,
    view: document.getElementById('canvas')
});

let loader = new PIXI.loaders.Loader();

loader.add('bird', '/assets/spine/bird.json');

loader.load((loader) => {
    
    let bird = new PIXI.spine.Spine(loader.resources['bird'].spineData);
    console.log(bird.spineData.animations.map(v => v.name));
    
    app.stage.addChild(bird);
    
    bird.position.set(400, 300);

    bird.state.setAnimation(0, 'WinEffect', true);
    bird.state.setAnimation(1, 'Win', true);
})
