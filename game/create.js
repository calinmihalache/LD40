var gFirst = 1;
function create() {
    this.first = gFirst;
    gFirst++;
    this.game.stage.backgroundColor = '#697e96';
    this.ground = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('ground').height,
        this.game.width,
        this.game.cache.getImage('ground').height,
        'ground'
    );
    this.dudy = game.add.sprite(300, 530, 'dudy');
    this.dudy.animations.add('idle', [0, 1]);
    this.dudy.animations.add('dead', [5, 6]);
    this.dudy.animations.add('walk', [0, 2, 3, 4]);
    this.dudy.anchor.setTo(.5, 1);
    this.dudy.smoothed = false;
    this.dudy.scale.x = 5;
    this.dudy.scale.y = 5;

    this.cursors = game.input.keyboard.createCursorKeys();
    this.One = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
    this.Two = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
    this.Three = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
    var socialeventsJSON = game.cache.getJSON('socialevents');

    this.eventsCol = Array();
    for(var i=0; i<socialeventsJSON.data.length;i++) {
        var auxAns = Array();
        var auxE = socialeventsJSON.data[i];
        for (var j = 0; j < auxE.answers.length; j++) {
            var aux = auxE.answers[j];
            auxAns.push(new Answer(j, aux.title, new Effect(aux.effect[0], aux.effect[1], aux.effect[2], aux.effect[3], aux.effect[4]), new StateFactor(aux.factor[0], aux.factor[1], aux.factor[2], aux.factor[3], aux.factor[4])));
        }
        this.eventsCol.push(new EventC(auxE.title, auxAns));
    }
    this.backMessages = Array();
    this.backMessages.push("Life doesn't go backwards...");
    this.backMessages.push("In life there is no 'Respawn to last checkpoint'");
    this.backMessages.push("Life is unidirectional.");
    this.backMessages.push("Access denied! Life forbids this action.");
    this.backMessages.push("Be realistic, man. You cannot go back in time!");

    this.dOver = Array();
    this.dOver.push("Your liver is... You have no liver left!!!");
    this.dOver.push("You drowned in your vomit. Pathetic!");
    this.dOver.push("You drove into a tree... And the whiskey bottle in your hand went trough your head!");
    this.dOver.push("Your life opportunity is like you lived your life: WASTED!");
    this.dOver.push("There is no turning back from alcoholic coma...");

    this.sOver = Array();
    this.sOver.push("Your lungs are... You have no lungs left!!!");
    this.sOver.push("You coughed yourself to death.");
    this.sOver.push("You coughed the rest of your lungs.");

    this.mOver = Array();
    this.mOver.push("You forgot to eat! Dumbass!");
    this.mOver.push("You scrolled yourself to death,");
    this.mOver.push("You have reached the end of News Feed");
    this.mOver.push("A car ran over you while writing an entry on your wall");

    this.gOver = Array();
    this.gOver.push("A loan shark beat you to death!");
    this.gOver.push("You choked on a poker chip.");
    this.gOver.push("You had a heart attack after you won the Jackpot.");

    this.nOver = Array();
    this.nOver.push("Too much Energy will kill you, they said. They didn't lie.");
    this.nOver.push("You wanted to ask a girl to a dance. She said Yes. You had a heart attack.");
    this.nOver.push("Do you even remember the last time you've slept?");
    this.nOver.push("That lap dance was a... Killer!");
    this.nOver.push("STD is not a drug!");

    this.gameOver = 0;


    this.dudy.animations.play('idle', 1, true);
    this.idle = 1;
    this.timelinePosition = 0;
    this.activeEvent = 0;
    this.month = 0;
    this.aEvent = null;






    //this.eventsCol.push(new EventC("Event 2", auxAns));
    //this.eventsCol.push(new EventC("Event 3", auxAns));
    this.aState = new DudyStates(10, 10, 10, 10, 10);
    this.titleText = null;

    this.activeMessage = 0;
    this.gameText = game.add.bitmapText(20, 550, 'pfont', "VICE LIFE - game made by @meskaline for Ludum Dare 40",32);
    this.gameText = game.add.bitmapText(20, 570, 'pfont', "Use LEFT and RIGHT to navigate trough life. 1,2,3 to resolve events. Have fun!",24);
    this.gameText = game.add.bitmapText(100 - 32, 120, 'pfont', "Drinking",24);
    this.gameText = game.add.bitmapText(250 - 32, 120, 'pfont', "Smoking",24);
    this.gameText = game.add.bitmapText(400 - 42, 120, 'pfont', "Social Media",24);
    this.gameText = game.add.bitmapText(550 - 32, 120, 'pfont', "Gambling",24);
    this.gameText = game.add.bitmapText(700 - 36, 120, 'pfont', "Nightlife",24);
    this.ageText = game.add.bitmapText(600, 510, 'pfont', "Age: 21",64);
}