function preload() {
    game.load.image('ground', 'img/ground.png');
    game.load.spritesheet('dudy', 'img/dudy.png', 32, 32, 7);
    game.load.spritesheet('drinking', 'img/drinking.png', 32, 32, 4);
    game.load.spritesheet('smoking', 'img/smoking.png', 32, 32, 4);
    game.load.spritesheet('social', 'img/social.png', 32, 32, 4);
    game.load.spritesheet('gambling', 'img/gambling.png', 32, 32, 4);
    game.load.spritesheet('nightlife', 'img/nightlife.png', 32, 32, 4);
    game.load.bitmapFont('pfont', 'img/font2.png', 'img/font2.fnt');
    game.load.json('socialevents', 'game/events.json');}